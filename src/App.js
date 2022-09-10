import './App.css';
import Header from './components/Header';
import AboutMe from './pages/about-me/AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
      </main>
    </div>
  );
}

export default App;
