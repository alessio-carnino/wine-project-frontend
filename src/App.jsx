import { Route, Routes } from "react-router-dom";
import "./index.scss";
import Navbar from "./components/navbar";
import Homepage from "./components/Homepage";
import Wines from "./components/Wines";
import Wine from "./components/Wine";
import Producers from "./components/Producers";
import Producer from "./components/Producer";
import Countries from "./components/Countries";
import Country from "./components/Country";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path={"/wines"}>
          <Route index element={<Wines />} />
          <Route path={":id"} element={<Wine />} />
        </Route>

        <Route path={"/producers"}>
          <Route index element={<Producers />} />
          <Route path={":id"} element={<Producer />} />
        </Route>

        <Route path={"/countries"}>
          <Route index element={<Countries />} />
          <Route path={":id"} element={<Country />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
