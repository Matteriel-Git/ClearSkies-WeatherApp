
/* Home page */

/* Static Data first */

import ForecastHourly from "@/components/ForecastHourly";
import WeatherCard from "@/components/WeatherCard";
import ForecastDaily from "@/components/ForecastDaily";
import MetricBox from "@/components/MetricBox";
import AirQualityBar from "@/components/AirQualityBar";
import SunriseSunset from "@/components/SunriseSunset";



export default function Page() {
  return (
    <main className="p-4">
      <h1 className="">Weather Card</h1>
      <br />
      <WeatherCard />
      <br />
      <h1 className="">Hourly Forecast</h1>
      <ForecastHourly />
      <br />
      <h1 className="text-right">Forecast Daily</h1>
      <ForecastDaily />
      <h1 className="text-left">Metric Box</h1>
      <MetricBox />
      <h1 className="text-center"></h1>
      <AirQualityBar />
      <br />
      <h1 className="text-center">Sunrise Sunset</h1>
      <SunriseSunset />
    </main>
  );
};