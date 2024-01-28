import React from "react";
import './styles/tailwind.css';
import "./App.css";
import TbcXUsaid from "./pages/tbcXUsaid";
import DefaultHeader from "./components/defaultHeader";
import Footer from "./components/defaultFooter";

function App() {
  return (
    <div>
      <DefaultHeader />
      <TbcXUsaid />
      <Footer />
    </div>
  );
}

export default App;
