import { Container } from "react-bootstrap";
import Home from "./components/page/Home/Home";
import NavBar from "./components/view/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/*' element={ <h1>Page Not Found 404</h1> } />
      </Routes>
    </Container>
  );
}

export default App;
