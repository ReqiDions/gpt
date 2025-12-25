function FilterBar({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedCompany,
  setSelectedCompany,
  sortBy,
  setSortBy,
  categories,
  companies
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ara
          </label>
          <input
            type="text"
            placeholder="Kampanya veya şirket ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kategori
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Company Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Şirket
          </label>
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {companies.map(company => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sırala
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="newest">En Yeni</option>
            <option value="ending">Bitişe Yakın</option>
            <option value="minContribution">Min. Katkı (Düşük)</option>
          </select>
        </div>
      </div>

      {/* Active Filters Display */}
      {(searchTerm || selectedCategory !== 'Tümü' || selectedCompany !== 'Tümü') && (
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Aktif Filtreler:</span>
          {searchTerm && (
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              Arama: {searchTerm}
            </span>
          )}
          {selectedCategory !== 'Tümü' && (
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              {selectedCategory}
            </span>
          )}
          {selectedCompany !== 'Tümü' && (
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
              {selectedCompany}
            </span>
          )}
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('Tümü')
              setSelectedCompany('Tümü')
            }}
            className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition"
          >
            Filtreleri Temizle
          </button>
        </div>
      )}
    </div>
  )
}

export default FilterBar
