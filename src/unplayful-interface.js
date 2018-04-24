let requestUnplayful = new XMLHttpRequest();
requestUnplayful.responseType = 'json';
let url = `http://api.giphy.com/v1/gifs/qYcKovVHt3eE?api_key=${process.env.API_KEY}`;

requestUnplayful.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    return requestUnplayful.response;
  } else {
    console.log("Did not respond!");
  }
}

requestUnplayful.open("GET", url, true);
requestUnplayful.send();

export { requestUnplayful };
