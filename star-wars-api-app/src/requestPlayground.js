import axios from "axios"


function SwapiApiCall() {
    axios
        .get('https://swapi.dev/api/people/1')
        .then(response => {
            console.log(JSON.stringify(response.data))

        })
        .catch(error => { console.log(`ERROR! ${error}`) })
}


export default SwapiApiCall

