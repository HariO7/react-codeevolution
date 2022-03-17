import Message from './Components/message';
import './App.css';
import Count from './Components/Count';
import Greet from './Components/Greet';
import Welcome from './Components/welcome';
import FunctionClick from './Components/functionClick';
import ClassClicked from './Components/classClicked';
import ClickBinding from './Components/ClickBinding';
function App() {
  return (
    <div>
      {/* <Greet name='Bruce' hero='Batman' />
      <Welcome name="micheal" hero= "jackson" /> */}
      {/* <FunctionClick />
      <ClassClicked /> */}
      <ClickBinding />

    </div>
  );
}

export default App;
