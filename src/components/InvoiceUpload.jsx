import { useState, useRef } from 'react'

function InvoiceUpload({ onUpload, isProcessing }) {
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file) => {
    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'application/pdf']

    if (!validTypes.includes(file.type)) {
      alert('Lütfen geçerli bir görsel dosyası yükleyin (JPG, PNG, GIF, WebP veya PDF)')
      return
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('Dosya boyutu 10MB\'dan küçük olmalıdır')
      return
    }

    onUpload(file)
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="w-full">
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
          dragActive
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400 bg-white'
        } ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={!isProcessing ? handleButtonClick : undefined}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*,application/pdf"
          onChange={handleChange}
          disabled={isProcessing}
        />

        {isProcessing ? (
          <div className="py-8">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
            <p className="mt-4 text-lg font-medium text-gray-700">
              Fatura Analiz Ediliyor...
            </p>
            <p className="mt-2 text-sm text-gray-500">
              AI ile fatura verileri çıkarılıyor ve analiz ediliyor
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-center mb-4">
              <svg
                className="w-20 h-20 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Fatura Yükle
            </h3>
            <p className="text-gray-600 mb-4">
              Fatura görselini sürükle bırak veya
              <span className="text-blue-600 font-medium"> dosya seç</span>
            </p>

            <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
              <span className="px-3 py-1 bg-gray-100 rounded-full">JPG</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">PNG</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">PDF</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">Max 10MB</span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-gray-600">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl">📄</span>
                </div>
                <span>E-Fatura</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl">🧾</span>
                </div>
                <span>Perakende Fiş</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl">📋</span>
                </div>
                <span>KDV Faturası</span>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-4 flex items-start gap-2 text-sm text-gray-600">
        <svg
          className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        <p>
          Faturanız güvenli bir şekilde işlenir. AI teknolojisi ile otomatik olarak
          fatura numarası, tarih, tutar, KDV ve diğer önemli bilgiler çıkarılır.
        </p>
      </div>
    </div>
  )
}

export default InvoiceUpload
