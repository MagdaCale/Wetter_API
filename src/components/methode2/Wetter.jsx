
import { useEffect, useState } from "react"
import Weather from "./Weather"

console.log(import.meta.env.VITE_API_KEY)


function Wetter() {
    const [wetterData, setWetterData] = useState()
    const [city, setCity] = useState("Brasilien")

    const apiKey = import.meta.env.VITE_API_KEY;


    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=Metric`)
            .then((res) => res.json())
            .then((data) => {
                setWetterData(data)
            })
    }, [city])

    // "?" inline abfrage true oder false
    return (
        <>
            <section className="btnSection">
                <button onClick={() => setCity("brazil")}>Brasilien</button>
                <button onClick={() => setCity("uganda")}>Uganda</button>
                <button onClick={() => setCity("groenland")}>Grönland</button>
                <button onClick={() => setCity("turkey")}>Türkei</button>
            </section>
    
            {wetterData ? <Weather wetterData={wetterData} /> : <p>Wetterdaten werden geladen...</p>}

            {/* <section>
                <article>{wetterData ?
                    <p>{wetterData.weather[0].description} in {wetterData.name} </p>
                    <img src={`http://openweathermap.org/img/wn/${wetterData.weather?.[0]?.icon}@2x.png`} alt={wetterData.weather[0].description}></img>
                </article>
                <p>Aktuell: {wetterData.main.temp}°C</p>
                <p>Windg.: {wetterData.wind.speed} meter/sec</p>
            }</section> */}
        </>
    )
}

export default Wetter