window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterthendo.azurewebsites.net/api/GetResumeCounterThendo?code=n8IT4sENHl3vt-mfU5pQSoMaZ3auAnV6phESEWUb9cLmAzFujQUEXA%3D%3D';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounterThendo';


const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error) {
        console.log(error);
    });
    return count;
}