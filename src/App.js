import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

const MyContacts = React.lazy(()=> import("./pages/my-contacts/MyContacts"));
const AboutMe = React.lazy(()=>import("./pages/about-me/AboutMe"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <React.Suspense fallback={<>Loading</>}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/my-contacts" element={<MyContacts />} />
          </Routes>
          </React.Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
