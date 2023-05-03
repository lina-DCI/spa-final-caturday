

import './App.css'
import { CatAppProvider } from './context/CatContext'
import Homepage from './pages/Homepage';

function App() {


  return (
 
    <CatAppProvider>
   
      <h1>Test Caturday</h1>
      <Homepage/>
      
      </CatAppProvider>
  
  )
}

export default App
