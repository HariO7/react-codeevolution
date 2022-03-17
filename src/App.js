import Message from './Components/message';
import './App.css';
import Count from './Components/Count';
import Greet from './Components/Greet';
import Welcome from './Components/welcome';
function App() {
  return (
    <div>
      <Greet name='Bruce' hero='Batman' />
      <Welcome name="micheal" hero= "jackson" />
    </div>
  );
}

export default App;
