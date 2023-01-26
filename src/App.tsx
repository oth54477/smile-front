// import { SetStateAction } from "react";
import NavBar from "./components/NavBar";
import Modal from "./components/common/Modal";

// interface PropsTypes {
//   setModalOpen: React.Dispatch<SetStateAction<boolean>>;
// }

function App() {
  return (
    <>
      <NavBar />
      <Modal />
    </>
  );
}

export default App;
