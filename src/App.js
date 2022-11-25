import "./App.css";

import Planet from "./components/Planet";


import PropositionList from "./pages/PropositionList";
import Footer from "./components/Footer";



function App() {

  return (
    <div className="App">
      <Planet />
      <PropositionList />
      <Footer />
    </div>
  );

}

export default App;
