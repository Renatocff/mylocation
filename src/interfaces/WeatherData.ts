export interface IwheatherData {
    name: string;
    weather: [
        {
            description: string,
        }
    ],
    sys: {
        country: string,
    },
    main: {
        temp: string,
    },
  }