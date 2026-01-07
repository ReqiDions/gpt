import { useState } from 'react'
import InvoiceUpload from '../components/InvoiceUpload'
import InvoiceAnalysis from '../components/InvoiceAnalysis'
import { analyzeInvoice } from '../utils/invoiceAnalyzer'

function InvoiceProcessor() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [analysis, setAnalysis] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [error, setError] = useState(null)

  const handleFileUpload = async (file) => {
    setIsProcessing(true)
    setError(null)
    setAnalysis(null)
    setImageUrl(null)

    try {
      const result = await analyzeInvoice(file)

      if (result.success) {
        setAnalysis(result.data)
        setImageUrl(result.imageDataUrl)
      } else {
        setError('Fatura analiz edilirken bir hata oluştu. Lütfen tekrar deneyin.')
      }
    } catch (err) {
      console.error('Analysis error:', err)
      setError('Beklenmeyen bir hata oluştu. Lütfen dosyayı kontrol edip tekrar deneyin.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleNewAnalysis = () => {
    setAnalysis(null)
    setImageUrl(null)
    setError(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Fatura İşleyici & Analist Bot
                </h1>
                <p className="text-gray-600 mt-1">
                  AI destekli otomatik fatura analizi ve raporlama
                </p>
              </div>
            </div>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Ana Sayfa
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Features Banner */}
        {!analysis && (
          <div className="mb-8 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Neler Yapabilir?
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">📸</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">OCR Teknolojisi</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Faturadan otomatik metin çıkarma
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">AI Analizi</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Akıllı veri işleme ve doğrulama
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Detaylı Rapor</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Kapsamlı analiz ve görselleştirme
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Akıllı Öneriler</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Maliyet optimizasyonu tavsiyeleri
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <svg
              className="w-6 h-6 text-red-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="font-semibold text-red-900 mb-1">Hata</h3>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Main Content */}
        {!analysis ? (
          <InvoiceUpload onUpload={handleFileUpload} isProcessing={isProcessing} />
        ) : (
          <InvoiceAnalysis
            analysis={analysis}
            imageUrl={imageUrl}
            onNewAnalysis={handleNewAnalysis}
          />
        )}

        {/* Info Section */}
        {!analysis && (
          <div className="mt-12 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Nasıl Çalışır?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fatura Yükle</h3>
                  <p className="text-sm text-gray-600">
                    Faturanızı JPG, PNG veya PDF formatında yükleyin. Sistem tüm
                    fatura türlerini destekler.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI Analizi</h3>
                  <p className="text-sm text-gray-600">
                    Yapay zeka teknolojisi faturanızı okur, verileri çıkarır ve
                    doğrulama yapar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Rapor Al</h3>
                  <p className="text-sm text-gray-600">
                    Detaylı analiz raporu, öneriler ve maliyet optimizasyonu
                    tavsiyeleri alın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              Fatura İşleyici & Analist Bot - AI destekli otomatik fatura analizi
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>🔒 Güvenli</span>
              <span>⚡ Hızlı</span>
              <span>✨ Doğru</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default InvoiceProcessor
