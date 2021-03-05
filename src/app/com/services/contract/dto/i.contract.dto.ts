export interface IContractDTO {
    id: string;
    type: 'flight';
    flight: {
      from: {
        name: string;
        iata: string;
      };
      to: {
        name: string;
        iata: string;
      };
      start: string;
      passengers: number;
    };
  };