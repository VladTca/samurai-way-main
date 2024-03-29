import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
            {/*<Route path="/news" element={<News />} />*/}
            {/*<Route path="/music" element={<Music />} />*/}
            {/*<Route path="/settings" element={<Settings />} />*/}
            {/*<Dialogs />*/}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
