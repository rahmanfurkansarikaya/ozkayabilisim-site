import { iletisimBilgileri, whatsappLink } from "../veriler/iletisim";
import { motion } from "framer-motion";
import Seo from "../bilesenler/Seo";

const iletisimKartlari = [
  {
    title: "Telefon",
    text: iletisimBilgileri.telefonGorunen,
    href: `tel:${iletisimBilgileri.telefonLink}`,
    action: "Ara",
  },
  {
    title: "WhatsApp",
    text: "WhatsApp üzerinden hızlıca mesaj gönderin.",
    href: whatsappLink("Merhaba, Özkaya Bilişim hakkında bilgi almak istiyorum."),
    action: "WhatsApp’tan Yaz",
  },
  {
    title: "E-posta",
    text: iletisimBilgileri.mail,
    href: `mailto:${iletisimBilgileri.mail}`,
    action: "Mail Gönder",
  },
  {
    title: "Instagram",
    text: "@ozkayabilisim.cay",
    href: "https://www.instagram.com/ozkayabilisim.cay/",
    action: "Instagram’a Git",
  },
  {
    title: "Game World",
    text: "@gameworld.cay",
    href: "https://www.instagram.com/gameworld.cay/",
    action: "Instagram’a Git",
  },
  {
    title: "Konum",
    text: iletisimBilgileri.kisaKonum,
    href: iletisimBilgileri.googleMapsLink,
    action: "Haritada Aç",
  },
];

export default function Iletisim() {
  return (
    <>
    <Seo
  title="İletişim | Özkaya Bilişim Çay/Afyonkarahisar"
  description="Özkaya Bilişim iletişim bilgileri: telefon, WhatsApp, mail, adres, çalışma saatleri ve Google Haritalar konumu."
  canonicalPath="/iletisim"
/>
      <section className="inner-hero contact-hero">
        <div className="container inner-hero-grid">
          <motion.div 
            className="inner-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow light">İLETİŞİM</span>
            <h1>Özkaya Bilişim’e ulaşın</h1>
            <p>
              Teknik destek, güvenlik sistemleri, bilgisayar donanım, internet
              kafe ve PlayStation hizmetleri hakkında bilgi almak için bizimle
              iletişime geçebilirsiniz.
            </p>

            <div className="hero-actions">
              <a
                href={whatsappLink(
                  "Merhaba, Özkaya Bilişim hakkında bilgi almak istiyorum."
                )}
                className="primary-button"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp’tan Yaz
              </a>
              <a
                href={`tel:${iletisimBilgileri.telefonLink}`}
                className="secondary-button dark"
              >
                Hemen Ara
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="inner-hero-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>Çalışma saatleri</span>
            <div className="contact-hours-list">
              {iletisimBilgileri.calismaSaatleri.map((item) => (
                <strong key={item}>{item}</strong>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <motion.div 
            className="section-title center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span>BİZE ULAŞIN</span>
            <h2>Telefon, WhatsApp, mail ve konum bilgileri</h2>
            <p>
              Size en uygun kanaldan Özkaya Bilişim ile iletişime geçebilir,
              adresimizi harita üzerinden kolayca bulabilirsiniz.
            </p>
          </motion.div>

          <div className="contact-card-grid">
            {iletisimKartlari.map((item, index) => (
              <motion.a
                className="contact-card"
                href={item.href}
                key={item.title}
                target={
                  item.title === "Konum" ||
                  item.title === "WhatsApp" ||
                  item.title === "Instagram" ||
                  item.title === "Game World"
                   ? "_blank"
                   : undefined
                }
                rel={
                 item.title === "Konum" ||
                 item.title === "WhatsApp" ||
                 item.title === "Instagram" ||
                 item.title === "Game World"
                  ? "noreferrer"
                  : undefined
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span>{item.title}</span>
                <p>{item.text}</p>
                <strong>{item.action} →</strong>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-detail-section">
        <div className="container contact-detail-grid">
          <motion.div 
            className="contact-info-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">ADRES VE BİLGİLER</span>
            <h2>Çay / Afyonkarahisar’da hizmetinizdeyiz</h2>

            <div className="contact-info-list">
              <div>
                <strong>Adres</strong>
                <p>{iletisimBilgileri.adres}</p>
              </div>

              <div>
                <strong>Telefon</strong>
                <p>
                  <a href={`tel:${iletisimBilgileri.telefonLink}`}>
                    {iletisimBilgileri.telefonGorunen}
                  </a>
                </p>
              </div>

              <div>
                <strong>E-posta</strong>
                <p>
                  <a href={`mailto:${iletisimBilgileri.mail}`}>
                    {iletisimBilgileri.mail}
                  </a>
                </p>
              </div>

              <div>
               <strong>Instagram</strong>
               {iletisimBilgileri.instagram.map((hesap) => (
                <p key={hesap.kullaniciAdi}>
                  <a href={hesap.link} target="_blank" rel="noreferrer">
                    @{hesap.kullaniciAdi} - {hesap.ad}
                  </a>
                </p>
              ))}
            </div>

              <div>
                <strong>Çalışma Saatleri</strong>
                {iletisimBilgileri.calismaSaatleri.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            <div className="contact-actions">
              <a
                href={iletisimBilgileri.googleMapsLink}
                className="inline-button"
                target="_blank"
                rel="noreferrer"
              >
                Google Haritalar’da Aç
              </a>

              <a
                href={whatsappLink(
                  "Merhaba, Özkaya Bilişim hakkında bilgi almak istiyorum."
                )}
                className="outline-button"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp’tan Yaz
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="map-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Özkaya Bilişim Google Harita"
              src={iletisimBilgileri.haritaEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
