const api_url = "http://www.mapquestapi.com/geocoding/v1/address?key=IlEDkyMSMJDQAyEmElGzYuen8SCfLR0W&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500"

async function mapas (){
    const response = await fetch (api_url)
    const data = await response.json()
    console.log (data)
}
mapas ()


