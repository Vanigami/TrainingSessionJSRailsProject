const BACKEND_URL = 'localhost:3000';
fetch(`${BACKEND_URL}/test`)
    .then(response => response.json())
    .then(parsedResponse => console.log(parsedResponse));

console.log("testing...")

const app = new App()