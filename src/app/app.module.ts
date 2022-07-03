import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxI24ColoredLightsModule } from 'ngx-i24-colored-lights';

@NgModule({
  imports:      [ BrowserModule, FormsModule,NgxI24ColoredLightsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
