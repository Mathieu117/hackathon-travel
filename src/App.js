import "./App.css";
// import { Routes, Route } from "react-router-dom";
import PropositionList from "./Pages/PropositionList";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <PropositionList />

      {/* <Routes>
        <Route path="/proposition/:id" element={<Proposition />} /> */}
      {/* </Routes> */} 
      <Footer />
    </div>
  );
}

export default App;
