import { Component, ElementRef, ViewChild } from '@angular/core';

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


  @ViewChild('textInput', {static: true}) textInput: ElementRef;
  fromTextInput: string;

  getText(){
    this.fromTextInput = this.textInput.nativeElement.value;
  }
}
