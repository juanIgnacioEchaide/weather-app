export interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

export interface WeatherStats {
  timeEpoch: number;
  time: string;
  tempC: number;
  tempF: number;
  isDay: number;
  condition: WeatherCondition;
  windMph: number;
  windKph: number;
  windDegree: number;
  windDir: string;
  pressureMb: number;
  pressureIn: number;
  precipMm: number;
  precipIn: number;
  humidity: number;
  cloud: number;
  feelsLikeC: number;
  feelsLikeF: number;
  windchillC: number;
  windchillF: number;
  heatindexC: number;
  heatindexF: number;
  dewpointC: number;
  dewpointF: number;
  willItRain: number;
  chanceOfRain: number;
  willItSnow: number;
  chanceOfSnow: number;
  visKm: number;
  visMiles: number;
  gustMph: number;
  gustKph: number;
  uv: number;
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moonPhase: string;
  moonIllumination: number;
  isMoonUp: number;
  isSunUp: number;
}

export interface Day {
  maxtempC: number;
  maxtempF: number;
  mintempC: number;
  mintempF: number;
  avgtempC: number;
  avgtempF: number;
  maxwindMph: number;
  maxwindKph: number;
  totalprecipMm: number;
  totalprecipIn: number;
  totalsnowCm: number;
  avgvisKm: number;
  avgvisMiles: number;
  avghumidity: number;
  dailyWillItRain: number;
  dailyChanceOfRain: number;
  dailyWillItSnow: number;
  dailyChanceOfSnow: number;
  condition: WeatherCondition;
  uv: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tzId: string;
  localtimeEpoch: number;
  localtime: string;
}

export interface CurrentWeather {
  lastUpdatedEpoch: number;
  lastUpdated: string;
  tempC: number;
  tempF: number;
  isDay: number;
  condition: WeatherCondition;
}

export interface WeatherData {
  location: Location;
  current: {
    lastUpdatedEpoch: number;
    lastUpdated: string;
    tempC: number;
    tempF: number;
    isDay: number;
    condition: WeatherCondition;
    windMph: number;
    windKph: number;
    windDegree: number;
    windDir: string;
    pressureMb: number;
    pressureIn: number;
    precipMm: number;
    precipIn: number;
    humidity: number;
    cloud: number;
    feelslikeC: number;
    feelslikeF: number;
    visKm: number;
    visMiles: number;
    uv: number;
    gustMph: number;
    gustKph: number;
  };
}
