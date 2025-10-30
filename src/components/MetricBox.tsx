
/* Wind, humidity, etc. - grid of small info cards */

/* Mock data */
import { mockWeatherData } from "lib/mockData/weather";

const MetricBox = () => {
    
    const current = mockWeatherData.current;
    return (
        <div className="">
            <p>{current.wind_mph} {current.wind_dir}</p>
            <p>{current.humidity} {current.dewpoint_f}</p>
            <p>{current.pressure_mb}</p>
            <p>{current.uv}</p>
        </div>
    );
};

export default MetricBox;
