import Layout from "./Components/Layout";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import routes from "./routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/common.css";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              );
            })}
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
