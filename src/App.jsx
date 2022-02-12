import { Navbar, Home, Footer, Transactions } from "./components";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Weapons from "./pages/Weapons";
import Store from "./pages/Store"
import ForSale from "./pages/ForSale";

const App = () => (
  <Router>
    <div className="min-h-screen">
      <div className="gradient-bg-services">
        <Navbar />
      </div>
      <div className="gradient-bg-welcome">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/transactions" element={<Transactions/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/forsale" element={<ForSale/>}/>
        <Route path="/weapons" element={<Weapons/>}/>
        </Routes>
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
