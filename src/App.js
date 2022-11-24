import logo from './logo.png';
import './App.css';
import CaseForm from './CaseForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>System zgłoszeń</h1>
        <CaseForm/>
      </header>
    </div>
  );
}

export default App;
