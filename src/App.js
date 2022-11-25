import "./App.css";
import Header from "./components/Header"
import Planet from "./components/Planet"
import PropositionList from "./pages/PropositionList";



function App() {

  return (
    <div className="App">

      <Header />
      <Planet />
      <PropositionList />

    </div>
  );

}

export default App;
