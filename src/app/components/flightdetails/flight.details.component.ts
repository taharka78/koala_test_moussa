import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ContractService } from 'src/app/com/services/contract/contract.service';
import { IContractDetailDTO } from '../../com/services/contract/dto/i.contract.detail.dto';

@Component({
  selector: 'koala-flight-details',
  templateUrl: './flight.details.component.html',
  styleUrls: ['./flight.details.component.css']
})
export class FlightdetailsComponent implements OnInit {

  public cDetailsData:IContractDetailDTO;
  constructor(private _route:ActivatedRoute, private _router:Router, private contractService:ContractService) { 
  }

  ngOnInit() {

    this._route.params.subscribe(routeParams => {
      if(routeParams.id){
        this.contractService.getFromId(routeParams.id).subscribe((cdetail:IContractDetailDTO) => {
          console.log(cdetail);
          this.cDetailsData = cdetail;
        })
      }else{
        alert("error");
      }
     
    })
  }

  getDelay(minutes:number){
    let __h = Math.floor((minutes / 60)), __m = minutes % 60, __min:string = "",_hrs = "";
    
    if(__m > 0 && __m < 9) __min = `0${__m}m` ;
    else if(__m == 0) __min = "";
    else __min = `${__m}m`;

    if(__h == 0 && __m == 0) _hrs = "on time";
    else if(__h == 0) _hrs = "";
    else _hrs = __h+"h";

    return `${_hrs}${__min}`;
  }

}
