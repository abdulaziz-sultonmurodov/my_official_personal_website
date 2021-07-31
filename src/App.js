import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CoursesPage from "./pages/CoursesPage";
import PersonalOne from "./pages/projects/personal/PersonalOne";
import PersonalTwo from "./pages/projects/personal/PersonalTwo";
import PersonalThree from "./pages/projects/personal/PersonalThree";
import PersonalFour from "./pages/projects/personal/PersonalFour";
import EducationOne from "./pages/projects/education/EducationOne";
import EcommerceOne from "./pages/projects/ecommerce/EcommerceOne";
import WebApplicationOne from "./pages/projects/webapplications/WebApplicationOne";
import WebApplicationTwo from "./pages/projects/webapplications/WebApplicationTwo";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/personal-websites-1" component={PersonalOne} />
        <Route path="/personal-websites-2" component={PersonalTwo} />
        <Route path="/personal-websites-3" component={PersonalThree} />
        <Route path="/personal-websites-4" component={PersonalFour} />
        <Route path="/education-websites-1" component={EducationOne} />
        <Route path="/ecommerce-websites-1" component={EcommerceOne} />
        <Route path="/webapplication-1" component={WebApplicationOne} />
        <Route path="/webapplication-2" component={WebApplicationTwo} />
      </ScrollToTop>
    </Router>
  );
}

export default App;
