var request = new XMLHttpRequest()
var url_string = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3efd2ed5f377b802a22794e61c47d194';
// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true)
request.send();
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);
}
