/* Sunrise/Sunset - Small chart */

/* Mock data */
import { mockWeatherData } from "lib/mockData/weather";

const SunriseSunset = () => {
    
    return (
        <div className="text-center">
            <p>{mockWeatherData.current.sunrise}</p>
            <p>{mockWeatherData.current.sunset}</p>
        </div>
    )
}

export default SunriseSunset;