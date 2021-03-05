import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {IContractDTO} from './contract/dto/i.contract.dto';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private _http:HttpClient) { 

  }
  /*
    * methode de récupération de l'enssemble des contrats. 
  */
  getAll():Observable<IContractDTO[]>{
    return this._http.get(`${environment.API_URL}/contract`) as Observable<IContractDTO[]>;
  }
  /*
    * methode de récupération d'un contrat par son ID. 
  */
  getFromId(id){
    return this._http.get(`${environment.API_URL}/contract/${id}`);
  }
}
