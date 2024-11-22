import { useEffect, useState } from "react"
import GeoButton from "./GeoButton"

console.log(import.meta.env.VITE_API_KEY)

const WetterData = () => {
    const [geo, setGeo] = useState([0,0])
    const [data, setData]= useState([])

    const apiKey = import.meta.env.VITE_API_KEY;
    
    // WetterData.jsx:8 Uncaught TypeError: Cannot read properties of undefined (reading '0')
    /* let weatherIconCode = data.weather.[0].icon   */


    // prüfen, ob data.weather definiert ist, bevor auf seine Eigenschaften zugegriffen wird. Dadurch wird weatherIconCode auf undefiniert gesetzt, wenn entweder data.weather oder data.weather[0] undefiniert ist, wodurch der Fehler vermieden wird.
    let weatherIconCode = data.weather?.[0]?.icon  
    
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geo[0]}&lon=${geo[1]}&appid=${apiKey}&units=Metric`)
        .then(res => res.json())
        .then(data => setData(data))
        
    },[geo])

    return(
        <section>
            <article className="btnSection">
                <GeoButton ort='Hamburg' long='53.5536424' lang='9.9595822' setGeo={setGeo} />
                <GeoButton ort='Berlin' long='52.5195422' lang='13.3981549' setGeo={setGeo}/>
                <GeoButton ort='Köln' long='50.9578353' lang='6.8272402' setGeo={setGeo}/>
                <GeoButton ort='Australien' long='-33.847927' lang='150.6517938' setGeo={setGeo}/>
            </article>

            <article>{data.weather && // react conditional rendering // inline if
                <p>{data.weather[0].description} in {data.name} </p>    
            }</article>
            <img src={`http://openweathermap.org/img/wn/${weatherIconCode}@2x.png`} alt="current weather" /> 
            {/* <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} </img> */}
            <article><p>Aktuell: {data?.main?.temp}°C</p></article>
            <article><p>Windgeschwindigkeit: {data?.wind?.speed} m/std</p></article>

        </section>
    )
}

export default WetterData