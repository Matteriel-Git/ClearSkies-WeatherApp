
/* Home page */

/* Static Data first */

import ForecastHourly from "@/components/ForecastHourly";
import WeatherCard from "@/components/WeatherCard";
import ForecastDaily from "@/components/ForecastDaily";




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
    </main>
  );
};