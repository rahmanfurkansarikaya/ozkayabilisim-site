import { Link } from "react-router-dom";
import { iletisimBilgileri } from "../veriler/iletisim";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img
            className="footer-logo"
            src="/images/logo.png"
            alt="Özkaya Bilişim"
          />
          <p>
            Teknik servis, güvenlik sistemleri, internet kafe ve PlayStation
            hizmetleriyle Çay’da yanınızdayız.
          </p>
        </div>

        <div>
          <h3>Hizmetler</h3>
          <Link to="/teknik-destek">Teknik Destek</Link>
          <Link to="/guvenlik-sistemleri">Güvenlik Sistemleri</Link>
          <Link to="/eglence">İnternet Kafe & PlayStation</Link>
          <Link to="/bilgisayar-donanim">Bilgisayar Donanım</Link>
        </div>

        <div>
          <h3>İletişim</h3>
          <p>{iletisimBilgileri.adres}</p>
          <a href={`mailto:${iletisimBilgileri.mail}`}>
            {iletisimBilgileri.mail}
          </a>
          <a href={`tel:${iletisimBilgileri.telefonLink}`}>
            {iletisimBilgileri.telefonGorunen}
          </a>
          <a
             href="https://www.instagram.com/ozkayabilisim.cay/"
             target="_blank"
             rel="noreferrer"
          >
             Instagram: @ozkayabilisim.cay
          </a>

          <a
             href="https://www.instagram.com/gameworld.cay/"
             target="_blank"
             rel="noreferrer"
        >
             Instagram: @gameworld.cay
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Özkaya Bilişim. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}