function CampaignCard({ campaign }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const getDaysRemaining = () => {
    const today = new Date()
    const endDate = new Date(campaign.endDate)
    const diffTime = endDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const daysRemaining = getDaysRemaining()
  const isEndingSoon = daysRemaining <= 30 && daysRemaining > 0

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
        <h3 className="text-white font-bold text-lg mb-1">{campaign.campaignName}</h3>
        <p className="text-blue-100 text-sm">{campaign.company}</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
            {campaign.category}
          </span>
          {isEndingSoon && (
            <span className="inline-block ml-2 px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
              {daysRemaining} gün kaldı!
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {campaign.description}
        </p>

        {/* Benefits */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Avantajlar:</h4>
          <ul className="space-y-1">
            {campaign.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start text-sm text-gray-700">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Details */}
        <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Min. Katkı:</span>
            <span className="font-semibold text-gray-900">
              {formatCurrency(campaign.minContribution)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Başlangıç:</span>
            <span className="text-gray-700">{formatDate(campaign.startDate)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Bitiş:</span>
            <span className="text-gray-700">{formatDate(campaign.endDate)}</span>
          </div>
        </div>

        {/* Action Button */}
        <a
          href={campaign.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          Detaylı Bilgi Al
        </a>
      </div>
    </div>
  )
}

export default CampaignCard
