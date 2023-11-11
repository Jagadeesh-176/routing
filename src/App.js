import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import ContactUs from "./components/LoginForm";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/">
        <Home />
        <Outlet />
      </Route>
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
