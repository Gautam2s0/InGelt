import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Preparation } from './Components/Preparation';
import { ClassCar } from './Components/ClassesCard/ClassCar';
import { Class } from './Components/ClassesCard/Class';
import { Services } from './Components/Services/Services';
import { Comment } from './Components/Comments/Comment';
import { Touch } from './Components/GetInTouch/Touch';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div style={{marginTop:"8%", maxWidth:"100%",boxSizing:"border-box"}} >
        <Preparation/>
        <Class/>
        <Services/>
        <Comment/>
        <Touch/>
        </div>
    </div>
  );
}

export default App;
