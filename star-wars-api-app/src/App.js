import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SwapiApiCall from './requestPlayground';
import RequestTenCharacters from './characterTable.js';
import background from "./starwars_background.jfif"
import CharacterSearch from './CharacterSearch';
import MyHeader from './MyHeader';


function App() {
  console.log('app ran')
  return (
    <div style={{ marginTop: '150px' }}>

      <MyHeader />
      <CharacterSearch />
      <RequestTenCharacters />

    </div>
  );
}



export default App;
