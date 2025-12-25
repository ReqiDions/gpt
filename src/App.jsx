import { useState, useMemo } from 'react'
import { campaigns, categories, companies } from './data/campaigns'
import CampaignCard from './components/CampaignCard'
import FilterBar from './components/FilterBar'
import Header from './components/Header'
import Stats from './components/Stats'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [selectedCompany, setSelectedCompany] = useState('Tümü')
  const [sortBy, setSortBy] = useState('newest')

  const filteredAndSortedCampaigns = useMemo(() => {
    let filtered = campaigns.filter(campaign => {
      const matchesSearch =
        campaign.campaignName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === 'Tümü' || campaign.category === selectedCategory
      const matchesCompany = selectedCompany === 'Tümü' || campaign.company === selectedCompany

      return matchesSearch && matchesCategory && matchesCompany && campaign.isActive
    })

    // Sort campaigns
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.startDate) - new Date(a.startDate)
        case 'ending':
          return new Date(a.endDate) - new Date(b.endDate)
        case 'minContribution':
          return a.minContribution - b.minContribution
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, selectedCompany, sortBy])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Stats
          totalCampaigns={campaigns.filter(c => c.isActive).length}
          filteredCount={filteredAndSortedCampaigns.length}
        />

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
          sortBy={sortBy}
          setSortBy={setSortBy}
          categories={categories}
          companies={companies}
        />

        <div className="mt-8">
          {filteredAndSortedCampaigns.length === 0 ? (
            <div className="text-center py-16">
              <svg
                className="mx-auto h-24 w-24 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Kampanya Bulunamadı
              </h3>
              <p className="mt-2 text-gray-500">
                Arama kriterlerinize uygun aktif kampanya bulunmamaktadır.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredAndSortedCampaigns.map(campaign => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Bireysel Emeklilik Sistemi Hakkında
          </h2>
          <p className="text-gray-600 mb-4">
            Türkiye'de Bireysel Emeklilik Sistemi (BES), kişilerin emeklilik dönemlerinde
            ilave bir gelir elde etmelerini sağlamak amacıyla oluşturulmuş bir tasarruf sistemidir.
            Devlet katkısı, vergi avantajları ve profesyonel fon yönetimi ile katılımcılarına
            değer sunar.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Devlet Katkısı</h3>
              <p className="text-sm text-blue-700">
                Ödediğiniz katkı paylarının %30'u devlet tarafından hesabınıza yatırılır.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Vergi Avantajı</h3>
              <p className="text-sm text-green-700">
                Yıllık brüt gelirinizin %15'ine kadar stopaj indirimi hakkından yararlanabilirsiniz.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Fon Çeşitliliği</h3>
              <p className="text-sm text-purple-700">
                Risk ve getiri profilinize uygun çeşitli yatırım fonları arasından seçim yapabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            Bu bilgiler bilgilendirme amaçlıdır. Detaylı bilgi için ilgili emeklilik şirketine başvurunuz.
          </p>
          <p className="text-center text-gray-400 text-xs mt-2">
            Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
