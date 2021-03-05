import {IContractDTO} from "./i.contract.dto";

export interface IContractDetailDTO extends IContractDTO{
    product: {
        minDelay: number;
      };
      claim: {
        status: 'accepted' | 'rejected';
        flightStatus: {
          delay: number;
        };
      };
}