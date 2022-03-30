import './App.css';
import Styles from './Components/Styles';
import style from './Components/style.module.css'
import './Components/style.css'
function App() {
  return (
    <div>
      <h1 className={style.success}>success</h1>
      <h1 className='error'>error</h1>
      <Styles />
      <h1></h1>
    </div>
  );
}

export default App;
