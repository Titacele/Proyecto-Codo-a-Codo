const api_url = "https://api.geoconcept.com/EU/GCW/geoconcept-web/wmts/STANDARD/STANDARD/epsg:3857/11/707/1036.png"

async function mapas (){
    const response = await fetch (api_url)
    const data = await response.json()
    console.log (data)
}
mapas ()


