export interface IwheatherData {
    name: string;
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string,
        }
    ],
    wind: {
        speed: string,
        deg: number,
        gust: number
    },
    sys: {
        country: string,
        sunrise: string,
    },
    main: {
        temp: string,
    },
  }