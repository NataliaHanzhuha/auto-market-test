import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CardModule } from '../card/card.module';

@NgModule({
    declarations: [CarouselComponent],
    imports: [ CardModule, CommonModule ],
    exports: [CarouselComponent],
})
export class CarouselModule {}