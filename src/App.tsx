import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {

  return (
    <Router>
      <div className={`min-vh-100 d-flex flex-column`}>
        <Container
          className="d-flex flex-column p-0 m-0"
          style={{ minHeight: "100vh", minWidth: "99.5vw", backgroundColor: "#ff6f59ff" }}
        >
          <Header/>{" "}
          <main className="flex-grow-1">
            {" "}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutme" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contactme" element={<Contact />} />
            </Routes>{" "}
          </main>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;