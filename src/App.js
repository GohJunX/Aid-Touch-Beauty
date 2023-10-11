import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Slider from './slider';
import Footer from './footer';


 function App() {
  return (
    <div>
      <header>
      <NavBar/>
      </header>
      <section>
      <Slider />
      </section>
      <Footer />
    </div>
  )
}

export default App;
