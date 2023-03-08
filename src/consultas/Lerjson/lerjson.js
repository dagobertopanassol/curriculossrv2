// D O C S 
//https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar

function getUser(userId) {
    const userData = fetch(`https://api.com/api/user/${userId}`)
      .then(response => response.json())
      .then(data => console.log(data.name))
      .catch(error => console.log("_______________------------error----------________________________"+ error))
      .finally( () => console.log("finally" ) )
   }
   
   getUser(1); // "Nome Sobrenome"