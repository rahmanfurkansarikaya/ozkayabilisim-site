import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../bilesenler/Seo";

const featuredServices = [
  {
    label: "Teknik Servis",
    title: "Bilgisayar teknik destek",
    text: "Format, bakım, arıza tespiti, parça değişimi ve yazılım kurulum işlemleri.",
    link: "/teknik-destek",
  },
  {
    label: "Eğlence",
    title: "İnternet kafe & PlayStation",
    text: "Arkadaşlarınla oyun, internet ve PlayStation keyfi için konforlu bir ortam.",
    link: "/eglence",
  },
  {
    label: "Güvenlik",
    title: "Kamera ve alarm sistemleri",
    text: "İş yeri, ev ve apartmanlar için güvenlik kamera, alarm ve network çözümleri.",
    link: "/guvenlik-sistemleri",
  },
];

const quickServices = [
  "Güvenlik Kamera",
  "Alarm Sistemleri",
  "Yangın İhbar",
  "Network Sistemleri",
  "Personel Takip",
  "Teknik Servis",
  "İnternet Kafe",
  "PlayStation",
];

const performanceCards = [
  {
    title: "Teknik Destek",
    subtitle:
      "Bilgisayarınız yavaşladıysa, format gerekiyorsa veya arıza yaşıyorsanız hızlı çözüm sunuyoruz.",
    badge: "Servis",
    link: "/teknik-destek",
    items: ["Format & bakım", "Arıza tespiti", "Virüs temizleme"],
  },
  {
    title: "Güvenlik Sistemleri",
    subtitle:
      "Ev, iş yeri ve işletmeler için kamera, alarm, yangın ihbar ve network sistemleri kuruyoruz.",
    badge: "Kurulum",
    link: "/guvenlik-sistemleri",
    items: ["Kamera sistemi", "Alarm sistemi", "Network altyapısı"],
  },
  {
    title: "Eğlence Alanı",
    subtitle:
      "İnternet kafe ve PlayStation alanıyla arkadaşlarınızla keyifli vakit geçirebileceğiniz bir ortam sunuyoruz.",
    badge: "Game World",
    link: "/eglence",
    items: ["İnternet kafe", "PlayStation", "Oyun ortamı"],
  },
  {
    title: "Donanım Çözümleri",
    subtitle:
      "SSD, RAM, aksesuar, parça değişimi ve bilgisayar yükseltme işlemlerinde destek sağlıyoruz.",
    badge: "Parça",
    link: "/bilgisayar-donanim",
    items: ["SSD & RAM", "Aksesuar", "Parça değişimi"],
  },
];

export default function AnaSayfa() {
  return (
    <>
    <Seo
  title="Özkaya Bilişim | Çay Teknik Servis, Kamera Sistemleri ve İnternet Kafe"
  description="Özkaya Bilişim; Çay/Afyonkarahisar’da teknik servis, güvenlik kamera sistemleri, bilgisayar donanım, internet kafe ve PlayStation hizmetleri sunar."
  canonicalPath="/"
/>
      <section className="hero hero-dark">
        <div className="hero-background">
          <img src="/images/magaza2.webp" alt="Özkaya Bilişim dış görünüm" />
        </div>

        <div className="hero-overlay" />

        <div className="container hero-content-wrap">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow light">TEKNOLOJİYE DAİR HER ŞEY</span>
            <h1>Özkaya Bilişim</h1>
            <p>
              Teknik servis, güvenlik sistemleri, internet kafe, PlayStation ve
              bilgisayar donanım çözümleri tek adreste.
            </p>

            <div className="hero-actions">
              <Link to="/iletisim" className="primary-button">
                İletişime Geç
              </Link>
              <Link to="/eglence" className="secondary-button dark">
                Eğlence Alanını İncele
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="hero-info-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>Öne Çıkan Hizmetler</span>
            <div className="quick-service-list">
              {quickServices.map((item) => (
                <strong key={item}>{item}</strong>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section service-showcase-section">
        <div className="container">
          <motion.div 
            className="section-title center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span>HİZMET ALANLARIMIZ</span>
            <h2>İhtiyacınıza göre doğru çözüm</h2>
            <p>
              Özkaya Bilişim; hem teknik destek hem güvenlik hem de eğlence
              tarafında Çay’da ulaşılabilir ve güvenilir hizmet sunar.
            </p>
          </motion.div>

          <div className="featured-service-grid">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link className="featured-service-card" to={service.link} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <span>{service.label}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <strong>Detayları Gör →</strong>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section performance-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span>ÖZKAYA BİLİŞİM'DE</span>
            <h2>Teknik destekten oyun keyfine kadar güçlü hizmet yapısı</h2>
          </motion.div>

          <div className="performance-grid">
            {performanceCards.map((card, index) => (
              <motion.div 
                className="performance-card" 
                key={card.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <motion.div 
            className="split-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/magaza1.webp" alt="Özkaya Bilişim mağaza görünümü" />
          </motion.div>

          <motion.div 
            className="split-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Çay’da hizmetinizdeyiz</span>
            <h2>Yerel, ulaşılabilir ve çözüm odaklı bilişim noktası</h2>
            <p>
              Bilgisayarınızda yaşadığınız sorunlar, iş yeriniz için güvenlik
              sistemi ihtiyacı, internet kafe ve PlayStation eğlencesi veya
              donanım çözümleri için Özkaya Bilişim’e ulaşabilirsiniz.
            </p>

            <div className="feature-list">
              <div>Hızlı teknik destek</div>
              <div>Güvenlik sistemlerinde kurulum ve destek</div>
              <div>Oyun ve internet kullanımı için konforlu ortam</div>
              <div>Bilgisayar parça ve donanım çözümleri</div>
            </div>

            <Link to="/iletisim" className="inline-button">
              Konum ve iletişim bilgileri
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}