import "./App.css";
import PropositionList from "./pages/PropositionList";
import Header from "./components/Header";
import Planet from "./components/Planet";



function App() {

  return (
    <div className="App">
      <Header/>
      <Planet/>
      <PropositionList/>
    </div>
  );

}

export default App;
