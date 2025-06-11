
/* Main weather display - Icon, city, temp, description */

/* Mock data */
import { mockWeatherData } from "lib/mockData/weather";

const WeatherCard = () => {
    
    const current = mockWeatherData.current;
    const location = mockWeatherData.location;

    return (
        <div className="rounded bg-white/10 p-4 text-center">
            <p>{current.condition.text}</p>
            <img src="Few_Clouds.png" alt="" />
            <p>{current.temp_f}F</p>
            <p className="text-right">{location.name},</p>
            <p className="text-right">{location.country}</p>
            <br />
            <p className="text-right">Feels Like - {current.feelslike_f}F</p>
        </div>
    );
};

export default WeatherCard;