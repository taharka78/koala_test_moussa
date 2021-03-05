import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'koala-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() subtitle:string = '';
  constructor() { }

  ngOnInit() {
  }

}
