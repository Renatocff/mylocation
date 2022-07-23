export interface Iwheather {
  city: string;
  current: {
    dt: number;
    temp: number;
  };
  daily: [
    {
      dt: number;
      temp: {
        min: number;
        max: number;
      };
      humidity: number;
      wind_speed: number;
      weather: [
        {
          main: string;
          description: string;
        }
      ];
    }
  ];
}
