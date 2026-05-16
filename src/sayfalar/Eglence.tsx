import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../bilesenler/Seo";

const eglenceHizmetleri = [
  {
    title: "İnternet Kafe",
    text: "Günlük internet kullanımı, oyun ve online işlemler için konforlu bilgisayar alanı.",
  },
  {
    title: "PlayStation Keyfi",
    text: "Arkadaşlarınla eğlenceli vakit geçirmek için PlayStation salonu deneyimi.",
  },
  {
    title: "Oyun Ortamı",
    text: "Rahat oturma düzeni ve keyifli atmosferle oyun deneyimini daha eğlenceli hale getiriyoruz.",
  },
  {
    title: "Arkadaşlarla Vakit",
    text: "Tek başına ya da arkadaş grubunla gelip oyun ve eğlenceyi bir arada yaşayabilirsin.",
  },
];

const oyunAlanlari = [
  "PlayStation",
  "İnternet Kafe",
  "Online Oyun",
  "Arkadaş Ortamı",
  "Konforlu Alan",
  "Oyun Keyfi",
];

const nedenGelmelisin = [
  "Çay’da ulaşılabilir oyun ve internet alanı",
  "Arkadaşlarla keyifli vakit geçirme imkanı",
  "İnternet kafe ve PlayStation hizmeti tek yerde",
  "Teknik destek ve donanım hizmetlerine de aynı noktadan ulaşım",
];

export default function Eglence() {
  return (
    <>
    <Seo
  title="İnternet Kafe ve PlayStation | Özkaya Bilişim Game World Çay"
  description="Çay’da internet kafe, PlayStation salonu ve oyun keyfi için Özkaya Bilişim Game World eğlence alanını ziyaret edin."
  canonicalPath="/eglence"
/>
      <section className="inner-hero entertainment-hero">
        <div className="container inner-hero-grid">
          <motion.div 
            className="inner-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow light">İNTERNET KAFE & PLAYSTATION</span>
            <h1>Oyun, internet ve eğlence aynı noktada</h1>
            <p>
              Özkaya Bilişim’de internet kafe ve PlayStation alanıyla
              arkadaşlarınla keyifli vakit geçirebilir, oyun deneyimini
              doyasıya yaşayabilirsin.
            </p>

            <div className="hero-actions">
              <Link to="/iletisim" className="primary-button">
                Konuma Git
              </Link>
              <Link to="/hakkimizda" className="secondary-button dark">
                Bizi Tanıyın
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="inner-hero-panel entertainment-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>Eğlence alanı</span>
            <div className="mini-tag-list">
              {oyunAlanlari.map((item) => (
                <strong key={item}>{item}</strong>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section entertainment-showcase">
        <div className="container">
          <motion.div 
            className="section-title center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span>EĞLENCE HİZMETLERİ</span>
            <h2>Oyun ve internet deneyimi için keyifli ortam</h2>
            <p>
              İster oyun oyna, ister internet kullan, ister arkadaşlarınla
              PlayStation keyfi yap. Özkaya Bilişim’de eğlence ve teknoloji bir
              arada.
            </p>
          </motion.div>

          <div className="entertainment-card-grid">
            {eglenceHizmetleri.map((service, index) => (
              <motion.div 
                className="entertainment-card" 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span>{service.title}</span>
                <p>{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section gaming-band-section">
        <motion.div 
          className="container gaming-band"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="eyebrow light">Oyun zamanı</span>
            <h2>Arkadaşlarınla gel, oyunun keyfini çıkar</h2>
            <p>
              PlayStation ve internet kafe alanı ile hem oyun hem de sosyal
              vakit için Çay’da ulaşılabilir bir eğlence noktası sunuyoruz.
            </p>
          </div>

          <div className="gaming-stats">
            <div>
              <strong>PS</strong>
              <span>PlayStation keyfi</span>
            </div>
            <div>
              <strong>PC</strong>
              <span>İnternet kafe alanı</span>
            </div>
            <div>
              <strong>OYUN</strong>
              <span>Arkadaş ortamı</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <motion.div 
            className="split-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Neden Özkaya Bilişim?</span>
            <h2>Eğlence, teknik destek ve bilişim hizmetleri bir arada</h2>
            <p>
              Özkaya Bilişim yalnızca oyun ve internet alanı değil; aynı
              zamanda teknik servis, güvenlik sistemleri ve donanım çözümleriyle
              geniş hizmet sunan yerel bir teknoloji noktasıdır.
            </p>

            <div className="feature-list">
              {nedenGelmelisin.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>

            <Link to="/iletisim" className="inline-button">
              İletişim ve konum bilgileri
            </Link>
          </motion.div>

          <motion.div 
            className="split-image entertainment-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/eglence1.webp" alt="Özkaya Bilişim internet kafe ve bilgisayar alanı" />
          </motion.div>
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
            <span className="eyebrow light">Eğlenceye hazır mısınız?</span>
            <h2>Özkaya Bilişim’e uğrayın</h2>
            <p>
              İnternet kafe ve PlayStation hizmetleri hakkında bilgi almak veya
              konum bilgilerine ulaşmak için iletişim sayfasını ziyaret
              edebilirsiniz.
            </p>
          </div>

          <Link to="/iletisim" className="primary-button">
            Konuma Git
          </Link>
        </motion.div>
      </section>
    </>
  );
}