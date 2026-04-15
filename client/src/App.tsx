import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./features/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
