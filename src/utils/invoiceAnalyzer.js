/**
 * Fatura İşleyici ve Analist Utility
 * AI destekli fatura analizi ve veri çıkarma
 */

// Simulated OCR and AI analysis
export const analyzeInvoice = async (imageFile) => {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      // Simulate AI processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulated OCR and analysis results
      const analysis = generateMockAnalysis(imageFile.name);

      resolve({
        success: true,
        data: analysis,
        imageDataUrl: e.target.result
      });
    };

    reader.readAsDataURL(imageFile);
  });
};

// Generate realistic mock invoice analysis
const generateMockAnalysis = (filename) => {
  const invoiceTypes = ['E-Fatura', 'Perakende Satış Fişi', 'KDV Faturası', 'İhracat Faturası'];
  const companies = [
    { name: 'ABC Teknoloji A.Ş.', vkn: '1234567890', address: 'Maslak Mahallesi, Sarıyer/İstanbul' },
    { name: 'XYZ Yazılım Ltd. Şti.', vkn: '9876543210', address: 'Çankaya, Ankara' },
    { name: 'DEF Danışmanlık A.Ş.', vkn: '5555555555', address: 'Konak, İzmir' }
  ];

  const invoiceType = invoiceTypes[Math.floor(Math.random() * invoiceTypes.length)];
  const seller = companies[Math.floor(Math.random() * companies.length)];

  // Generate random invoice items
  const itemsCount = Math.floor(Math.random() * 5) + 2;
  const items = [];
  const itemNames = [
    'Yazılım Geliştirme Hizmeti',
    'Danışmanlık Hizmeti',
    'Sunucu Kiralama',
    'Lisans Ücreti',
    'Bakım ve Destek',
    'Eğitim Hizmeti',
    'Bulut Hizmetleri'
  ];

  let subtotal = 0;
  for (let i = 0; i < itemsCount; i++) {
    const quantity = Math.floor(Math.random() * 10) + 1;
    const unitPrice = (Math.floor(Math.random() * 5000) + 500);
    const total = quantity * unitPrice;
    subtotal += total;

    items.push({
      id: i + 1,
      description: itemNames[Math.floor(Math.random() * itemNames.length)],
      quantity,
      unit: 'Adet',
      unitPrice,
      vatRate: 20,
      total
    });
  }

  const vatAmount = subtotal * 0.20;
  const grandTotal = subtotal + vatAmount;

  // Generate invoice date
  const invoiceDate = new Date(2026, 0, Math.floor(Math.random() * 7) + 1);
  const dueDate = new Date(invoiceDate);
  dueDate.setDate(dueDate.getDate() + 30);

  // Generate analysis insights
  const insights = generateInsights(items, subtotal, vatAmount);

  return {
    invoiceType,
    invoiceNumber: `2026${String(Math.floor(Math.random() * 9000) + 1000)}`,
    issueDate: invoiceDate.toISOString().split('T')[0],
    dueDate: dueDate.toISOString().split('T')[0],
    seller: {
      name: seller.name,
      taxId: seller.vkn,
      address: seller.address
    },
    buyer: {
      name: 'Örnek Müşteri A.Ş.',
      taxId: '1111111111',
      address: 'Beşiktaş, İstanbul'
    },
    items,
    financial: {
      subtotal,
      vatAmount,
      grandTotal,
      currency: 'TRY'
    },
    paymentInfo: {
      method: 'Banka Havalesi',
      iban: 'TR' + String(Math.floor(Math.random() * 1000000000000000000000000)),
      bank: 'Örnek Bankası'
    },
    insights,
    extractionConfidence: Math.floor(Math.random() * 10) + 90, // 90-100%
    processed: new Date().toISOString()
  };
};

// Generate AI-powered insights and recommendations
const generateInsights = (items, subtotal, vatAmount) => {
  const insights = [];

  // Category analysis
  const categories = new Set(items.map(item => {
    if (item.description.includes('Yazılım') || item.description.includes('Lisans')) return 'Yazılım';
    if (item.description.includes('Danışmanlık') || item.description.includes('Eğitim')) return 'Hizmet';
    return 'Altyapı';
  }));

  insights.push({
    type: 'category',
    icon: '📊',
    title: 'Kategori Analizi',
    message: `Fatura ${categories.size} farklı kategori içeriyor: ${[...categories].join(', ')}`,
    severity: 'info'
  });

  // Price analysis
  const avgItemPrice = subtotal / items.length;
  if (avgItemPrice > 5000) {
    insights.push({
      type: 'price',
      icon: '💰',
      title: 'Yüksek Ortalama Tutar',
      message: `Kalem başına ortalama tutar ${avgItemPrice.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })} - Bütçe kontrolü önerilir`,
      severity: 'warning'
    });
  }

  // VAT verification
  const calculatedVat = subtotal * 0.20;
  const vatDifference = Math.abs(calculatedVat - vatAmount);
  if (vatDifference < 1) {
    insights.push({
      type: 'vat',
      icon: '✅',
      title: 'KDV Doğrulaması',
      message: 'KDV hesaplaması doğru (%20 oran uygulanmış)',
      severity: 'success'
    });
  }

  // Payment terms
  insights.push({
    type: 'payment',
    icon: '📅',
    title: 'Ödeme Vadesi',
    message: '30 günlük ödeme vadesi - Standart ticari koşullar',
    severity: 'info'
  });

  // Cost optimization suggestions
  const totalAmount = subtotal + vatAmount;
  if (totalAmount > 50000) {
    insights.push({
      type: 'optimization',
      icon: '💡',
      title: 'Maliyet Optimizasyonu',
      message: 'Yüksek tutarlı fatura tespit edildi. Toplu alımlarda indirim görüşmesi önerilir',
      severity: 'suggestion'
    });
  }

  // Compliance check
  insights.push({
    type: 'compliance',
    icon: '🔒',
    title: 'Uyumluluk Kontrolü',
    message: 'Fatura yasal gerekliliklere uygun görünüyor',
    severity: 'success'
  });

  return insights;
};

// Extract text from image (simulated OCR)
export const extractTextFromImage = async (imageFile) => {
  // In a real implementation, this would use Tesseract.js or a cloud OCR API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        text: 'Simulated OCR text extraction...',
        confidence: 0.95
      });
    }, 1000);
  });
};

// Validate invoice data
export const validateInvoiceData = (data) => {
  const errors = [];

  if (!data.invoiceNumber) {
    errors.push('Fatura numarası bulunamadı');
  }

  if (!data.issueDate) {
    errors.push('Fatura tarihi bulunamadı');
  }

  if (!data.seller?.name) {
    errors.push('Satıcı bilgisi eksik');
  }

  if (!data.items || data.items.length === 0) {
    errors.push('Fatura kalemleri bulunamadı');
  }

  if (!data.financial?.grandTotal) {
    errors.push('Toplam tutar hesaplanamadı');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Format currency
export const formatCurrency = (amount, currency = 'TRY') => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency
  }).format(amount);
};

// Calculate statistics from multiple invoices
export const calculateInvoiceStats = (invoices) => {
  if (!invoices || invoices.length === 0) {
    return null;
  }

  const totalAmount = invoices.reduce((sum, inv) => sum + inv.financial.grandTotal, 0);
  const avgAmount = totalAmount / invoices.length;
  const totalVAT = invoices.reduce((sum, inv) => sum + inv.financial.vatAmount, 0);

  return {
    count: invoices.length,
    totalAmount,
    avgAmount,
    totalVAT,
    currency: invoices[0]?.financial?.currency || 'TRY'
  };
};
