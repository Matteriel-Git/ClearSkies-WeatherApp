
/* Hourly forecast - Scrollable weather slots etc */ 

/* Mock data */
import { mockWeatherData } from "lib/mockData/weather";

const ForecastHourly = () => {
    
    return (
        <div className="grid grid-cols-3 gap-2">
        {mockWeatherData.hourly.map((hour, i) => (
            <div key={i} className="rounded bg-white/10 p-2 text-center">
                <p>{hour.time}</p>
                <img src="{`/icons/${hour.icon}.png`}" alt="{hour.icon}" />
                <p>{hour.temp_f}°F</p>
            </div>
        ))}
        </div>
    );
};

export default ForecastHourly;