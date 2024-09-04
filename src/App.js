import HomePage from "./HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import FoooterForMe from "./FoooterForMe";
function App() {
  return (
    <div className="App" style={{ marginTop: "-18px" }}>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<HomePage />} />
        </Routes>
      </HashRouter>
      <FoooterForMe />
    </div>
  );
}

export default App;
