import "./App.css";
import {HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import HomojenVinil from "./pages/HomojenVinil";
import HeterojenVinil from "./pages/HeterojenVinil";
import SporVinil from "./pages/SporVinil";
import LuksVinil from "./pages/LuksVinil";
import Supurgelik from "./pages/Supurgelik";
import KondaktifVinil from "./pages/KondaktifVinil";
import KaroHali from "./pages/KaroHali";
import MeshTavan from "./pages/MeshTavan";
import BaffleTavan from "./pages/BaffleTavan";
import PetekTavan from "./pages/PetekTavan";
import YuksekDosemeSistem from "./pages/YuksekDosemeSistem";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/zemin-uygulamalari/homojen-vinil" element={<HomojenVinil></HomojenVinil>}></Route>
          <Route path="/zemin-uygulamalari/heterojen-vinil" element={<HeterojenVinil></HeterojenVinil>}></Route>
          <Route path="/zemin-uygulamalari/spor-vinil" element={<SporVinil></SporVinil>}></Route>
          <Route path="/zemin-uygulamalari/luks-vinil-karo" element={<LuksVinil></LuksVinil>}></Route>
          <Route path="/zemin-uygulamalari/kondaktif-vinil" element={<KondaktifVinil></KondaktifVinil>}></Route>
          <Route path="/zemin-uygulamalari/aluminyum-supurgelik" element={<Supurgelik></Supurgelik>}></Route>
          <Route path="/zemin-uygulamalari/karo-hali" element={<KaroHali></KaroHali>}></Route>
          <Route path="/zemin-uygulamalari/yukseltilmis-doseme-sistemleri" element={<YuksekDosemeSistem></YuksekDosemeSistem>}></Route>
          <Route path="/tavan-uygulamalari/baffle-asma-tavan" element={<BaffleTavan></BaffleTavan>}></Route>
          <Route path="/tavan-uygulamalari/petek-asma-tavan" element={<PetekTavan></PetekTavan>}></Route>
          <Route path="/tavan-uygulamalari/mesh-asma-tavan" element={<MeshTavan></MeshTavan>}></Route>
          <Route path="/iletisim" element={<Contact></Contact>}></Route>
          <Route path="/hakkimizda" element={<AboutUs></AboutUs>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
