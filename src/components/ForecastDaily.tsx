/* Daily forecast - switchable tab for weekly view */

/* Mock data */
import { mockWeatherData } from "lib/mockData/weather";

const ForecastDaily = () => {

    return (
        <div className="grid grid-cols-1 gap-2">
            {mockWeatherData.tomorrow.map((hour, i) => (
                <div key={i} className="text-right">
                    <p>{hour.time}</p>
                    <img src="{`/icons/${hour.icon}.png`}" alt="{hour.icon}" />
                    <p>{hour.temp_f}</p>
                </div>
            ))}
        </div>
    );
};

export default ForecastDaily;