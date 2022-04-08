import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';
import Hero from './Components/Hero';


function App() {
  return (
    <div>
      <ErrorBoundary >
    <Hero heroName= "Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
    <Hero heroName= 'superman' />  
      </ErrorBoundary>
      <ErrorBoundary>
    <Hero heroName= 'joker' />  
      </ErrorBoundary>
    </div>
  );
}

export default App;
