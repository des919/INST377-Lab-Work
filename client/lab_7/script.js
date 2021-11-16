/* Document example */
// document.addEventListener('click', (event) => {
//   console.log('click registered', event.target);
// });

async function fetchRequest(url) {
    try {
    const request = await fetch(url);
    const json = await request.json();
    return json;
}   catch(err)
 { console.error(err);
    return err;
}}

async function mainThread() {
    console.log('loaded main script');
    const url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const inputBox = document.querySelector('#Zipcode');
    const target = document.querySelector('.suggestions');
    const mymap = L.map('map').setView([38.989, -76.93], 10);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibHZkMzItIiwiYSI6ImNrdzE1YWVreDAwMDIydW5oeDBzajIxMHIifQ.ApBFhzz56jgEImI_wGU83Q'
    }).addTo(mymap);

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

    function findMatches(wordToMatch, mymap, cities) {
        mymap.eachLayer((layer) => {
    if (layer._latlng !== undefined) { layer.remove(); }
  //   mymap.setView([0,0],0)
  });
        console.log(wordToMatch)
        const filterList = cities.filter(place => {
            const zipcode = wordToMatch
            return place.zip === zipcode
        })
        return filterList
    }

    function display(event, data) {
        const matchArray = findMatches(event.target.value, mymap, data);
        const newList = matchArray.slice(0,5)
        console.log(newList)
        newList.forEach((item)=>{
            const point = item.geocoded_column_1
            const coords = point.coordinates.reverse()
            L.marker(coords).addTo(mymap)
        })
        const html = newList.map(place => {
           return `
            <li>
                <span class="name">${place.name}</span><br>
                <span class="name">${place.address_line_1}</span><br>
            </li>
        `})
        target.innerHTML = html
    }
};
window.onload = mainThread;

// var marker = L.marker([51.5, -0.09]).addTo(mymap);


// const fetchElement = document.querySelector('.fetch');
//     fetchElement.addEventListener('click', async (event) => {
//         console.log('dataset size from county', data.length);
//         console.log('displaySet contents', dataset.length);
//     });