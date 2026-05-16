import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../bilesenler/Seo";

const donanimHizmetleri = [
  {
    title: "SSD & RAM Yükseltme",
    text: "Yavaşlayan bilgisayarlar için SSD geçişi, RAM artırma ve performans yükseltme desteği.",
  },
  {
    title: "Bilgisayar Parçaları",
    text: "İhtiyaca uygun bilgisayar parçaları, donanım önerisi ve parça değişim desteği.",
  },
  {
    title: "Aksesuar & Çevre Birimleri",
    text: "Klavye, mouse, kulaklık, kablo, adaptör ve bilgisayar aksesuarları için destek.",
  },
  {
    title: "Donanım Arıza Kontrolü",
    text: "Disk, RAM, ekran, anakart, güç kaynağı ve diğer donanımlar için kontrol işlemleri.",
  },
  {
    title: "Laptop Donanım Desteği",
    text: "Laptoplarda disk, RAM, adaptör, batarya ve temel donanım ihtiyaçları için çözüm.",
  },
  {
    title: "Masaüstü Bilgisayar Desteği",
    text: "Masaüstü bilgisayar bakım, parça değişimi, yükseltme ve sistem toplama desteği.",
  },
];

const donanimEtiketleri = [
  "SSD",
  "RAM",
  "Klavye",
  "Mouse",
  "Kulaklık",
  "Adaptör",
  "Kablo",
  "Parça Değişimi",
];

const avantajlar = [
  "İhtiyaca uygun parça ve donanım yönlendirmesi",
  "Performans artırmaya yönelik yükseltme desteği",
  "Laptop ve masaüstü bilgisayarlar için çözüm",
  "Teknik servis ile birlikte donanım kontrolü",
];

const surecAdimlari = [
  "Bilgisayarın mevcut durumu kontrol edilir.",
  "Performans veya arıza ihtiyacı belirlenir.",
  "Uygun parça veya yükseltme seçeneği paylaşılır.",
  "Onay sonrası donanım işlemi uygulanır.",
];

export default function BilgisayarDonanim() {
  return (
    <>
    <Seo
  title="Bilgisayar Donanım ve Parça | Özkaya Bilişim Çay"
  description="SSD, RAM, bilgisayar parçası, aksesuar, bakım ve donanım yükseltme çözümleri için Özkaya Bilişim Çay/Afyonkarahisar."
  canonicalPath="/bilgisayar-donanim"
/>
      <section className="inner-hero hardware-hero">
        <div className="container inner-hero-grid">
          <motion.div 
            className="inner-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow light">BİLGİSAYAR & DONANIM</span>
            <h1>Bilgisayarınız için parça, yükseltme ve donanım çözümleri</h1>
            <p>
              SSD, RAM, aksesuar, parça değişimi ve donanım desteğiyle
              bilgisayarınızı daha verimli kullanmanız için çözüm sunuyoruz.
            </p>

            <div className="hero-actions">
              <Link to="/iletisim" className="primary-button">
                Bilgi Al
              </Link>
              <Link to="/teknik-destek" className="secondary-button dark">
                Teknik Servis
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="inner-hero-panel hardware-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>Donanım alanları</span>
            <div className="mini-tag-list">
              {donanimEtiketleri.map((item) => (
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
            <span>DONANIM HİZMETLERİ</span>
            <h2>Parça, aksesuar ve performans çözümleri</h2>
            <p>
              Bilgisayarınızın ihtiyacına göre yükseltme, bakım, parça değişimi
              ve aksesuar desteğiyle daha verimli kullanım sağlayabilirsiniz.
            </p>
          </motion.div>

          <div className="detail-card-grid">
            {donanimHizmetleri.map((service, index) => (
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

      <section className="section hardware-feature-section">
        <div className="container hardware-feature-grid">
          <motion.div 
            className="hardware-feature-card large"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span>Performans Yükseltme</span>
            <h2>Eskiyen bilgisayara yeni hız kazandırın</h2>
            <p>
              SSD yükseltme, RAM artırma ve bakım işlemleriyle bilgisayarın
              açılış, kullanım ve program performansı gözle görülür şekilde
              iyileştirilebilir.
            </p>
          </motion.div>

          <motion.div 
            className="hardware-feature-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>Parça & Aksesuar</span>
            <h2>İhtiyaca uygun donanım desteği</h2>
            <p>
              Kullanım amacınıza göre uygun parça, aksesuar ve çevre birimleri
              konusunda destek alabilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <motion.div 
            className="split-image hardware-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/magaza3.webp" alt="Özkaya Bilişim donanım hizmetleri" />
          </motion.div>

          <motion.div 
            className="split-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Neden donanım desteği?</span>
            <h2>Doğru parça, doğru kurulum ve güvenilir destek</h2>
            <p>
              Bilgisayarınızda performans kaybı, depolama yetersizliği veya
              donanım arızası varsa, ihtiyaca uygun çözümle cihazınızı daha
              kullanışlı hale getirebilirsiniz.
            </p>

            <div className="feature-list">
              {avantajlar.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>

            <Link to="/iletisim" className="inline-button">
              Donanım desteği alın
            </Link>
          </motion.div>
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
            <span className="eyebrow">Süreç nasıl ilerler?</span>
            <h2>Bilgisayarın ihtiyacı belirlenir, doğru çözüm uygulanır</h2>
            <p>
              Donanım işlemlerinde önce cihazın mevcut durumu kontrol edilir.
              Ardından ihtiyaca göre parça veya yükseltme seçeneği belirlenir.
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
            <span className="eyebrow light">Bilgisayarınızı güçlendirmek ister misiniz?</span>
            <h2>Özkaya Bilişim’den donanım desteği alın</h2>
            <p>
              SSD, RAM, aksesuar, parça değişimi veya bilgisayar yükseltme
              işlemleri için bizimle iletişime geçebilirsiniz.
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
