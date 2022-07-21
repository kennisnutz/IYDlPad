
import  Main  from './components/Main';
import './App.css';
import Sidebar from './components/Sidebar';
import Right from './components/Right';





function App() {
     
  return (
    <div className="container">
     <Sidebar/>
        {/*  <!---------------------------END OF MENU SECTION------------------> */}
        <Main/>
        {/* <!------------End of MAIN section--------------> */}
        <Right/>       
    </div>
  );
}

export default App;
