let requestEat = new XMLHttpRequest();
requestEat.responseType = 'json';
let url = `http://api.giphy.com/v1/gifs/7oUdj7cAkXVfi?api_key=${process.env.API_KEY}`;

requestEat.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    return requestEat.response;
  } else {
    console.log("Did not respond!");
  }
}

requestEat.open("GET", url, true);
requestEat.send();

export { requestEat };
