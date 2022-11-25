import "./App.css";
// import { Routes, Route } from "react-router-dom";
import PropositionList from "./Pages/PropositionList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Planet from "./components/Planet";
import { Routes, Route } from "react-router-dom";
import PropositionList from "./pages/PropositionList";



function App() {
  return (
    <div className="App">

      <Header />
      <NewHeader/>
      <Planet />
      <PropositionList />

      {/* <Routes>
        <Route path="/proposition/:id" element={<Proposition />} />
      </Routes> */}

>>>>>>>>> Temporary merge branch 2
    </div>
  );
}

export default App;
