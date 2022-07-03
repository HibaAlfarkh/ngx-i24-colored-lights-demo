import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  colorCollection = ['#e7e984', '#6bbada', '#e98b84'];
  lights = 30;
  textColor = '#FFFFFF';
  lightSize = 50;
  blurLevel = 3;
  text = '';
  imageUrl =
    'https://raw.githubusercontent.com/HibaAlfarkh/ngx-i24-colored-lights-lib/master/projects/colored-lights-demo/src/assets/street.jpg';
}
