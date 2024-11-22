const Weather = (props) => {
    return(
        <section>
                <article>
                    <p>{props.wetterData.weather[0].description} in {props.wetterData.name} </p>
                    <img src={`http://openweathermap.org/img/wn/${props.wetterData.weather?.[0]?.icon}@2x.png`} alt={props.wetterData.weather[0].description}></img>
                </article>
                <p>Aktuell: {props.wetterData.main.temp}°C</p>
                <p>Windg.: {props.wetterData.wind.speed} meter/sec</p>
            </section>
    )
}

export default Weather
