import Origin from "./components/Origin";
import Pt56 from "./components/Pt56";
import Pt57 from "./components/Pt57";
import Re_Orgin from "./components/Re-Origin";
import Re_SassCompn from "./components/Re_SassCompn";
import Re_StyledComponent from "./components/Re_StyledComponent";
import SassComponent from "./components/SassComponents";
import StyledComponent from "./components/StyledComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Origin /> */}
      {/* <SassComponent /> */}
      {/* <Pt56 /> */}
      {/* <Pt57 /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<StyledComponent />} />
          <Route path="/origin" element={<Origin />} />
          <Route path="/sass" element={<SassComponent />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Re_StyledComponent />} />
          <Route path="/origin" element={<Re_Orgin />} />
          <Route path="/sass" element={<Re_SassCompn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
