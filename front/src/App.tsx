import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Container from "./components/Container/Container.tsx";
import Login from "./container/Login/Login.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Container>
                <div>1111 Home</div>
              </Container>
            }
          />
          <Route
            path='/cabinet'
            element={
              <Container>
                <div>11111 cabinet</div>
              </Container>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route
            path='/about'
            element={
              <Container>
                <div>11111 about</div>
              </Container>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
