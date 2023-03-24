import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store";

import IndexPage from "./pages/IndexPage";
import LoginPage from "./auth/LoginPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./auth/RegisterPage";
import './firebase';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div style={{ padding: 10 }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/items" element={<IndexPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
