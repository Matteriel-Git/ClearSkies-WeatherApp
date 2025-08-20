
// mock data

export const mockWeatherData = {
    location: {
        name: "San Diego",
        country: "United States"
    },

    current: {
        temp_f: 52.0,
        condition: {
            text: "Few Clouds",
            icon: "/icons/cloudy.png" //Icon URL
        },
        feelslike_f: 48.7,
    wind_mph: 4.3,
    wind_dir: "SW",
    humidity: 73,
    dewpoint_f: 44.1,
    pressure_mb: 1010,
    uv: 0,
    air_quality_index: 18,
    air_quality_desc: "Good",
    sunrise: "05:51 AM",
    sunset: "06:54 PM",
  },
  hourly: [
    { time: "02:00 PM", temp_f: 45.6, icon: "cloudy" },
    { time: "03:00 PM", temp_f: 46.0, icon: "cloudy" },
    { time: "04:00 PM", temp_f: 47.4, icon: "cloudy" },
    { time: "05:00 PM", temp_f: 47.9, icon: "cloudy" },
    { time: "06:00 PM", temp_f: 49.3, icon: "cloudy" },
    { time: "07:00 PM", temp_f: 49.7, icon: "cloudy" },
    { time: "08:00 PM", temp_f: 50.6, icon: "cloudy" },
    { time: "09:00 PM", temp_f: 51.4, icon: "cloudy" },
    { time: "10:00 PM", temp_f: 51.9, icon: "partly-cloudy" },
  ],
  tomorrow: [
    { time: "01:00 AM", temp_f: 48, icon: "clear" },
    { time: "02:00 AM", temp_f: 46, icon: "cloudy" },
    { time: "03:00 AM", temp_f: 46, icon: "cloudy" },
    { time: "04:00 AM", temp_f: 46, icon: "cloudy" },
    { time: "05:00 AM", temp_f: 44, icon: "clear" },
    { time: "06:00 AM", temp_f: 44, icon: "clear" },
    { time: "07:00 AM", temp_f: 43, icon: "clear" },
  ],
};
