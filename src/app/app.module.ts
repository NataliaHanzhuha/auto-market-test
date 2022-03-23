import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FirstScreenModule } from './components/first-screen/first-screen.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FirstScreenModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
