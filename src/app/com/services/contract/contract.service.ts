import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IContractDTO } from './dto/i.contract.dto';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private _http:HttpClient) { 

  }

  getAll():Observable<IContractDTO[]>{
    return this._http.get(`${environment.API_URL}/contract`) as Observable<IContractDTO[]>;
  }

  getFromId(id){
    return this._http.get(`${environment.API_URL}/contract/${id}`);
  }
}
