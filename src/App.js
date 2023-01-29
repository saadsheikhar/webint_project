import React, { useState } from "react";
import Navbar from "./components/modules/Navbar";
import { Routes, Route } from "react-router-dom";

import NotFound404 from "./components/views/NotFound404";

import LoginRegister from "./components/views/LoginRegister";
import UserProfile from "./components/views/UserProfile";
import Footer from "./components/modules/footer";
import Custom from "./components/views/Custom.jsx";
import Help from "./components/views/Help";
import Form from "./components/views/Form";
import Result from "./components/views/Result";

function App() {
  const [basicOpen, setBasicOpen] = useState(true);

  return (
    <>
      <header>
        <Navbar updateSidenav={setBasicOpen} sidenavState={basicOpen} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Custom />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/login-register" element={<LoginRegister />} />
          <Route path="/*" element={<NotFound404 />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/help" element={<Help />} />
          <Route path="/form" element={<Form />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default App;
