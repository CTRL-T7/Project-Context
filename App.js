import React,{ useState} from 'react';
import FunctionContextComponent from './FunctionContxtComponent'
import './App.css';



export const ThemeContext = React.createContext()
function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme(){
   setDarkTheme( prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
    <ThemeContext.Provider value= {darkTheme}>
      <button style={{color:'#fff', background:'#000', margin:'50px', height:'40px', border: 'none'}}onClick={toggleTheme} >Toggle Theme</button>
      <FunctionContextComponent/>
    </ThemeContext.Provider> 
    </>
  );
}

export default App ;
