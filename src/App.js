import './App.css';
import CompC from './Components/CompC';
import { UserProvider } from './Components/Context';

function App() {
  return (
    <div>
      <UserProvider value={["batman","123"]}>
      <CompC />
      </UserProvider>
    </div>
  );
}

export default App;
