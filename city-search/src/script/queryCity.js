export function reformatCityName(cityName){
    return cityName.replace(/ /g,'').toUpperCase()
}

export default async function queryCity(cityName, setData){
    const res = await fetch("http://ctp-zip-api.herokuapp.com/city/" + reformatCityName(cityName))
        .then(res => {
            if(res.status == '404'){
                alert("city name not valid")
            }
            return res
        })
        .then(res => res.json())
        .then((result) => {
            setData(result)
            return result
        }).catch((error) => {
            console.log(error)
            return []
        })
}