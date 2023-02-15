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
                return tr
            })
            .then(tr => {
                const homeworld = axios.get(`${tr[4]}`);
                const species = axios.get(`${tr[5]}`);
                console.log([tr, homeworld, species.name])
                return [tr, homeworld, species]
            })
            .then(tr => {

                tr[0][4] = tr[1];
                tr[0][5] = tr[2];
                // console.log('Then Statement 3: table row  is', tr);
            })

            .catch(error => { console.log(`ERROR! ${error}`) })
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


function RequestTenCharacters() {
    RequestCharacter()
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




function getJSON(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('CUSTOM ERROR - JSON/API Request failed')
            };
            return response.json()
        })
        .then(response => {
            console.log(response);
            return response
        })
        .catch(error => { console.log(`ERROR! ${error}`) })
}

//TEST ENVIRONMENT GETTING SINGLE CHARACTER

function getCharacter() {
    let characterProfile = []

    getJSON('https://swapi.dev/api/people/2/')
        .then((profile) => {
            console.log(profile)
            characterProfile = [profile.name, profile.birth_year, profile.height, profile.mass];

            getJSON(profile.homeworld)
                .then((homeworld) => {
                    console.log(profile.name, ' has a homeworld of ', homeworld.name)
                    characterProfile[4] = homeworld.name
                    getJSON(profile.species)
                        .then((homeworld) => {
                            console.log(profile.name, ' has a species of ', species.name)
                            characterProfile[5] = species.name
                            console.log('final profile is', characterProfile)

                        })

                })
        })

}

getCharacter()
