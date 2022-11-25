import "./App.css";
import Header from "./components/Header"
import Footer from "./components/Footer";
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

      {/* <Routes>
        <Route path="/proposition/:id" element={<Proposition />} />
      </Routes> */}
<Footer/>
    </div>
  );

}

export default App;
