
/* Home page */

/* Static Data first */

import ForecastHourly from "@/components/ForecastHourly";




export default function Page() {
  return (
    <main className="p-4">
      <h1 className="">Hourly Forecast</h1>
      <ForecastHourly />
    </main>
  );
}
