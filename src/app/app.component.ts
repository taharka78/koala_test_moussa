import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'koala-test-moussa';
  constructor(private _http:HttpClient){

  }
  callAPI(){
    this._http.get('http://slowwly.robertomurray.co.uk/delay/4500/url/http://www.google.co.uk')
      .subscribe(data => {
        console.log(data);
      });
  }
}
