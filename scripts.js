//Manipulating DOM
const app = document.getElementById("root");
const logo = document.createElement("img");
logo.src = "logo.png";
const container = document.createElement("div");
container.setAttribute("class","container");
app.appendChild(logo)
app.appendChild(container)


//create a new request variable and assigning a new XMLHttpRequest object to it
var request = new XMLHttpRequest();
//Open a new connection, using the GET request on the URL endpoint
request.open("GET","https://ghibliapi.herokuapp.com/films", true);

request.onload = function(){
    //access the JSON data here
    var data = JSON.parse(this.response)

    if(request.status >= 200 && request.status < 400){
        data.forEach(movie => {
            const card = document.createElement("div");
            card.setAttribute("class", "card")
            const h1 = document.createElement("h1");
            h1.textContent = movie.title;
            const p = document.createElement("p");
            movie.description = movie.description.substring(0,300) // limited to 300 characters
            p.textContent = `${movie.description}...`
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        })
    }else {
        const errorMessage = document.createElement("marquee");
        errorMessage.textContent = `Not Working`;
        app.appendChild(errorMessage)
    }
}

//send request
request.send()