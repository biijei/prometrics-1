import { X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { TEMPLATE_FILES, templates } from '../components/Template/TemplateData';
import { Filter } from 'lucide-react';
import { useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import template from '../assets/images/template.png'
import { Link } from 'react-router-dom'

// PayPal configuration
const PAYPAL_CLIENT_ID ="Ade8k3M3EeXrmvoP2XVgSgTsFdwfrWxMYZ2gLqop09h8lBxs4hvlp_YLIOQxju-aKdZ3mAvDrSn92aWc"

// Enhanced PayPal SDK loader with retry mechanism
const usePayPalSDK = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const retryCountRef = useRef(0);
  const maxRetries = 3;

  const loadSDK = () => {
    // Check if PayPal is already loaded
    if (window.paypal) {
      setIsLoaded(true);
      setIsLoading(false);
      return;
    }

    // Remove any existing script
    const existingScript = document.querySelector('script[src*="paypal.com/sdk"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD&intent=capture&enable-funding=venmo,paylater`;
    script.async = true;
    
    script.onload = () => {
      console.log('PayPal SDK loaded successfully');
      setIsLoaded(true);
      setIsLoading(false);
      setError(null);
    };

    script.onerror = () => {
      console.error(`PayPal SDK failed to load. Attempt ${retryCountRef.current + 1}`);
      
      if (retryCountRef.current < maxRetries) {
        retryCountRef.current++;
        setTimeout(() => {
          console.log(`Retrying PayPal SDK load... Attempt ${retryCountRef.current}`);
          loadSDK();
        }, 2000 * retryCountRef.current); // Exponential backoff
      } else {
        setError('Failed to load PayPal SDK after multiple attempts');
        setIsLoading(false);
        toast.error('Payment system unavailable. Please try again later.');
      }
    };

    document.head.appendChild(script);
  };

  useEffect(() => {
    loadSDK();
  }, []);

  const retry = () => {
    retryCountRef.current = 0;
    setError(null);
    setIsLoading(true);
    loadSDK();
  };

  return { isLoaded, isLoading, error, retry };
};

const TemplateCard = ({ template }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const [showPayPal, setShowPayPal] = useState(false);
  const paypalRef = useRef();

  const downloadFile = (templateId) => {
    const templateFile = TEMPLATE_FILES[templateId];
    
    if (!templateFile) {
      toast.error('Template file not found!');
      return;
    }

    // if (templateFile.data) {
    //   const link = document.createElement('a');
    //   link.href = templateFile.data;
    //   link.download = templateFile.name;
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    //   toast.success('Download started!');
    // }
    
    if (templateFile.url) {
      window.open(templateFile.url, '_blank');
    }
  };

  const isPaid = () => {
    const paidTemplates = JSON.parse(localStorage.getItem('paidTemplates') || '[]');
    return paidTemplates.includes(template.id);
  };

  const handleBuyClick = () => {
    if (isPaid()) {
      downloadFile(template.id);
      return;
    }

    if (!window.paypal) {
      toast.error('Payment system is still loading. Please wait...');
      return;
    }

    setShowPayPal(true);
    setTimeout(() => renderPayPalButton(), 100);
  };

  const renderPayPalButton = () => {
    if (!window.paypal || !paypalRef.current) return;

    // Clear any existing PayPal buttons
    paypalRef.current.innerHTML = '';

    window.paypal.Buttons({
      style: {
        color: 'gold',
        shape: 'rect',
        label: 'paypal',
        layout: 'vertical'
      },
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: template.price.toString(),
              currency_code: 'USD'
            },
            description: `${template.industry} Template - ${template.name}`
          }],
          application_context: {
            shipping_preference: 'NO_SHIPPING'
          }
        });
      },
      onApprove: async (data, actions) => {
        try {
          setIsProcessing(true);
          const order = await actions.order.capture();
          
          if (order.status === 'COMPLETED') {
            // Store payment info
            const paidTemplates = JSON.parse(localStorage.getItem('paidTemplates') || '[]');
            paidTemplates.push(template.id);
            localStorage.setItem('paidTemplates', JSON.stringify(paidTemplates));
            
            const paymentHistory = JSON.parse(localStorage.getItem('paymentHistory') || '[]');
            paymentHistory.push({
              templateId: template.id,
              orderId: order.id,
              amount: template.price,
              timestamp: new Date().toISOString(),
              industry: template.industry,
              payerEmail: order.payer?.email_address || 'N/A'
            });
            localStorage.setItem('paymentHistory', JSON.stringify(paymentHistory));
            
            setPaymentStatus('paid');
            setShowPayPal(false);
            downloadFile(template.id);
            toast.success('Payment successful! Download started.');
          }
        } catch (error) {
          console.error('Payment capture error:', error);
          toast.error('Payment processing failed. Please try again.');
          setPaymentStatus('failed');
        } finally {
          setIsProcessing(false);
        }
      },
      onError: (err) => {
        console.error('PayPal error:', err);
        setPaymentStatus('failed');
        toast.error('Payment failed. Please try again.');
        setIsProcessing(false);
      },
      onCancel: () => {
        setShowPayPal(false);
        setPaymentStatus('idle');
        setIsProcessing(false);
        toast.info('Payment cancelled');
      }
    }).render(paypalRef.current);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-border p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center">
          <span className="text-primary text-xl">📄</span>
        </div>
        <h3 className="text-l font-semibold leading-tight">{template.name}</h3>
      </div>
      
      <p className="w-fit bg-primary text-white px-2 py-1 rounded-full text-xs font-medium mb-1">
        {template.category}
      </p>
      <p className="text-gray-600 mb-4">{template.description}</p>
      
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-primary">${template.price}</span>
          
          {isPaid() ? (
            <button
              onClick={() => downloadFile(template.id)}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Download Again
            </button>
          ) : (
            <button
              onClick={handleBuyClick}
              disabled={isProcessing}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {isProcessing ? 'Processing...' : 'Buy Now'}
            </button>
          )}
        </div>
        
        {paymentStatus === 'paid' && (
          <div className="text-secondary text-sm mb-2 px-4 py-2 bg-tertiary rounded w-fit">
            Payment completed! Download started.
          </div>
        )}
        
        {paymentStatus === 'failed' && (
          <div className="text-red-600 text-sm mb-2 p-2 bg-red-50 rounded">
            ❌ Payment failed. Please try again.
          </div>
        )}
        
        {showPayPal && (
          <div className="fixed inset-0 z-50 animate-jump bg-[#3a3a3a]/30 bg-opacity-50 flex justify-center items-center p-4 sm:p-6">
            <div className="relative w-fit max-w-[735px] max-h-[90vh] sm:max-h-[95vh] flex flex-col">
              {/* Close Button - Always visible and accessible */}
              <button
                onClick={() => {
                  setShowPayPal(!showPayPal);
                }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 bg-white h-8 w-8 sm:h-10 sm:w-10 text-gray-500 hover:text-gray-700 cursor-pointer justify-center items-center flex rounded-full shadow-lg border border-border"
              >
                <X size={16} className="sm:w-5 sm:h-5" />
              </button>

              {/* Modal Content - Scrollable */}
              <div className="bg-[#ffffff] rounded-[16px] overflow-hidden flex flex-col items-center justify-between w-[300px] md:w-[400px] h-full">
                <div className="flex-1 overflow-y-auto no-scrollbar px-4 sm:px-10 py-4 sm:py-6 lg:py-8">
                  <div className="">
                    <p className="text-lg font-semi bold text-secondary mb-3">Complete your payment:</p>
                    <div ref={paypalRef} className="paypal-button-container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('paymentHistory') || '[]');
    setPayments(history);
  }, []);

  const redownloadTemplate = (templateId) => {
    const templateFile = TEMPLATE_FILES[templateId];
    
    if (templateFile?.data) {
      const link = document.createElement('a');
      link.href = templateFile.data;
      link.download = templateFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('Download started!');
    }
    if (templateFile?.url) {
      window.open(templateFile.url, '_blank');
    }
  };

  if (payments.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-lg">No purchases yet</p>
        <p className="text-gray-400 text-sm">Your purchased templates will appear here</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-border">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold">Purchase History</h3>
      </div>
      <div className="divide-y divide-border">
        {payments.map((payment, index) => (
          <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{payment.industry} Template</h4>
                <div className="text-sm text-gray-500 mt-1">
                  <p>Order ID: {payment.orderId}</p>
                  <p>Date: {new Date(payment.timestamp).toLocaleDateString()}</p>
                  <p>Amount: ${payment.amount}</p>
                </div>
              </div>
              <button
                onClick={() => redownloadTemplate(payment.templateId)}
                className="ml-4 text-primary hover:text-secondary text-sm font-medium transition-colors"
              >
                Download Again
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Template = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { isLoaded, isLoading, error, retry } = usePayPalSDK();
  const itemsPerPage = 21;

  // Get unique categories
   const getCategories = () => {const categories = [...new Set(templates.map(news => news.category))];
    return ['All', ...categories];
  };
  
  const categories = getCategories()

  const filteredTemplates = useMemo(() => {
      if (selectedCategory === 'All') return templates;
      return templates.filter(template => template.category === selectedCategory);
    }, [selectedCategory]);

    const paginatedNews = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTemplates.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTemplates, currentPage]);
  
  const totalPages = Math.ceil(filteredTemplates.length / itemsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-gray-50 pb-[50px] mt-[90px]">
        <div className='flex flex-col md:flex-row justify-between items-center gap-x-14 h-[300px] bg-[#040404] text-white mt-[90px] pb-[50px] px-[5%] py-8 mb-10'>
          <div >
            <p>Do you want a template for your industry?</p>
            <h2 className='mb-6'>Get a Template for $10</h2>
            <p className='text-[#a5a4a4]'>We have design 4 major templates categories which cut across all industries.</p>
            <div>EB-1A Templates | Recommendation letters | EB2-NIW Templates | Others</div>
            <Link to="/get-template">
              <button type='submit' className='forward-button w-full sm:w-[218px] rounded-[40px] bg-white text-black text-base font-semibold px-4 py-3 mt-4'>
                <span className=''>Pay Now</span>
              </button>
            </Link>
          </div>
          <div className=''>
            <img 
              src={template} 
              alt="Prometrics Templates"
              className='w-[400px]'
            />
          </div>
  
        </div>
        <div className="max-w-6xl mx-auto px-4">
          {/* <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Premium Templates</h1>
            <p className="text-gray-600">Professional templates for your application needs</p>
          </div> */}
          
          {/* PayPal Status */}
          <div className="mb-6">
            {isLoading && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-border mr-3"></div>
                  <span className="text-primary">Loading payment system...</span>
                </div>
              </div>
            )}
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-red-700">❌ {error}</span>
                  <button
                    onClick={retry}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                  >
                    Retry
                  </button>
                </div>
              </div>
            )}
            
            {isLoaded && (
              <div className="bg-tertiary border border-border rounded-lg p-4">
                <span className="text-primary">Payment system ready</span>
              </div>
            )}
          </div>
          
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className='mb-12'>
            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
              {paginatedNews.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>

            {/* No Results Message */}
            {paginatedNews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No news found for the selected category.</p>
              </div>
            )}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? 'bg-primary text-white'
                        : 'border border-primary hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>
              </div>
            )}
          </div>

          {/* Payment History */}
          <PaymentHistory />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Template;