import logo from './logo.svg';
import './App.css';
import tekst from './cos.json'
const itelList = tekst.text.map((item)=> <li key={item.usluga}>{item.usluga}</li>)
function caseList() {
  return (
    <div className="App">
      <header className="App-header">
        <ol>
        {itelList}
        </ol>
      </header>
    </div>
  );
}

export default caseList;
