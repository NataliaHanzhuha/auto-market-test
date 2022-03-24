import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  carsList: any[] = [];
  constructor(private carsService: CarsService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.carsService.getCars().subscribe((res: any[]) => {
      this.carsList = res;
      this.cd.detectChanges();
    });
  }


}
