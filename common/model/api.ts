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
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: WeatherCondition;
  uv: number;
}
