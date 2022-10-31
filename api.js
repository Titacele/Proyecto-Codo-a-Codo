const api_url = 'https://get.geojs.io/v1/ip/geo.json';

   async function obtenerPosicion(){
        const response = await fetch(api_url);
        const data =  await response.json();
        const {latitude, longitude, city} = data;

        //console.log(data);
        
        document.getElementById('lat').textContent=latitude;
        document.getElementById('lon').textContent=longitude;
        document.getElementById('cit').textContent=city;
    }

    obtenerPosicion();