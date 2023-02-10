import axios from "axios"








// function RequestCharacter(startingPoint = 1, complete = finalizeCharacterTable) {
//     let characterTable = [];
//     for (let i = 1; i <= 10; i++) {
//         let tr;
//         axios
//             .get(`https://swapi.dev/api/people/${i}`)
//             .then(response => {
//                 const a = response.data;
//                 tr = [a.name, a.birth_year, a.height, a.mass, a.homeworld, a.species[0]];
//                 characterTable.push(tr);
//                 console.log('character table is', characterTable, 'tr is', tr);
//             })
//             .catch(error => { console.log(`ERROR! ${error}`) })
//         console.log(JSON.stringify(characterTable))
//     }
//     const res = setTimeout(finalizeCharacterTable, 5000)
//     return res

// }

// const finalizeCharacterTable = function (characterTable) {
//     console.log('callback ran')
//     return (
//         <div>Sample Text {JSON.stringify(characterTable)}</div>
//     )
// }


function RequestTenCharacters() {
    const character = ['Charles Brinkman', '08/09/1987', '5-11', '190', 'Earth', 'Human?']
    const tableRow = (
        <tr>
            <th scope='row'>{character[0]}</th>
            <td>{character[1]}</td>
            <td>{character[2]}</td>
            <td>{character[3]} </td>
            <td>{character[4]}</td>
            <td>{character[5]}</td>
        </tr>
    )

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
            <tbody>
                {tableRow}{tableRow}{tableRow}{tableRow}{tableRow}{tableRow}{tableRow}{tableRow}{tableRow}{tableRow}
            </tbody>
        </table>
    )
    return characterTable
}

export default RequestTenCharacters