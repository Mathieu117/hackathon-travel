import "./App.css";

import Header from "./components/Header";
// import NewHeader from "./components/NewHeader";
import Homepage from "./components/Homepage";
import CardDetail from "./components/CardDetail";
import Planet from "./components/Planet";
import PropositionList from "./pages/PropositionList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <NewHeader /> */}
      <Planet />
      <PropositionList />

      {/* <Routes>
        <Route path="/proposition/:id" element={<Proposition />} />
      </Routes> */}
    </div>
  );
}

export default App;
