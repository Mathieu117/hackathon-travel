import "./App.css";
import Homepage from "./components/Homepage";
import CardDetail from "./components/CardDetail";
import { Routes, Route } from "react-router-dom";
import PropositionList from "./pages/PropositionList";

function App() {
  return (
    <div className="App">
      <PropositionList />
      {/* <Routes>
        <Route path="/proposition/:id" element={<Proposition />} />
      </Routes> */}
    </div>
  );
}

export default App;
