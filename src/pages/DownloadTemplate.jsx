import { X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

const TEMPLATE_FILES = {
  engineering: {
    name: 'Engineering Template.pdf',
    url: 'https://docs.google.com/document/d/16pphnCTQUebUAl_66QNE-gIMRDpxbgEH/export?format=pdf'
  },
  technology: {
    name: 'Technology Template.pdf',
    url: 'https://drive.google.com/uc?export=download&id=YOUR_TECH_DRIVE_FILE_ID'
  },
  accounting: {
    name: 'Accounting Template.pdf',
    url: 'https://drive.google.com/uc?export=download&id=YOUR_ACCOUNTING_DRIVE_FILE_ID'
  }
};

const templates = [
  {
    id: 'engineering',
    industry: 'Engineering',
    price: 10,
    description: 'Professional engineering templates for your projects'
  },
  {
    id: 'technology',
    industry: 'Technology',
    price: 10,
    description: 'Modern technology templates and documentation'
  },
  {
    id: 'accounting',
    industry: 'Accounting',
    price: 10,
    description: 'Comprehensive accounting templates and forms'
  }
];

// PayPal configuration
// const PAYPAL_CLIENT_ID = "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R"; 
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
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 text-xl">📄</span>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{template.industry}</h3>
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Purchase History</h3>
      </div>
      <div className="divide-y divide-gray-200">
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

const DownloadTemplate = () => {
  const { isLoaded, isLoading, error, retry } = usePayPalSDK();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Premium Templates</h1>
          <p className="text-gray-600">Professional templates for your Application needs needs</p>
        </div>
        
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
        
        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
        
        {/* Payment History */}
        <PaymentHistory />
      </div>
    </div>
  );
};

export default DownloadTemplate;