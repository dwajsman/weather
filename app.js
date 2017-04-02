
const form = document.getElementById('weather')
const btn = document.getElementById("btnGetWeather")
const strCity = document.getElementById("city")
const strProv = document.getElementById("prov")
const url = 'http://api.wunderground.com/api/9b8c51aec8c58c9e/conditions/q/'

btn.addEventListener('click', (e) => {
	e.preventDefault()
	teste(strCity.value, strProv.value)
})

function teste(city, province) {
	
	console.log(`${url}${province}/${city}.json`)
	fetch(`${url}${province}/${city}.json`)
			.then((resp) => resp.json())
			.then(function(data) {
			let weatherResults = data.current_observation
			let p = createNode('p')
			p.textContent = `${weatherResults.temp_c}`+`ºC  |  `+`${weatherResults.temp_f}`+`ºF`
			let display =  document.getElementById('display');
			display.innerHTML = '';
			display.appendChild(p);
			


			let img = document.createElement('img');
			img.src = `${weatherResults.icon_url}`;
			img.alt = 'image';
			display.appendChild(img);
	})
	.catch(function(error) {
    	console.log(error)
	})
}

function createNode(element) {
      return document.createElement(element)
  }