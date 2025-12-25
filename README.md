# Türkiye Emeklilik Kampanyaları

Türkiye'deki aktif bireysel emeklilik kampanyalarını keşfetmek ve karşılaştırmak için geliştirilmiş modern bir web uygulaması.

## Özellikler

- **Aktif Kampanya Listesi**: Türkiye'deki tüm aktif bireysel emeklilik kampanyalarını görüntüleyin
- **Detaylı Filtreleme**: Kategori, şirket ve arama terimi ile kampanyaları filtreleyin
- **Akıllı Sıralama**: Yeni kampanyalar, bitişe yakın kampanyalar veya minimum katkı tutarına göre sıralayın
- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **Kampanya Detayları**: Her kampanya için avantajlar, tarihler ve minimum katkı bilgileri
- **Kategorize Kampanyalar**:
  - Yeni Katılımcı
  - Dijital
  - Genç (18-30 yaş)
  - Aile
  - Kadınlara Özel
  - Banka Müşterisi
  - Katılım (Faizsiz)
  - Profesyonel
  - Emekliliğe Yakın
  - Çiftçi
  - Esnaf
  - Yurt Dışı Çalışanlar

## Teknolojiler

- **React 18**: Modern UI kütüphanesi
- **Vite**: Hızlı geliştirme ve build aracı
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Modern JavaScript özellikleri

## Kurulum

### Gereksinimler

- Node.js 18+ veya 20+
- npm veya yarn

### Adımlar

1. Repoyu klonlayın:
```bash
git clone <repo-url>
cd gpt
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda açın:
```
http://localhost:5173
```

## Build ve Deployment

Production build oluşturmak için:

```bash
npm run build
```

Build çıktısı `dist/` klasöründe oluşturulur ve herhangi bir statik hosting servisine deploy edilebilir:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

Preview için:

```bash
npm run preview
```

## Proje Yapısı

```
gpt/
├── src/
│   ├── components/          # React bileşenleri
│   │   ├── CampaignCard.jsx
│   │   ├── FilterBar.jsx
│   │   ├── Header.jsx
│   │   └── Stats.jsx
│   ├── data/               # Kampanya verileri
│   │   └── campaigns.js
│   ├── App.jsx             # Ana uygulama bileşeni
│   ├── main.jsx            # Uygulama giriş noktası
│   └── index.css           # Global stiller
├── public/                 # Statik dosyalar
├── index.html             # HTML şablonu
├── package.json           # Proje bağımlılıkları
├── vite.config.js         # Vite konfigürasyonu
├── tailwind.config.js     # Tailwind CSS konfigürasyonu
└── postcss.config.js      # PostCSS konfigürasyonu
```

## Kampanya Verileri

Kampanya verileri `src/data/campaigns.js` dosyasında statik olarak tanımlanmıştır. Gerçek bir uygulamada bu veriler:

- REST API'den çekilebilir
- Emeklilik şirketlerinin web sitelerinden scrape edilebilir
- Bir veritabanından (MongoDB, PostgreSQL, vb.) yüklenebilir
- Headless CMS (Strapi, Contentful, vb.) kullanılabilir

### Veri Yapısı

Her kampanya şu bilgileri içerir:

```javascript
{
  id: number,
  company: string,
  campaignName: string,
  description: string,
  startDate: string (YYYY-MM-DD),
  endDate: string (YYYY-MM-DD),
  benefits: string[],
  minContribution: number,
  category: string,
  isActive: boolean,
  url: string
}
```

## Bireysel Emeklilik Sistemi Hakkında

Türkiye'de Bireysel Emeklilik Sistemi (BES), kişilerin emeklilik dönemlerinde ilave gelir elde etmelerini sağlamak için oluşturulmuş bir tasarruf sistemidir.

### Ana Avantajlar:

1. **Devlet Katkısı**: Ödediğiniz katkı paylarının %30'u devlet tarafından hesabınıza yatırılır
2. **Vergi Avantajı**: Yıllık brüt gelirinizin %15'ine kadar stopaj indirimi
3. **Fon Çeşitliliği**: Risk profilinize uygun çeşitli yatırım fonları

## Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen:

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## Geliştirme Planları

- [ ] Backend API entegrasyonu
- [ ] Gerçek zamanlı kampanya güncellemeleri
- [ ] Kullanıcı favori kampanyalar
- [ ] Kampanya karşılaştırma aracı
- [ ] Email bildirimleri
- [ ] Mobil uygulama (React Native)
- [ ] Hesap makinesi (Emeklilik getiri tahmini)

## Lisans

MIT

## İletişim

Sorularınız için issue açabilirsiniz.

## Yasal Uyarı

Bu uygulama bilgilendirme amaçlıdır. Yatırım kararları almadan önce ilgili emeklilik şirketinden detaylı bilgi almanız önerilir. Kampanya detayları değişiklik gösterebilir.
