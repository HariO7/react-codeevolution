
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/welcome';
import Hello from './Components/Hello';
function App() {
  return (
    <div>
      <Greet name='Bruce' hero = 'Batman'>
        <p>I am Batman</p>
      </Greet>
      <Greet name='Clark' hero = 'superman'/>
      <Greet name='Diana' hero = 'wonder women'/>
      <Welcome name='Bruce' />
      <Welcome name='Clark'>
        <p>I am the death of batman</p>
      </Welcome>
      <Welcome name='Diana' />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
