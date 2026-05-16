import { whatsappLink } from "../veriler/iletisim";

export default function SabitWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappLink("Merhaba, Özkaya Bilişim hakkında bilgi almak istiyorum.")}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp üzerinden iletişime geç"
    >
      WhatsApp
    </a>
  );
}