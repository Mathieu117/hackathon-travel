import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import CardDetail from "./components/CardDetail";
import Planet from "./components/Planet";
import PropositionList from "./pages/PropositionList";
import SearchBar from "./components/SearchBar";



function App() {
  return (
    <div className="App">

      <Header />
   
      <Planet />
      <PropositionList />

      {/* <Routes>
        <Route path="/proposition/:id" element={<Proposition />} />
      </Routes> */}

      <Footer />
    </div>
  );
}

export default App;
