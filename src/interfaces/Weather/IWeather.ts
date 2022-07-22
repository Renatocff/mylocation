export interface Iwheather {
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