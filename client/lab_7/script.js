/* Document example */
// document.addEventListener('click', (event) => {
//   console.log('click registered', event.target);
// });

async function fetchRequest(url) {
    try {
    const request = await fetch(url);
    const json = await request.json();
    console.table(json);
    return json;
}   catch(err)
 { console.error(err);
    return err;
}}

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

async function mainThread() {
    console.log('loaded main script');
    const url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const inputBox = document.querySelector('#Zipcode');
    const target = document.querySelector('.suggestions');

    // Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>

    /* Actually linked script example */
    const targetElement = document.querySelector('.click_demo');
    // targetElement.addEventListener('click', (event) => runMeOnClickEvent(event));

    const data = await fetchRequest(url);
    console.log('external dataset', data);

    inputBox.addEventListener('change', (event) => {
        display(event, data);
        
        });

    inputBox.addEventListener('keyup', (event) => {
        display(event, data);
        
        });

    


    function findMatches(wordToMatch, cities) {
        return cities.filter(place => {
            const regex = new RegExp(wordToMatch, 'gi');
            return place.name.match(regex) || place.category.match(regex) ||
            place.city.match(regex) || place.zip.match(regex) || place.address_line_1.match(regex)
        })
    }

    function display(event, data) {
        const matchArray = findMatches(event.target.value, data);
        console.log(matchArray)
        const html = matchArray.map(place => {
           return `
            <li>
                <span class="name">${place.name}</span><br>

                <span class="name">${place.category}</span><br>
            
                <span class="name">${place.city}</span><br>
            
                <span class="name">${place.zip}</span><br>

                <span class="name">${place.address_line_1}</span><br>
            </li>
        `})
        target.innerHTML = html
    }
};
window.onload = mainThread;

var marker = L.marker([51.5, -0.09]).addTo(mymap);


// const fetchElement = document.querySelector('.fetch');
//     fetchElement.addEventListener('click', async (event) => {
//         console.log('dataset size from county', data.length);
//         console.log('displaySet contents', dataset.length);
//     });