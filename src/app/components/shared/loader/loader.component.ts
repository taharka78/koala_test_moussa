import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

import { LoaderService } from './loader.service';

@Component({
  selector: 'koala-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  @Input() header:boolean = true;
  @Input() absolute:boolean = true;
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService: LoaderService){}
}
