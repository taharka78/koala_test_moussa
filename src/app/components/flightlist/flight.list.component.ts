import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ContractService } from 'src/app/com/services/contract/contract.service';
import { IContractDTO } from 'src/app/com/services/contract/dto/i.contract.dto';

@Component({
  selector: 'koala-flight-list',
  templateUrl: './flight.list.component.html',
  styleUrls: ['./flight.list.component.css']
})
export class FlightlistComponent implements OnInit {

  @Input() type:string = "";

  public contracts:IContractDTO[] = [];
  constructor(private _contractService:ContractService, private _http:HttpClient, private _router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  
   this._contractService.getAll().subscribe((data:IContractDTO[]) => {
      this.contracts = data;
    },(error) => {
      alert("Une erreur est survenue");
    })
  }

  goToSummary(_id){
    (this.type == "desktop") ? this._router.navigate([{outlets: {rcontent: `details/${_id}`}}]) :  this._router.navigate([`m/details/${_id}`],{relativeTo:this.route}) ;    
  }

}
