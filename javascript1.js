let generateMsg = () => {
    event.preventDefault();
    let message = document.getElementById("msg");

    let urlAddress = "http://api.quotable.io/random";
    
    fetch(urlAddress)
    .then((response) => response.json())
    .then((data) => message.innerHTML = data.content +" by "+data.author)
    .catch((error) => message.innerHTML = error.message)


}
