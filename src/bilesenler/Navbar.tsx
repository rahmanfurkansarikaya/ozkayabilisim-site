import { useState } from "react";
import { NavLink } from "react-router-dom";
import { iletisimBilgileri } from "../veriler/iletisim";

const menuItems = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/teknik-destek", label: "Teknik Destek" },
  { to: "/eglence", label: "Eğlence" },
  { to: "/guvenlik-sistemleri", label: "Güvenlik Sistemleri" },
  { to: "/bilgisayar-donanim", label: "Bilgisayar & Donanım" },
  { to: "/hakkimizda", label: "Hakkımızda" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <span>{iletisimBilgileri.kisaKonum}</span>
          <span>Teknik servis • Güvenlik sistemleri • İnternet kafe</span>
          <a href={`mailto:${iletisimBilgileri.mail}`}>
            {iletisimBilgileri.mail}
          </a>
        </div>
      </div>

      <nav className="navbar container">
        <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/images/logo.png" alt="Özkaya Bilişim Logo" />
        </NavLink>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Menüyü aç veya kapat"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <div className={menuOpen ? "nav-links open" : "nav-links"}>
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/iletisim"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Bize Ulaşın
          </NavLink>
        </div>
      </nav>
    </header>
  );
}