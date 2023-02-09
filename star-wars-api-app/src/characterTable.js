import axios from "axios"

function RequestCharacter(startingPoint = 1, complete = finalizeCharacterTable) {
    let characterTable = [];
    for (let i = 1; i <= 10; i++) {
        let tr;
        axios
            .get(`https://swapi.dev/api/people/${i}`)
            .then(response => {
                const a = response.data;
                tr = [a.name, a.birth_year, a.height, a.mass, a.homeworld, a.species[0]];
                characterTable.push(tr);
                console.log('character table is', characterTable, 'tr is', tr);
            })
            .catch(error => { console.log(`ERROR! ${error}`) })
        console.log(JSON.stringify(characterTable))
    }
    const res = setTimeout(finalizeCharacterTable, 5000)
    return res

}

const finalizeCharacterTable = function (characterTable) {
    console.log('callback ran')
    return (
        <div>Sample Text {JSON.stringify(characterTable)}</div>
    )
}

export default RequestTenCharacters