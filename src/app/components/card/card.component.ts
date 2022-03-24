import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BestSellingCarModel, CarModel } from 'src/app/services/cars.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @ViewChild('cardImage') cardImage!: TemplateRef<HTMLImageElement>;
  @Input() set cardItem(value: BestSellingCarModel | null) {
    if (!value) return;

    console.log(this.cardImage);
    
    // this.cardImage.elementRef.nativeElement.src = value.picture_url;
    this.innerItem = value;
    this.cd.detectChanges();
  }

  get cardItem(): BestSellingCarModel | null {
    return this.innerItem;
  }
  constructor(private cd: ChangeDetectorRef) { }

  private innerItem: BestSellingCarModel | null = null;
  ngOnInit(): void {
  }

}
