import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SwapiApiCall from './requestPlayground';
import RequestTenCharacters from './characterTable.js';
import background from "./starwars_background.jfif"
import CharacterSearch from './CharacterSearch';
import MyHeader from './MyHeader';
import SearchResultsPageNavBar from './SearchResultsPageNavBar.js'


function App() {
  console.log('app ran')
  return (
    <div style={{ marginTop: '150px' }}>

      <MyHeader />
      <CharacterSearch />
      <RequestTenCharacters />
      <SearchResultsPageNavBar />

    </div>
  );
}



export default App;
