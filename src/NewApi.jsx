import React from 'react'
import axios from "axios";

function NewApi() {


    const options = {
      method: 'GET',
      url: 'https://api-football-beta.p.rapidapi.com/timezone',
      headers: {
        'X-RapidAPI-Key': '34a63c1412msh44095f4e4cb11e7p17e1eejsnb7d83b458d35',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });






  return (
    <div>NewApi</div>
  )
}

export default NewApi