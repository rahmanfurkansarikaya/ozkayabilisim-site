import { Link } from "react-router-dom";
import Seo from "../bilesenler/Seo";

type ReferansVideo = {
  title: string;
  text: string;
  category: string;
  youtubeId?: string;
  localVideo?: string;
};

type ReferansGrubu = {
  title: string;
  text: string;
  items: string[];
};

const referansOzetleri = [
  {
    title: "Kamera Sistemleri",
    text: "İş yeri, kurum, apartman ve yaşam alanları için güvenlik çözümleri.",
  },
  {
    title: "Kurumsal Hizmet",
    text: "Resmi kurumlar, belediyeler, köyler ve işletmeler için teknik destek.",
  },
  {
    title: "Yerel Güven",
    text: "Türkiye'nin her yerinden ulaşılabilir, hızlı ve çözüm odaklı hizmet.",
  },
];

const referansGruplari: ReferansGrubu[] = [
  {
    title: "Resmi Kurumlar ve Belediyeler",
    text: "Kamu kurumları, belediyeler ve resmi hizmet noktalarında güvenlik sistemleri, kamera altyapısı ve teknik çözüm hizmetleri sunuyoruz.",
    items: [
      "Belediye ve kamu hizmet noktaları",
      "Resmi kurum güvenlik çözümleri",
      "Kurum içi kamera ve kayıt sistemleri",
      "Toplu kullanım alanları için teknik altyapı",
    ],
  },
  {
    title: "Köyler ve Hizmet Bölgeleri",
    text: "Çay ve çevresindeki köyler, mahalleler ve farklı hizmet bölgelerinde güvenlik, kamera ve bilişim çözümleriyle destek sağlıyoruz.",
    items: [
      "Köy ve mahalle kamera sistemleri",
      "Açık alan güvenlik çözümleri",
      "Gece ve gündüz görüntü takibi",
      "Bölgesel teknik servis desteği",
    ],
  },
  {
    title: "İşletmeler ve Özel Alanlar",
    text: "Dükkan, mağaza, apartman, site, otopark ve özel alanlarda ihtiyaca uygun kamera, network, ses sistemi ve teknik kurulum hizmetleri sunuyoruz.",
    items: [
      "Mağaza ve dükkan kamera sistemleri",
      "Apartman ve site güvenlik çözümleri",
      "Otopark ve plaka tanıma sistemleri",
      "Ses sistemi ve network altyapısı",
    ],
  },
];

const referansVideolari: ReferansVideo[] = [
  {
    title: "Show TV’de Özkaya Bilişim",
    text: "Özkaya Bilişim’in Show TV’de yayınlanan röportajından bir bölüm. Teknoloji, hizmet anlayışı ve yerel bilişim çözümlerimize dair geçmişten bugüne uzanan bir referans.",
    category: "Basında Biz",
    youtubeId: "B4ooRYvFYkA",
  },
  {
    title: "Personel Takip Sistemi Uygulaması",
    text: "İşletmeler için kartlı, şifreli ve yüz tanıma destekli giriş-çıkış kontrol sistemlerinden örnek bir uygulama.",
    category: "Geçiş Kontrol",
    localVideo: "/videos/personeltakip.mp4",
  },
  {
    title: "Plaka Tanıma Sistemi",
    text: "Araç giriş-çıkış kontrolü ve otopark güvenliği için kullanılan plaka tanıma sistemi uygulamasından örnek video.",
    category: "Güvenlik Sistemi",
    localVideo: "/videos/plakasistemleri.mp4",
  },
  {
    title: "Gece ve Gündüz Kamera Performansı",
    text: "Kurulumu yapılan güvenlik kamera sisteminin gündüz ve gece görüntü performansını gösteren örnek video.",
    category: "Kamera Sistemi",
    localVideo: "/videos/gecegunduz.mp4",
  },
  {
    title: "Ses Sistemi Kurulum Örneği",
    text: "Dış mekân kullanımı için hazırlanan ses sistemi uygulamasından örnek görüntüler. Özkaya Bilişim olarak alanın ihtiyacına uygun ses ve teknik altyapı çözümleri sunuyoruz.",
    category: "Ses Sistemi",
    localVideo: "/videos/ses-sistemi.mp4",
  },
  {
    title: "Dükkan İçi Kamera Sistemi",
    text: "Mağaza ve işletme içi güvenlik takibi için kurulan kamera sistemi uygulamasından örnek görüntüler.",
    category: "Güvenlik Kamera Sistemi",
    localVideo: "/videos/dukkanici.mp4",
  },
];

export default function Referanslar() {
  return (
    <>
      <Seo
        title="Referanslarımız | Özkaya Bilişim Çay/Afyonkarahisar"
        description="Özkaya Bilişim referansları: güvenlik kamera sistemleri, teknik servis, internet kafe ve bilişim hizmetlerinden örnek kurum, bölge ve video çalışmaları."
        canonicalPath="/referanslar"
      />

      <section className="inner-hero references-hero">
        <div className="container inner-hero-grid">
          <div className="inner-hero-content">
            <span className="eyebrow light">Referanslarımız</span>
            <h1>Tamamlanan işlerimizden ve hizmet alanlarımızdan örnekler</h1>
            <p>
              Güvenlik sistemleri, teknik destek, donanım çözümleri ve eğlence
              alanımızdan örnek çalışmalarla Özkaya Bilişim’i daha yakından
              tanıyın.
            </p>

            <div className="hero-actions">
              <Link to="/iletisim" className="primary-button">
                Hizmet Almak İstiyorum
              </Link>
              <Link to="/guvenlik-sistemleri" className="secondary-button dark">
                Güvenlik Sistemleri
              </Link>
            </div>
          </div>

          <div className="inner-hero-panel references-panel">
            <span>Bu sayfada</span>
            <div className="mini-tag-list">
              <strong>Kamera Sistemleri</strong>
              <strong>Teknik Servis</strong>
              <strong>Kurum Referansları</strong>
              <strong>Köyler ve Bölgeler</strong>
              <strong>Video İçerikler</strong>
              <strong>Kurulum Örnekleri</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section references-trust-section">
        <div className="container">
          <div className="reference-trust-grid">
            {referansOzetleri.map((item) => (
              <div className="reference-trust-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reference-places-section">
        <div className="container">
          <div className="section-title center">
            <span>Referans noktalarımız</span>
            <h2>Hizmet verdiğimiz kurum ve bölgeler</h2>
            <p>
              Özkaya Bilişim olarak resmi kurumlar, belediyeler, köyler,
              işletmeler ve özel alanlarda güvenlik sistemleri ve bilişim
              çözümleri sunuyoruz.
            </p>
          </div>

          <div className="reference-group-grid">
            {referansGruplari.map((group) => (
              <article className="reference-group-card" key={group.title}>
                <div>
                  <span>{group.title}</span>
                  <p>{group.text}</p>
                </div>

                <div className="reference-name-list">
                  {group.items.map((item) => (
                    <strong key={item}>{item}</strong>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section references-section">
        <div className="container">
          <div className="section-title center">
            <span>Video referanslar</span>
            <h2>Yaptığımız işlerden görüntüler</h2>
            <p>
              Tamamladığımız çalışmalar, kurulum örnekleri ve hizmet alanlarımızı
              video içerikleriyle inceleyebilirsiniz.
            </p>
          </div>

          <div className="reference-video-grid">
            {referansVideolari.map((video) => (
              <article className="reference-video-card" key={video.title}>
                <div className="reference-video-frame">
                  {video.localVideo ? (
                <video
                  src={video.localVideo}
                  controls
                  preload="metadata"
                  playsInline
                />
             ) : video.youtubeId ? (
               <iframe
               src={`https://www.youtube.com/embed/${video.youtubeId}`}
               title={video.title}
               loading="lazy"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen
            />
             ) : (
              <div className="reference-video-placeholder">
              <span>Video eklenecek</span>
             </div>
             )}
                </div>

                <div className="reference-video-content">
                  <span>{video.category}</span>
                  <h3>{video.title}</h3>
                  <p>{video.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section references-cta-section">
        <div className="container cta-band">
          <div>
            <span className="eyebrow light">Siz de hizmet almak ister misiniz?</span>
            <h2>Özkaya Bilişim ile iletişime geçin</h2>
            <p>
              Kamera sistemleri, teknik servis, donanım desteği veya internet
              kafe hizmetleri hakkında bilgi almak için bize ulaşabilirsiniz.
            </p>
          </div>

          <Link to="/iletisim" className="primary-button">
            İletişime Geç
          </Link>
        </div>
      </section>
    </>
  );
}