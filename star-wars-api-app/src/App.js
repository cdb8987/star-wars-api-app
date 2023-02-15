import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SwapiApiCall from './requestPlayground';
import background from "./starwars_background.jfif"
import CharacterSearch from './CharacterSearch';
import MyHeader from './MyHeader';
import SearchResultsPageNavBar from './SearchResultsPageNavBar.js'
import CharacterTable from './characterTable.js';


function App() {
  console.log('app ran')
  return (
    <div style={{ marginTop: '150px' }}>

      <MyHeader />
      <CharacterSearch />
      <CharacterTable />
      <SearchResultsPageNavBar />

    </div>
  );
}



export default App;
