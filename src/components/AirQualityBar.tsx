
/* Air quality index bar - Horizontal bar chart with colorful scale etc */

/* Mock data */
import { mockWeatherData } from "lib/mockData/weather";

const AirQualityBar = () => {

    return (
        <div className="text-center">
            <h1>Air Quality Bar</h1>
            <p>{mockWeatherData.current.air_quality_index} {mockWeatherData.current.air_quality_desc}</p>
        </div>
    )
}

export default AirQualityBar;