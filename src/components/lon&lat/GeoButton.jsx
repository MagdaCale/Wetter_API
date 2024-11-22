const GeoButton = (props) => {
    
    return(
        <button onClick={() => props.setGeo([props.long, props.lang])}>{props.ort}</button>
    )
}
export default GeoButton