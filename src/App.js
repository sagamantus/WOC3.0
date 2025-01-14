import './App.css';
import NavBar from './components/navBar/navBar.js';
import Timeline from './components/timeline/timeline';
import About from './components/about/about.js';
import Organisations from './components/organisations/organisations';
import background from './assets/background.jpg';
import Sponsor from './components/sponsors/sponsor.js';
import Footer from './components/footer/footer';
import Faq from './components/faq/faq';

function App() {
  return (
    <div className="App">
        <img className="background" src={background} alt="background"></img>
        <NavBar />
        <About />
        <Timeline />
        <Organisations />
        <Sponsor/>
        <Faq />
        <Footer />
    </div>
  );
}
export default App;