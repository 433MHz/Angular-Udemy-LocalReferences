import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LocalReferences';

  data:string;
  placeholder:string;

  setData(fromInput){
    this.data = fromInput.value;
    this.placeholder = fromInput.placeholder;
  }
}
