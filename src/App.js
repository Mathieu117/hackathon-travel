import "./App.css";
import Header from "./components/Header";
import Planet from "./components/Planet";
import { Routes, Route } from "react-router-dom";
import PropositionList from "./pages/PropositionList";


function App() {

  return (
    <div className="App">

      <Header />
      <Planet />
      

      <PropositionList />

      {/* <Routes>
        <Route path="/proposition/:id" element={<Proposition />} />
      </Routes> */}

    </div>
  );

}

export default App;
