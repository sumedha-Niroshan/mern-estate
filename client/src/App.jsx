import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivatRoute from "./components/PrivatRoute";
import CreateListing from "./pages/CreateListing";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivatRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
