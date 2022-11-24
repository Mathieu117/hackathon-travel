import "./App.css";
<<<<<<<<< Temporary merge branch 1

import { Routes, Route } from "react-router-dom";
import PropositionList from "./pages/PropositionList";


>>>>>>>>> Temporary merge branch 2

function App() {

  return (
    <div className="App">
<<<<<<<<< Temporary merge branch 1
      <PropositionList />

      {/* <Routes>
        <Route path="/proposition/:id" element={<Proposition />} />
      </Routes> */}
=========
      <Header />
      <Planet />
      <Proposition />
>>>>>>>>> Temporary merge branch 2
    </div>
  );

}

export default App;
