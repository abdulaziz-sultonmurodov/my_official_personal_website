import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Header />
        <HomePage />
        <Footer />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
