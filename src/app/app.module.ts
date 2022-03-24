import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FirstScreenModule } from './components/first-screen/first-screen.module';
import { CarouselModule } from './components/carousel/carousel.module';
import { CarsService } from './services/cars.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FirstScreenModule,
    CarouselModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
