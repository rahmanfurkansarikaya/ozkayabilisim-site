import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../bilesenler/Seo";

const hizmetAlanlari = [
  "Teknik servis",
  "Güvenlik kamera sistemleri",
  "Alarm sistemleri",
  "Yangın ihbar sistemleri",
  "Network çözümleri",
  "Personel takip sistemleri",
  "İnternet kafe",
  "PlayStation salonu",
  "Bilgisayar donanım desteği",
];

const degerler = [
  {
    title: "Güvenilir Hizmet",
    text: "Müşterilerimizin teknik ihtiyaçlarını doğru anlayıp, çözüm odaklı hizmet sunmayı önemsiyoruz.",
  },
  {
    title: "Yerel Destek",
    text: "Çay’da ulaşılabilir bir teknoloji noktası olarak müşterilerimize hızlı destek sağlamayı hedefliyoruz.",
  },
  {
    title: "Geniş Hizmet Alanı",
    text: "Teknik servis, güvenlik sistemleri, donanım ve eğlence hizmetlerini tek noktada bir araya getiriyoruz.",
  },
];

const ozetKartlari = [
  {
    title: "Teknik",
    text: "Bilgisayar bakım, format, arıza tespiti ve donanım desteği.",
  },
  {
    title: "Güvenlik",
    text: "Kamera, alarm, yangın ihbar, network ve personel takip çözümleri.",
  },
  {
    title: "Eğlence",
    text: "İnternet kafe ve PlayStation alanıyla keyifli vakit imkanı.",
  },
];

export default function Hakkimizda() {
  return (
    <>
    <Seo
  title="Hakkımızda | Özkaya Bilişim Çay/Afyonkarahisar"
  description="Özkaya Bilişim; Çay’da teknik servis, güvenlik sistemleri, bilgisayar donanım, internet kafe ve PlayStation hizmetleri sunan yerel teknoloji işletmesidir."
  canonicalPath="/hakkimizda"
/>
      <section className="inner-hero about-hero">
        <div className="container inner-hero-grid">
          <motion.div 
            className="inner-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow light">ÖZKAYA BİLİŞİM'İ TANIYIN</span>
            <h1>Çay’da teknoloji, güvenlik ve eğlence noktası</h1>
            <p>
              Özkaya Bilişim; teknik servis, güvenlik sistemleri, bilgisayar
              donanım, internet kafe ve PlayStation hizmetleriyle Çay’da hizmet
              veren yerel bir bilişim işletmesidir.
            </p>

            <div className="hero-actions">
              <Link to="/iletisim" className="primary-button">
                Bize Ulaşın
              </Link>
              <Link to="/guvenlik-sistemleri" className="secondary-button dark">
                Hizmetleri İncele
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="inner-hero-panel about-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>Hizmet alanlarımız</span>
            <div className="mini-tag-list">
              {hizmetAlanlari.slice(0, 8).map((item) => (
                <strong key={item}>{item}</strong>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section about-intro-section">
        <div className="container about-intro-grid">
          <motion.div 
            className="about-logo-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/logo.png" alt="Özkaya Bilişim Logo" />
          </motion.div>

          <motion.div 
            className="about-intro-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">HAKKIMIZDA</span>
            <h2>Teknoloji ihtiyaçlarınıza tek noktadan çözüm</h2>
            <p>
              Özkaya Bilişim olarak bilgisayar teknik servisinden güvenlik
              sistemlerine, internet kafe ve PlayStation alanından donanım
              desteğine kadar farklı ihtiyaçlara yönelik hizmetler sunuyoruz.
            </p>
            <p>
              Amacımız; müşterilerimizin teknolojiyle ilgili sorunlarına hızlı,
              anlaşılır ve güvenilir çözümler üretmek. Çay’da yerel bir işletme
              olarak ulaşılabilir olmayı ve doğru hizmet sunmayı önemsiyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section about-values-section">
        <div className="container">
          <motion.div 
            className="section-title center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span>ÇALIŞMA ANLAYIŞIMIZ</span>
            <h2>Güven, çözüm ve ulaşılabilir hizmet</h2>
            <p>
              Her hizmet alanında müşterinin ihtiyacını doğru anlamaya,
              yapılacak işlemi netleştirmeye ve uygun çözüm sunmaya önem
              veriyoruz.
            </p>
          </motion.div>

          <div className="about-value-grid">
            {degerler.map((item, index) => (
              <motion.div 
                className="about-value-card" 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-summary-section">
        <div className="container about-summary-grid">
          {ozetKartlari.map((item, index) => (
            <motion.div 
              className="about-summary-card" 
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <motion.div 
            className="split-image about-shop-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/magaza1.webp" alt="Özkaya Bilişim mağaza dış görünümü" />
          </motion.div>

          <motion.div 
            className="split-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Çay’da hizmetinizdeyiz</span>
            <h2>Fiziksel işletme güveniyle teknoloji desteği</h2>
            <p>
              Özkaya Bilişim, yalnızca dijitalde görünen bir marka değil;
              Çay’da müşterilerine doğrudan ulaşılabilir şekilde hizmet veren
              bir işletmedir.
            </p>

            <div className="feature-list">
              <div>Teknik servis ve bakım işlemleri</div>
              <div>Güvenlik kamera ve alarm sistemleri</div>
              <div>İnternet kafe ve PlayStation alanı</div>
              <div>Bilgisayar parça ve donanım desteği</div>
            </div>

            <Link to="/iletisim" className="inline-button">
              Konum ve iletişim bilgileri
            </Link>
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
            <span className="eyebrow light">Bizi yakından tanıyın</span>
            <h2>Özkaya Bilişim’e ulaşın</h2>
            <p>
              Teknik destek, güvenlik sistemleri, donanım veya eğlence
              hizmetleri hakkında bilgi almak için bizimle iletişime
              geçebilirsiniz.
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
