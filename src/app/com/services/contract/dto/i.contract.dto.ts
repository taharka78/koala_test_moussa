export interface IContractDTO {
    id: string;
    type: 'flight';
    flight: {
      name:string;
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
