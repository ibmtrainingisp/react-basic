import logo from './logo.svg';
import './App.css';
import Footercom from './Footercom';

function App() {
  return (
    <div>
      <h3>Indhu</h3>
      <p>This is a paragraph.....</p>
      <ol>
        <li>Germany</li>
        <li>Andaman</li>
        <li>Maldives</li>
      </ol> 
      <input type="checkbox" value="1"></input><label>1</label><br></br>
      <input type="checkbox" value="2"></input><label>2</label><br></br>
      <input type="checkbox" value="3"></input><label>3</label><br></br>
      <h3>This is a book</h3>
        <img alt="not available" src="https://images-na.ssl-images-amazon.com/images/I/916xd9oJssL.jpg" width="100" height="100"></img>
    <Footercom></Footercom>
    </div>
  );
}

export default App;
