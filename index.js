const fetch = require("node-fetch");

fetch('https://swapi.dev/api/people/1')
    .then(res=>res.json())
    .then(person=>{
        console.log(person);
    });

