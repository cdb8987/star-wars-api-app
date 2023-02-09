import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SwapiApiCall from './requestPlayground';
import RequestTenCharacters from './characterTable.js';


function App() {
  console.log('app ran')
  return (
    < RequestTenCharacters />
  );
}



export default App;
