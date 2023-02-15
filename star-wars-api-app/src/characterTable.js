import axios from "axios"

const CharacterTable = function () {
    const characterTable = (
        <table className="table">
            <thead>
                <tr>
                    <th scope='col'>NAME</th>
                    <th scope='col'>BIRTH DATE</th>
                    <th scope='col'>HEIGHT</th>
                    <th scope='col'>MASS</th>
                    <th scope='col'>HOMEWORLD</th>
                    <th scope='col'>SPECIES</th>
                </tr>
            </thead>
            <tbody id='tbody'>

            </tbody>
        </table>
    )

    return characterTable
}



export default CharacterTable





// function getJSON(url) {
//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('CUSTOM ERROR - JSON/API Request failed')
//             };
//             return response.json()
//         })
//         .then(response => {
//             // console.log(response);
//             return response
//         })
//         .catch(error => { console.log(`ERROR! ${error}`) })
// }


// function getCharacter(url) {
//     let characterProfile = []

//     getJSON(url)
//         .then((profile) => {
//             characterProfile = [profile.name, profile.birth_year, profile.height, profile.mass];

//             getJSON(profile.homeworld)
//                 .then((homeworld) => {
//                     characterProfile[4] = homeworld.name

//                     if (profile.species[0]) {
//                         getJSON(profile.species)
//                             .then((species) => {
//                                 if (!species) {
//                                     characterProfile[5] = 'unknown'
//                                     console.log('final DROID profile is', characterProfile)

//                                     return characterProfile
//                                 }

//                                 characterProfile[5] = species.name
//                                 console.log('final profile is', characterProfile)
//                                 addTableRow(characterProfile)

//                             })
//                     }
//                     else {
//                         characterProfile[5] = 'unknown'
//                         console.log('final HUMAN profile is', characterProfile)
//                         addTableRow(characterProfile)
//                         return characterProfile
//                     }

//                 })
//         })

// }

// const addTableRow = function (characterArray) {
//     const tableRow = `
//         <tr>
//             <th scope='row'>${characterArray[0]}</th>
//             <td>${characterArray[1]}</td>
//             <td>${characterArray[2]}</td>
//             <td>${characterArray[3]} </td>
//             <td>${characterArray[4]}</td>
//             <td>${characterArray[5]}</td>
//         </tr>
//     `
//     console.log('tablerow is', tableRow)
//     document.getElementById('tbody').insertAdjacentHTML('beforeend', tableRow)
// }


// const RequestTenCharacters = function (startingindex) {
//     for (let i = startingindex; i < startingindex + 10; i++) {
//         getCharacter(`https://swapi.dev/api/people/${i}/`)
//     }
// }

// RequestTenCharacters()