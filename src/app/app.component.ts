import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppComponent';
  linkGoogle: string = "Thương binh và Xã hội \n Tổng biên tập \n https://www.google.com.vn";
  linkDantri = "https://dantri.com.vn/";

  url = 'https://tuoitre.vn/';

  number1: number = 1;
  number2: number = 2;
  info: any;

  getInfo(data) {
    this.info = data;
  }
}
