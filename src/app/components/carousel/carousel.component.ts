import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  @Input() set list(items: any[]) {
    if (!items) return;

    this.innerList = items;
    
    // this.cd.detectChanges();
  }

  get list(): any[] {
    return this.innerList;
  }

  private innerList: any[] = [];
  constructor() { }

  ngOnInit(): void {}

}
