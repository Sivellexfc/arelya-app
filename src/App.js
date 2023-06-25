import logo from './logo.svg';
import './App.css';
import DropdownNavbar from './components/DropdownNavbar';
import TopFooter from './components/TopFooter';
import Slider from './components/Slider';
import AboutArea from './components/AboutArea';
import LastProjects from './components/LastProjects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <TopFooter></TopFooter>
        <DropdownNavbar></DropdownNavbar>
        <Slider></Slider>
        <LastProjects></LastProjects>
        <AboutArea></AboutArea>
        <Footer></Footer>
    </div>
    
  );
}

export default App;
