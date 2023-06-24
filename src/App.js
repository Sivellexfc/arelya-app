import logo from './logo.svg';
import './App.css';
import DropdownNavbar from './components/DropdownNavbar';
import TopFooter from './components/TopFooter';
import Slider from './components/Slider';
import AboutArea from './components/AboutArea';

function App() {
  return (
    <div>
        <TopFooter></TopFooter>
        <DropdownNavbar></DropdownNavbar>
        <Slider></Slider>
        <AboutArea></AboutArea>
    </div>
    
  );
}

export default App;
