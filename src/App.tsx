import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./bilesenler/Layout";
import ScrollToTop from "./bilesenler/ScrollToTop";
import AnaSayfa from "./sayfalar/AnaSayfa";
import TeknikDestek from "./sayfalar/TeknikDestek";
import Eglence from "./sayfalar/Eglence";
import GuvenlikSistemleri from "./sayfalar/GuvenlikSistemleri";
import BilgisayarDonanim from "./sayfalar/BilgisayarDonanim";
import Hakkimizda from "./sayfalar/Hakkimizda";
import Iletisim from "./sayfalar/Iletisim";
import Analytics from "./bilesenler/Analytics";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Analytics />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<AnaSayfa />} />
          <Route path="/teknik-destek" element={<TeknikDestek />} />
          <Route path="/eglence" element={<Eglence />} />
          <Route path="/guvenlik-sistemleri" element={<GuvenlikSistemleri />} />
          <Route path="/bilgisayar-donanim" element={<BilgisayarDonanim />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}