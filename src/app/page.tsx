
/* Home page */

/* Static Data first */

import ForecastHourly from "@/components/ForecastHourly";
import WeatherCard from "@/components/WeatherCard";




export default function Page() {
  return (
    <main className="p-4">
      <h1 className="">Weather Card</h1>
      <WeatherCard />
      <h1 className="">Hourly Forecast</h1>
      <ForecastHourly />
    </main>
  );
};