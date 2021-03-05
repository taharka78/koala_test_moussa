import { Component, Input, OnInit } from '@angular/core';
import { IContractDTO } from 'src/app/com/services/contract/dto/i.contract.dto';

@Component({
  selector: 'koala-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() data:IContractDTO;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  getOffset(){
    let offsetString = "";
    let offset = new Date().getTimezoneOffset();
    let offsetInhour = Math.abs(offset / 60);
    let hour = Math.floor(offsetInhour);
    let minutes = Number((offsetInhour - Math.floor(offsetInhour)).toFixed(1))*60;

    if (offset < 0) offsetString = (hour < 10) ? `+0${hour}` : `+${hour}`;
    else offsetString = (hour < 10) ? `-0${hour}` : `-${hour}`;

    if (minutes == 0) offsetString += `00`;
    else offsetString += minutes;

    return offsetString;
  }


}
