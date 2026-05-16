import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../bilesenler/Seo";

const guvenlikHizmetleri = [
  {
    title: "Güvenlik Kamera Sistemleri",
    text: "Ev, iş yeri, apartman ve işletmeler için kamera sistemi kurulum ve destek hizmetleri.",
  },
  {
    title: "Alarm Sistemleri",
    text: "İşletme ve yaşam alanları için güvenliği artıran alarm sistemi çözümleri.",
  },
  {
    title: "Yangın İhbar Sistemleri",
    text: "Yangın riskine karşı erken uyarı sağlayan ihbar sistemleri için kurulum desteği.",
  },
  {
    title: "Network Sistemleri",
    text: "İnternet, ağ altyapısı, kablolama ve bağlantı çözümleri için teknik destek.",
  },
  {
    title: "Personel Takip Sistemleri",
    text: "İşletmeler için giriş-çıkış ve personel takip süreçlerine uygun sistem çözümleri.",
  },
  {
    title: "Kurulum & Teknik Destek",
    text: "Kurulum sonrası kullanım, kontrol ve teknik destek ihtiyaçlarınız için yanınızdayız.",
  },
];

const kullanimAlanlari = [
  "İş yerleri",
  "Apartmanlar",
  "Evler",
  "Depolar",
  "Marketler",
  "Ofisler",
  "İnternet kafeler",
  "Küçük işletmeler",
];

const surecAdimlari = [
  "İhtiyaç ve alan yapısı değerlendirilir.",
  "Kamera, alarm veya network çözümü belirlenir.",
  "Kurulum planı ve sistem bilgisi paylaşılır.",
  "Onay sonrası montaj ve teknik kurulum yapılır.",
];

const kameraGorselleri = [
  "/images/kamera1.webp",
  "/images/kamera2.webp",
  "/images/kamera3.webp",
];

export default function GuvenlikSistemleri() {
  return (
    <>
    <Seo
  title="Güvenlik Kamera Sistemleri | Özkaya Bilişim Çay"
  description="Çay ve çevresinde güvenlik kamera sistemleri, alarm, yangın ihbar, network ve personel takip sistemleri için Özkaya Bilişim."
  canonicalPath="/guvenlik-sistemleri"
/>
      <section className="inner-hero security-hero">
        <div className="container inner-hero-grid">
          <motion.div 
            className="inner-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow light">GÜVENLİK SİSTEMLERİ</span>
            <h1>İş yeriniz ve yaşam alanınız için güvenilir çözümler</h1>
            <p>
              Kamera sistemleri, alarm, yangın ihbar, network ve personel takip
              sistemleriyle güvenlik ve altyapı ihtiyaçlarınıza çözüm sunuyoruz.
            </p>

            <div className="hero-actions">
              <Link to="/iletisim" className="primary-button">
                Teklif Al
              </Link>
              <Link to="/teknik-destek" className="secondary-button dark">
                Teknik Destek
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="inner-hero-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>Kurulum alanları</span>
            <div className="mini-tag-list">
              {kullanimAlanlari.map((item) => (
                <strong key={item}>{item}</strong>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section service-detail-section">
        <div className="container">
          <motion.div 
            className="section-title center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span>GÜVENLİK VE ALTYAPI ÇÖZÜMLERİ</span>
            <h2>Kamera, alarm, yangın ihbar ve network sistemleri</h2>
            <p>
              İşletmenizin veya yaşam alanınızın ihtiyacına göre güvenlik ve
              bağlantı sistemleri için çözüm odaklı kurulum desteği sağlıyoruz.
            </p>
          </motion.div>

          <div className="detail-card-grid">
            {guvenlikHizmetleri.map((service, index) => (
              <motion.div 
                className="detail-card" 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section security-info-section">
        <div className="container security-info-grid">
          <motion.div 
            className="security-info-card primary"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span>Güvenlik Kamera</span>
            <h2>Alanınıza uygun kamera sistemi</h2>
            <p>
              İş yerinizin giriş, kasa, depo, dış cephe veya ortak kullanım
              alanları için ihtiyaca göre kamera sistemi planlanabilir.
            </p>
          </motion.div>

          <motion.div 
            className="security-info-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span>Network & Altyapı</span>
            <h2>Bağlantı ve kablolama desteği</h2>
            <p>
              Kamera, internet ve ağ sistemlerinin daha düzenli çalışması için
              network altyapısı ve bağlantı desteği sunulur.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section security-gallery-section">
        <div className="container">
          <motion.div 
            className="section-title center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span>Kurulum Görselleri</span>
            <h2>Güvenlik sistemlerinden örnek görseller</h2>
            <p>
              Kamera ve güvenlik sistemleri alanındaki hizmetlerimizi yansıtan bazı görseller.
            </p>
          </motion.div>

          <div className="security-gallery-grid">
            {kameraGorselleri.map((gorsel, index) => (
              <motion.div 
                className="security-gallery-card" 
                key={gorsel}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={gorsel}
                  alt={`Özkaya Bilişim güvenlik sistemi görseli ${index + 1}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container process-grid">
          <motion.div 
            className="process-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Kurulum süreci</span>
            <h2>İhtiyacı belirler, doğru sistemi kurarız</h2>
            <p>
              Güvenlik sistemi kurulumunda önce alanın yapısı ve ihtiyaçlar
              değerlendirilir. Ardından uygun sistem belirlenerek kurulum süreci
              planlanır.
            </p>
          </motion.div>

          <div className="step-list">
            {surecAdimlari.map((step, index) => (
              <motion.div 
                className="step-card" 
                key={step}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <motion.div 
          className="container cta-band"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="eyebrow light">Güvenlik sistemi mi düşünüyorsunuz?</span>
            <h2>Özkaya Bilişim ile iletişime geçin</h2>
            <p>
              Kamera, alarm, yangın ihbar, network veya personel takip sistemi
              ihtiyaçlarınız için bilgi alabilirsiniz.
            </p>
          </div>

          <Link to="/iletisim" className="primary-button">
            İletişime Geç
          </Link>
        </motion.div>
      </section>
    </>
  );
}