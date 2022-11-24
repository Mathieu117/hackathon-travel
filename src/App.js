import "./App.css";
import Header from "./components/Header"
import NewHeader from "./components/NewHeader";
import Planet from "./components/Planet"
import PropositionList from "./pages/PropositionList";



function App() {

  return (
    <div className="App">

      <Header />
      <NewHeader/>
      <Planet />
      <PropositionList />

    </div>
  );

}

export default App;
