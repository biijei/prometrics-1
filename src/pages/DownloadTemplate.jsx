import React, { useState } from 'react';

// Store files as base64 strings or use public URLs
const TEMPLATE_FILES = {
  engineering: {
    name: 'Engineering Template.pdf',
    // Option 1: Base64 encoded PDF (for small files)
    data: 'data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0xlbmd0aCA0NAo+PgpzdHJlYW0KQVQKL0YxIDEyIFRmCjEwMCA3MDAgVGQKKEVuZ2luZWVyaW5nIFRlbXBsYXRlKSBUagpFVApzdHJlYW0KZW5kb2JqCnhyZWYKMCA2CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDAwMDU4IDAwMDAwIG4gCjAwMDAwMDAxMTUgMDAwMDAgbiAKMDAwMDAwMDI0NSAwMDAwMCBuIAowMDAwMDAwMzIyIDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgNgovUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDE0CiUlRU9G',
    // Option 2: Google Drive public link (recommended for larger files)
    url: 'https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID'
  },
  technology: {
    name: 'Technology Template.pdf',
    data: 'data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0xlbmd0aCA0Mgo+PgpzdHJlYW0KQVQKL0YxIDEyIFRmCjEwMCA3MDAgVGQKKFRlY2hub2xvZ3kgVGVtcGxhdGUpIFRqCkVUCnN0cmVhbQplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExNSAwMDAwMCBuIAowMDAwMDAwMjQ1IDAwMDAwIG4gCjAwMDAwMDAzMjIgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA2Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo0MTQKJSVFT0Y=',
    url: 'https://drive.google.com/uc?export=download&id=YOUR_TECH_DRIVE_FILE_ID'
  },
  accounting: {
    name: 'Accounting Template.pdf',
    data: 'data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0xlbmd0aCA0Mgo+PgpzdHJlYW0KQVQKL0YxIDEyIFRmCjEwMCA3MDAgVGQKKEFjY291bnRpbmcgVGVtcGxhdGUpIFRqCkVUCnN0cmVhbQplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExNSAwMDAwMCBuIAowMDAwMDAwMjQ1IDAwMDAwIG4gCjAwMDAwMDAzMjIgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA2Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo0MTQKJSVFT0Y=',
    url: 'https://drive.google.com/uc?export=download&id=YOUR_ACCOUNTING_DRIVE_FILE_ID'
  }
};

const templates = [
  {
    id: 'engineering',
    industry: 'Engineering',
    price: 1000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, alias!'
  },
  {
    id: 'technology',
    industry: 'Technology',
    price: 1000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, alias!'
  },
  {
    id: 'accounting',
    industry: 'Accounting',
    price: 1000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, alias!'
  }
];

const TemplateCard = ({ template }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('idle');

  const handleDownload = async () => {
    setIsProcessing(true);
    
    try {
      // Check if already paid (stored in localStorage)
      const paidTemplates = JSON.parse(localStorage.getItem('paidTemplates') || '[]');
      
      if (paidTemplates.includes(template.id)) {
        downloadFile(template.id);
        setIsProcessing(false);
        return;
      }

      // Initiate PayPal payment (client-side)
      await initiatePayment(template);
      
    } catch (error) {
      console.error('Payment failed:', error);
      setPaymentStatus('failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const initiatePayment = async (template) => {
    // PayPal client-side integration
    const paypal = window.paypal;
    
    if (!paypal) {
      alert('PayPal SDK not loaded. Please refresh the page.');
      return;
    }

    // Create PayPal payment
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: template.price.toString(),
              currency_code: 'USD'
            },
            description: `${template.industry} Template`
          }]
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        
        if (order.status === 'COMPLETED') {
          // Store payment info locally
          const paidTemplates = JSON.parse(localStorage.getItem('paidTemplates') || '[]');
          paidTemplates.push(template.id);
          localStorage.setItem('paidTemplates', JSON.stringify(paidTemplates));
          
          // Store payment details
          const paymentHistory = JSON.parse(localStorage.getItem('paymentHistory') || '[]');
          paymentHistory.push({
            templateId: template.id,
            orderId: order.id,
            amount: template.price,
            timestamp: new Date().toISOString(),
            industry: template.industry
          });
          localStorage.setItem('paymentHistory', JSON.stringify(paymentHistory));
          
          setPaymentStatus('paid');
          downloadFile(template.id);
        }
      },
      onError: (err) => {
        console.error('PayPal payment error:', err);
        setPaymentStatus('failed');
      },
      onCancel: () => {
        setPaymentStatus('idle');
      }
    }).render(`#paypal-button-${template.id}`);
  };

  const downloadFile = (templateId) => {
    const templateFile = TEMPLATE_FILES[templateId];
    
    if (!templateFile) {
      alert('Template file not found!');
      return;
    }

    // Method 1: Download from base64 data
    if (templateFile.data) {
      const link = document.createElement('a');
      link.href = templateFile.data;
      link.download = templateFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    
    // Method 2: Download from Google Drive URL
    if (templateFile.url) {
      window.open(templateFile.url, '_blank');
    }
  };

  const isPaid = () => {
    const paidTemplates = JSON.parse(localStorage.getItem('paidTemplates') || '[]');
    return paidTemplates.includes(template.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-border p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-amber-100 rounded flex items-center justify-center">
          <span className="text-amber-600">⚖️</span>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{template.industry}</h3>
      <p className="text-gray-600 mb-4">{template.description}</p>
      
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold">${template.price}</span>
          
          {isPaid() ? (
            <button
              onClick={() => downloadFile(template.id)}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
            >
              Download Again
            </button>
          ) : (
            <button
              onClick={handleDownload}
              disabled={isProcessing}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 disabled:opacity-50"
            >
              {isProcessing ? 'Processing...' : 'Buy & Download'}
            </button>
          )}
        </div>
        
        {paymentStatus === 'paid' && (
          <div className="text-green-600 text-sm">✅ Payment completed! Download started.</div>
        )}
        
        {paymentStatus === 'failed' && (
          <div className="text-red-600 text-sm">❌ Payment failed. Please try again.</div>
        )}
        
        {/* PayPal button container */}
        <div id={`paypal-button-${template.id}`} className="mt-4"></div>
      </div>
    </div>
  );
};

const DownloadTemplate = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Load PayPal SDK */}
      <script src="https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD"></script>
      
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Download Templates</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
        
        {/* Payment History */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Your Purchases</h2>
          <PaymentHistory />
        </div>
      </div>
    </div>
  );
};

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  React.useEffect(() => {
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
    } else if (templateFile?.url) {
      window.open(templateFile.url, '_blank');
    }
  };

  if (payments.length === 0) {
    return <div className="text-gray-500">No purchases yet.</div>;
  }

  return (
    <div className="bg-white rounded-lg p-4">
      {payments.map((payment, index) => (
        <div key={index} className="flex justify-between items-center py-3 border-b last:border-b-0">
          <div>
            <div className="font-medium">{payment.industry} Template</div>
            <div className="text-sm text-gray-500">
              {new Date(payment.timestamp).toLocaleDateString()} - ${payment.amount}
            </div>
          </div>
          <button
            onClick={() => redownloadTemplate(payment.templateId)}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Download Again
          </button>
        </div>
      ))}
    </div>
  );
};

export default DownloadTemplate;