import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>

  </React.StrictMode>
)
document.body.style.backgroundColor = 'grey'




let firstCharacterIndexNumber = 1

setTimeout(() => { CharacterSearchInput(), addEventListenertoPageButtons() }, 30)

function CharacterSearchInput() {
  const characterInputField = document.getElementById('characterinput')
  const characterSearchButton = document.getElementById('characterSearchButton')
  characterSearchButton.addEventListener('click', () => {
    const characterInput = characterInputField.value
    console.log(characterInput)
    characterInputField.value = ''
  })
}

function addEventListenertoPageButtons() {
  const pages = document.getElementById('SearchResultsPageNavBar').childNodes
  console.log(pages)
  pages.forEach(child => child.addEventListener('click', () => {
    firstCharacterIndexNumber = Number(String(Number(child.textContent) - 1) + 1);
    console.log(`Go to page ${firstCharacterIndexNumber}`);
    document.getElementById('tbody').innerHTML = ''
    RequestTenCharacters(firstCharacterIndexNumber)
  }))

}


function getJSON(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('CUSTOM ERROR - JSON/API Request failed')
      };
      return response.json()
    })
    .then(response => {
      // console.log(response);
      return response
    })
    .catch(error => { console.log(`ERROR! ${error}`) })
}


function getCharacter(url) {
  let characterProfile = []

  getJSON(url)
    .then((profile) => {
      characterProfile = [profile.name, profile.birth_year, profile.height, profile.mass];

      getJSON(profile.homeworld)
        .then((homeworld) => {
          characterProfile[4] = homeworld.name

          if (profile.species[0]) {
            getJSON(profile.species)
              .then((species) => {
                if (!species) {
                  characterProfile[5] = 'unknown'
                  console.log('final DROID profile is', characterProfile)

                  return characterProfile
                }

                characterProfile[5] = species.name
                console.log('final profile is', characterProfile)
                addTableRow(characterProfile)

              })
          }
          else {
            characterProfile[5] = 'unknown'
            console.log('final HUMAN profile is', characterProfile)
            addTableRow(characterProfile)
            return characterProfile
          }

        })
    })

}

const addTableRow = function (characterArray) {
  const tableBody = document.getElementById('tbody')
  const tableRow = `
      <tr>
          <th scope='row'>${characterArray[0]}</th>
          <td>${characterArray[1]}</td>
          <td>${characterArray[2]}</td>
          <td>${characterArray[3]} </td>
          <td>${characterArray[4]}</td>
          <td>${characterArray[5]}</td>
      </tr>
  `
  console.log('tablerow is', tableRow)

  if (!tableBody) {
    tableBody.innerHTML = tableRow
  }
  else {
    tableBody.insertAdjacentHTML('beforeend', tableRow)
  }

}


const RequestTenCharacters = function (startingindex) {
  // document.getElementById('tbody').innerHTML;
  for (let i = startingindex; i < startingindex + 10; i++) {
    getCharacter(`https://swapi.dev/api/people/${i}/`)
  }
}

RequestTenCharacters(1)








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
