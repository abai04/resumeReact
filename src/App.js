import Block1 from "./components/Block1/Block1";
import './App.css'
import Block2 from "./components/Block2/Block2";
import Block3 from "./components/Block3/Block3";
import Contacts from "./components/Contacts/Contacts";
function App() {
  return (
    <div className="App">
      <div class = 'container'>
      <Block1/>
      <Block2/>
      <Block3/>
      <Contacts/>
      </div>
    </div>
  );
}

export default App;
