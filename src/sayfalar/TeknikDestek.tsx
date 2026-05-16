import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../bilesenler/Seo";

const destekHizmetleri = [
  {
    title: "Format & Kurulum",
    text: "Bilgisayar formatı, Windows kurulumu, sürücü yükleme ve temel program kurulumları.",
  },
  {
    title: "Bakım & Hızlandırma",
    text: "Yavaşlayan bilgisayarlar için temizlik, bakım, optimizasyon ve performans iyileştirme.",
  },
  {
    title: "Arıza Tespiti",
    text: "Açılmayan, kapanan, donan veya hata veren bilgisayarlar için detaylı kontrol.",
  },
  {
    title: "Virüs Temizleme",
    text: "Zararlı yazılım, reklam virüsü ve sistem güvenliği sorunları için temizlik işlemleri.",
  },
  {
    title: "Parça Değişimi",
    text: "RAM, SSD, disk, ekran, adaptör ve diğer donanım parçaları için değişim desteği.",
  },
  {
    title: "Laptop & Masaüstü",
    text: "Laptop ve masaüstü bilgisayarlar için teknik servis, bakım ve donanım desteği.",
  },
];

const surecAdimlari = [
  "Sorun dinlenir ve ön kontrol yapılır.",
  "Arıza veya ihtiyaç netleştirilir.",
  "Uygun çözüm ve işlem bilgisi paylaşılır.",
  "Onay sonrası teknik işlem uygulanır.",
];

const destekAlanlari = [
  "Bilgisayar açılmıyor",
  "Bilgisayar çok yavaş",
  "Format gerekiyor",
  "SSD / RAM yükseltme",
  "Virüs ve reklam sorunu",
  "Program kurulumu",
  "İnternet / bağlantı sorunu",
  "Donanım kontrolü",
];

export default function TeknikDestek() {
  return (
    <>
    <Seo
  title="Teknik Destek | Özkaya Bilişim Çay Bilgisayar Servisi"
  description="Çay/Afyonkarahisar’da bilgisayar format, bakım, arıza tespiti, virüs temizleme, SSD ve RAM yükseltme hizmetleri için Özkaya Bilişim."
  canonicalPath="/teknik-destek"
/>
      <section className="inner-hero tech-hero">
        <div className="container inner-hero-grid">
          <motion.div 
            className="inner-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow light">TEKNİK SERVİS</span>
            <h1>Bilgisayarınız için hızlı ve güvenilir destek</h1>
            <p>
              Format, bakım, arıza tespiti, donanım yükseltme ve yazılım
              kurulum işlemleri için Özkaya Bilişim yanınızda.
            </p>

            <div className="hero-actions">
              <Link to="/iletisim" className="primary-button">
                Destek Al
              </Link>
              <Link to="/bilgisayar-donanim" className="secondary-button dark">
                Donanım Çözümleri
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="inner-hero-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>Destek verilen işlemler</span>
            <div className="mini-tag-list">
              {destekAlanlari.map((item) => (
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
            <span>TEKNİK DESTEK HİZMETLERİ</span>
            <h2>Bilgisayar sorunlarınıza pratik çözümler</h2>
            <p>
              Bilgisayarınızda yaşadığınız yavaşlama, arıza, yazılım veya
              donanım sorunları için ihtiyacınıza göre çözüm sunuyoruz.
            </p>
          </motion.div>

          <div className="detail-card-grid">
            {destekHizmetleri.map((service, index) => (
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

      <section className="section process-section">
        <div className="container process-grid">
          <motion.div 
            className="process-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Nasıl ilerliyoruz?</span>
            <h2>Sorunu netleştirir, en uygun çözümü uygularız</h2>
            <p>
              Teknik destek sürecinde önce cihazın durumu kontrol edilir.
              Yapılacak işlem netleştirildikten sonra kullanıcıya bilgi
              verilerek çözüm uygulanır.
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
            <span className="eyebrow light">Bilgisayarınızda sorun mu var?</span>
            <h2>Özkaya Bilişim’den teknik destek alın</h2>
            <p>
              Bilgisayarınız yavaşladıysa, format gerekiyorsa veya donanım
              yükseltme düşünüyorsanız bizimle iletişime geçebilirsiniz.
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