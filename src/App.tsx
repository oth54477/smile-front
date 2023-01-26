// import { SetStateAction } from "react";
import Modal from "./components/common/Modal";
import ButtonBasic from "./components/common/ButtonBasic";
import LandingPages from "./pages/LandingPages";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footers/Footer";

function App() {
  return (
    <>
      <NavBar />
      <LandingPages />
      <Modal />
      {/* <ButtonBasic /> */}
      <Footer />
    </>
  );
}

export default App;
