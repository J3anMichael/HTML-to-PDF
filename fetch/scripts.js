fetch(`https://viacep.com.br/ws/80250210/json/`).then(response => {
   return response.json();
}).then(body => {
    // return document.getElementById("span").innerHTML = body.CAM
    console.log(body)
})

//https://viacep.com.br/ws/80250210/json/