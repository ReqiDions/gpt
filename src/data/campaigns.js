// Turkish Pension Campaign Data
// Major pension companies in Turkey (BES - Bireysel Emeklilik Sistemi)

export const campaigns = [
  {
    id: 1,
    company: "Anadolu Hayat Emeklilik",
    campaignName: "Yeni Yıl Özel Kampanyası 2025",
    description: "Yeni yıla özel %50'ye varan stopaj indirimi ve 500 TL hoş geldin primi",
    startDate: "2025-01-01",
    endDate: "2025-03-31",
    benefits: [
      "%50 stopaj indirimi",
      "500 TL hoş geldin primi",
      "İlk 3 ay yönetim ücreti yok"
    ],
    minContribution: 1000,
    category: "Yeni Katılımcı",
    isActive: true,
    url: "https://www.anadoluhayat.com.tr"
  },
  {
    id: 2,
    company: "Allianz Yaşam ve Emeklilik",
    campaignName: "Dijital Katılım Avantajı",
    description: "Online başvurulara özel dijital kampanya",
    startDate: "2024-12-01",
    endDate: "2025-06-30",
    benefits: [
      "750 TL dijital bonus",
      "%40 stopaj desteği",
      "Ücretsiz fon değişikliği"
    ],
    minContribution: 1500,
    category: "Dijital",
    isActive: true,
    url: "https://www.allianz.com.tr"
  },
  {
    id: 3,
    company: "AvivaSA Emeklilik ve Hayat",
    campaignName: "Genç Nesil Emeklilik Planı",
    description: "18-30 yaş arası gençlere özel avantajlar",
    startDate: "2025-01-15",
    endDate: "2025-12-31",
    benefits: [
      "1000 TL gençlik bonusu",
      "%60 stopaj indirimi",
      "Yıllık %2 ek getiri garantisi"
    ],
    minContribution: 500,
    category: "Genç",
    isActive: true,
    url: "https://www.avivasa.com.tr"
  },
  {
    id: 4,
    company: "Axa Hayat ve Emeklilik",
    campaignName: "Aile Emeklilik Paketi",
    description: "Aile bireyleri ile birlikte katılıma özel",
    startDate: "2024-11-01",
    endDate: "2025-04-30",
    benefits: [
      "Her aile üyesi için 300 TL prim",
      "%45 stopaj desteği",
      "Toplu katılımda ekstra %10 indirim"
    ],
    minContribution: 2000,
    category: "Aile",
    isActive: true,
    url: "https://www.axa.com.tr"
  },
  {
    id: 5,
    company: "Fiba Emeklilik ve Hayat",
    campaignName: "Kadınlara Özel Emeklilik",
    description: "Kadın katılımcılara özel avantajlı kampanya",
    startDate: "2025-03-01",
    endDate: "2025-05-31",
    benefits: [
      "800 TL kadınlara özel prim",
      "%55 stopaj indirimi",
      "Sağlık sigortası paketi"
    ],
    minContribution: 1200,
    category: "Kadınlara Özel",
    isActive: true,
    url: "https://www.fibaemeklilik.com.tr"
  },
  {
    id: 6,
    company: "Garanti Emeklilik ve Hayat",
    campaignName: "Maaş Transferi Kampanyası",
    description: "Maaş hesabı ile otomatik ödeme yapanlara özel",
    startDate: "2024-12-15",
    endDate: "2025-08-31",
    benefits: [
      "600 TL otomatik ödeme primi",
      "%50 stopaj desteği",
      "Garanti BBVA avantajları"
    ],
    minContribution: 1000,
    category: "Banka Müşterisi",
    isActive: true,
    url: "https://www.garantiemeklilik.com.tr"
  },
  {
    id: 7,
    company: "Katılım Emeklilik ve Hayat",
    campaignName: "Faizsiz Emeklilik Sistemi",
    description: "Katılım esaslı faizsiz emeklilik planı",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    benefits: [
      "450 TL hoş geldin bonusu",
      "Faizsiz/katılım bankacılığı uyumlu",
      "%35 stopaj indirimi"
    ],
    minContribution: 800,
    category: "Katılım",
    isActive: true,
    url: "https://www.katilimemeklilik.com.tr"
  },
  {
    id: 8,
    company: "Aegon Emeklilik ve Hayat",
    campaignName: "Profesyonellere Özel Plan",
    description: "Serbest meslek sahiplerine özel kampanya",
    startDate: "2024-10-01",
    endDate: "2025-09-30",
    benefits: [
      "700 TL meslek primi",
      "%48 stopaj desteği",
      "Vergi avantajı danışmanlığı"
    ],
    minContribution: 2500,
    category: "Profesyonel",
    isActive: true,
    url: "https://www.aegonemeklilik.com.tr"
  },
  {
    id: 9,
    company: "Vakıf Emeklilik",
    campaignName: "Emekliliğe Geçiş Kampanyası",
    description: "55 yaş ve üzeri katılımcılara özel",
    startDate: "2025-02-01",
    endDate: "2025-07-31",
    benefits: [
      "900 TL geçiş bonusu",
      "%30 stopaj desteği (yaş limitli)",
      "Emeklilik planlaması danışmanlığı"
    ],
    minContribution: 3000,
    category: "Emekliliğe Yakın",
    isActive: true,
    url: "https://www.vakifemeklilik.com.tr"
  },
  {
    id: 10,
    company: "Ziraat Hayat ve Emeklilik",
    campaignName: "Çiftçi Emeklilik Paketi",
    description: "Çiftçi kayıt sistemine kayıtlı kişilere özel",
    startDate: "2025-01-10",
    endDate: "2025-10-31",
    benefits: [
      "550 TL çiftçi destek primi",
      "%40 stopaj indirimi",
      "Tarımsal sigorta paketi"
    ],
    minContribution: 600,
    category: "Çiftçi",
    isActive: true,
    url: "https://www.ziraathayat.com.tr"
  },
  {
    id: 11,
    company: "Halk Hayat ve Emeklilik",
    campaignName: "Esnaf ve Sanatkar Kampanyası",
    description: "Esnaf ve sanatkar odalarına kayıtlı üyelere özel",
    startDate: "2024-11-15",
    endDate: "2025-05-15",
    benefits: [
      "400 TL esnaf primi",
      "%42 stopaj desteği",
      "Esnaf kredisi faiz indirimi"
    ],
    minContribution: 750,
    category: "Esnaf",
    isActive: true,
    url: "https://www.halkhayat.com.tr"
  },
  {
    id: 12,
    company: "Groupama Emeklilik",
    campaignName: "Yurt Dışı Çalışanlar Özel",
    description: "Yurt dışında çalışan Türk vatandaşlarına özel",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    benefits: [
      "1200 TL diaspora bonusu",
      "Döviz bazlı katkı seçeneği",
      "%45 stopaj indirimi"
    ],
    minContribution: 2000,
    category: "Yurt Dışı",
    isActive: true,
    url: "https://www.groupamaemeklilik.com.tr"
  }
];

export const categories = [
  "Tümü",
  "Yeni Katılımcı",
  "Dijital",
  "Genç",
  "Aile",
  "Kadınlara Özel",
  "Banka Müşterisi",
  "Katılım",
  "Profesyonel",
  "Emekliliğe Yakın",
  "Çiftçi",
  "Esnaf",
  "Yurt Dışı"
];

export const companies = [
  "Tümü",
  "Anadolu Hayat Emeklilik",
  "Allianz Yaşam ve Emeklilik",
  "AvivaSA Emeklilik ve Hayat",
  "Axa Hayat ve Emeklilik",
  "Fiba Emeklilik ve Hayat",
  "Garanti Emeklilik ve Hayat",
  "Katılım Emeklilik ve Hayat",
  "Aegon Emeklilik ve Hayat",
  "Vakıf Emeklilik",
  "Ziraat Hayat ve Emeklilik",
  "Halk Hayat ve Emeklilik",
  "Groupama Emeklilik"
];
