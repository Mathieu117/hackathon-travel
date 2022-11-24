import "./App.css";
// import { Routes, Route } from "react-router-dom";
import PropositionList from "./Pages/PropositionList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Planet from "./components/Planet";



function App() {

  return (
    <div className="App">
      <Header />
      <Planet />
      <PropositionList />

      {/* <Routes>
        <Route path="/proposition/:id" element={<Proposition />} /> */}
      {/* </Routes> */} 
      <Footer />
    </div>
  );

}

export default App;
