import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/homojen-vinil" element={<HomojenVinil></HomojenVinil>}></Route>
          <Route path="/heterojen-vinil" element={<HeterojenVinil></HeterojenVinil>}></Route>
          <Route path="/spor-vinil" element={<SporVinil></SporVinil>}></Route>
          <Route path="/luks-vinil-karo" element={<LuksVinil></LuksVinil>}></Route>
          <Route path="/kondaktif-vinil" element={<KondaktifVinil></KondaktifVinil>}></Route>
          <Route path="/aluminyum-supurgelik" element={<Supurgelik></Supurgelik>}></Route>
          <Route path="/karo-hali" element={<KaroHali></KaroHali>}></Route>
          <Route path="/yukseltilmis-doseme-sistemleri" element={<YuksekDosemeSistem></YuksekDosemeSistem>}></Route>
          <Route path="/baffle-asma-tavan" element={<BaffleTavan></BaffleTavan>}></Route>
          <Route path="/petek-asma-tavan" element={<PetekTavan></PetekTavan>}></Route>
          <Route path="/mesh-asma-tavan" element={<MeshTavan></MeshTavan>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
