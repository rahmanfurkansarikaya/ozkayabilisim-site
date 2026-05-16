export const iletisimBilgileri = {
  firmaAdi: "Özkaya Bilişim",
  mail: "info@ozkayabilisim.com.tr",
  telefonGorunen: "+90 544 729 6819",
  telefonLink: "+905447296819",
  whatsappNo: "905447296819",
  adres: "Aktaş, Aktaş Cd. No:2 D:1 A, 03700 Çay/Afyonkarahisar",
  kisaKonum: "Çay / Afyonkarahisar",
  instagram: [
    {
      ad: "Özkaya Bilişim",
      kullaniciAdi: "ozkayabilisim.cay",
      link: "https://www.instagram.com/ozkayabilisim.cay/",
      aciklama: "Teknik servis, güvenlik sistemleri ve bilişim hizmetleri",
    },
    {
      ad: "Game World Çay",
      kullaniciAdi: "gameworld.cay",
      link: "https://www.instagram.com/gameworld.cay/",
      aciklama: "İnternet kafe, PlayStation ve eğlence alanı",
    },
  ],
  calismaSaatleri: [
    "Pazartesi: 08:30 - 00:00",
    "Salı: 08:30 - 00:00",
    "Çarşamba: 08:30 - 00:00",
    "Perşembe: 08:30 - 00:00",
    "Cuma: 08:30 - 00:00",
    "Cumartesi: 08:30 - 00:00",
    "Pazar: 09:00 - 00:00",
    "Resmi tatillerde çalışma saatleri değişebilir.",
  ],
  googleMapsLink:
    "https://www.google.com/maps/dir/%C3%96ZKAYA+B%C4%B0L%C4%B0%C5%9E%C4%B0M,+Akta%C5%9F,+Akta%C5%9F+Cd.+No:2+D:1+A,+03700+%C3%87ay%2FAfyonkarahisar/%C3%96ZKAYA+B%C4%B0L%C4%B0%C5%9E%C4%B0M,+Akta%C5%9F,+Akta%C5%9F+Cd.+No:2+D:1+A,+03700+%C3%87ay%2FAfyonkarahisar/@38.5989997,31.025055,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x14cfa5af47c4571f:0xa2d1dc314a7592cb!2m2!1d31.0213321!2d38.590953!1m5!1m1!1s0x14cfa5af47c4571f:0xa2d1dc314a7592cb!2m2!1d31.0213321!2d38.590953?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
  haritaEmbed:
    "https://www.google.com/maps?q=%C3%96ZKAYA%20B%C4%B0L%C4%B0%C5%9E%C4%B0M%2C%20Akta%C5%9F%2C%20Akta%C5%9F%20Cd.%20No%3A2%20D%3A1%20A%2C%2003700%20%C3%87ay%2FAfyonkarahisar&output=embed",
};

export function whatsappLink(mesaj: string) {
  return `https://wa.me/${iletisimBilgileri.whatsappNo}?text=${encodeURIComponent(
    mesaj
  )}`;
}