import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent  } from './component/my-component/my-component.componet';
import { LibrosComponent } from './components/libros/libros.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
