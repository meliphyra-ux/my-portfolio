import "./App.css";
import Header from "./components/Header";
import AboutMe from "./pages/about-me/AboutMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContacts from "./pages/my-contacts/MyContacts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/my-contacts" element={<MyContacts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
