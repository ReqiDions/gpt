import { formatCurrency } from '../utils/invoiceAnalyzer'

function InvoiceAnalysis({ analysis, imageUrl, onNewAnalysis }) {
  if (!analysis) return null

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800'
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800'
      case 'suggestion':
        return 'bg-blue-50 border-blue-200 text-blue-800'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Fatura Analizi Tamamlandı</h2>
            <p className="text-blue-100">
              Güven Skoru: {analysis.extractionConfidence}%
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-blue-100 mb-1">Toplam Tutar</div>
            <div className="text-3xl font-bold">
              {formatCurrency(analysis.financial.grandTotal)}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Invoice Preview */}
        {imageUrl && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Fatura Görseli</h3>
            </div>
            <div className="p-4">
              <img
                src={imageUrl}
                alt="Invoice"
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>
          </div>
        )}

        {/* Basic Information */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">Temel Bilgiler</h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-gray-600">Fatura Türü</span>
              <span className="font-semibold text-gray-900 bg-purple-100 px-3 py-1 rounded-full text-sm">
                {analysis.invoiceType}
              </span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-gray-600">Fatura No</span>
              <span className="font-semibold text-gray-900">{analysis.invoiceNumber}</span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-gray-600">Düzenleme Tarihi</span>
              <span className="font-semibold text-gray-900">
                {new Date(analysis.issueDate).toLocaleDateString('tr-TR')}
              </span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-gray-600">Vade Tarihi</span>
              <span className="font-semibold text-gray-900">
                {new Date(analysis.dueDate).toLocaleDateString('tr-TR')}
              </span>
            </div>

            <div className="pt-2">
              <div className="text-gray-600 mb-2">Satıcı</div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-semibold text-gray-900">{analysis.seller.name}</div>
                <div className="text-sm text-gray-600 mt-1">VKN: {analysis.seller.taxId}</div>
                <div className="text-sm text-gray-600">{analysis.seller.address}</div>
              </div>
            </div>

            <div>
              <div className="text-gray-600 mb-2">Alıcı</div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-semibold text-gray-900">{analysis.buyer.name}</div>
                <div className="text-sm text-gray-600 mt-1">VKN: {analysis.buyer.taxId}</div>
                <div className="text-sm text-gray-600">{analysis.buyer.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Items */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Fatura Kalemleri</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Açıklama
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                  Miktar
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Birim Fiyat
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                  KDV
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Toplam
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {analysis.items.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{item.description}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">
                    {item.quantity} {item.unit}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-right">
                    {formatCurrency(item.unitPrice)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">
                    %{item.vatRate}
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900 text-right">
                    {formatCurrency(item.total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 px-4 py-4 border-t border-gray-200">
          <div className="flex justify-end space-y-2">
            <div className="w-64 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Ara Toplam:</span>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(analysis.financial.subtotal)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">KDV:</span>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(analysis.financial.vatAmount)}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-gray-300 pt-2">
                <span className="text-gray-900">Genel Toplam:</span>
                <span className="text-blue-600">
                  {formatCurrency(analysis.financial.grandTotal)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Ödeme Bilgileri</h3>
        </div>
        <div className="p-4 grid md:grid-cols-3 gap-4">
          <div>
            <div className="text-sm text-gray-600 mb-1">Ödeme Yöntemi</div>
            <div className="font-semibold text-gray-900">{analysis.paymentInfo.method}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Banka</div>
            <div className="font-semibold text-gray-900">{analysis.paymentInfo.bank}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">IBAN</div>
            <div className="font-mono text-sm text-gray-900 break-all">
              {analysis.paymentInfo.iban}
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 border-b border-gray-200">
          <h3 className="font-semibold text-white flex items-center gap-2">
            <span className="text-xl">🤖</span>
            AI Analist Görüşleri ve Öneriler
          </h3>
        </div>
        <div className="p-4 space-y-3">
          {analysis.insights.map((insight, index) => (
            <div
              key={index}
              className={`border rounded-lg p-4 ${getSeverityColor(insight.severity)}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{insight.icon}</span>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{insight.title}</h4>
                  <p className="text-sm">{insight.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4">
        <button
          onClick={onNewAnalysis}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md font-medium"
        >
          Yeni Fatura Analiz Et
        </button>
        <button
          onClick={() => window.print()}
          className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-md font-medium"
        >
          Raporu Yazdır
        </button>
      </div>
    </div>
  )
}

export default InvoiceAnalysis
