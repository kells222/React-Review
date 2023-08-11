import SubmitForm from './components/SubmitForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [names,setNames] = useState([])

  function renderName(){
    return names.map(({FirstName, LastName}, index) => 
    <li key={index}>{FirstName}{LastName}</li>)
  }
  console.log("test",renderName())
  return (

    <div className="App">
      <SubmitForm names={names} setNames={setNames}/>
      <ul>
        {renderName()}
      </ul>
    </div>
  );
}

export default App;
