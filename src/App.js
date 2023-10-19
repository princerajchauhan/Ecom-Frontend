import './App.css';
// import { ContextProvider } from './Context/ContextData';
import Routing from './Routing/Routing';

function App() {
  return (
    <div className="App">
      {/* <ContextProvider > */}
        <Routing />
      {/* </ContextProvider> */}
    </div>
  );
}

export default App;
