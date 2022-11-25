import "./App.css";

import Header from "./components/Header";
import Planet from "./components/Planet";
import Homepage from "./components/Homepage";
import CardDetail from "./components/CardDetail";
import { Routes, Route } from "react-router-dom";
import PropositionList from "./pages/PropositionList";
import Footer from "./components/Footer";



function App() {

  return (
    <div className="App">


      <Header />
      <Planet />
      <PropositionList />
      <Footer />


    </div>
  );

}

export default App;
