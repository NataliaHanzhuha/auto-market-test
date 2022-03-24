import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { cloneDeep } from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class CarsService {
    private readonly url = 'http://almond-platform.com:7015/auto-market/landing-page/public';
    public bestSellingCarsModels: any[] = [];

    constructor(private http: HttpClient) { }

    getCars(): Observable<BestSellingCarModel[]> {
        return this.http.get<BestSellingCarModel[]>(this.url)
            .pipe(
                pluck('best_selling_car_models')
                // tap((res: CarsDataResponse) => {
                //     this.bestSellingCarsModels = cloneDeep(res.best_selling_car_models);
                //     console.log(this.bestSellingCarsModels);

                //     return res.best_selling_car_models;
                // })
            );
    }
}

export interface CarsDataResponse {
    best_selling_car_models: BestSellingCarModel[]
}

export interface BestSellingCarModel {
    year: number,
    vehicle: CarModel
}

export interface CarModel {
    id: number;
    model_name: string;
    picture_url: string;
}

// { "vehicle": { "id": 158, "model_name": "Golf 7", "picture_url": "http://www.almond-platform.com/car/public/images/vehicles/volkswagen/golf7.png", "body_type": { "id": 3, "body_type": "Hatchback", "picture_link": "/body-type/graphic_body_type_hatchback.svg" }, "make": { "id": 5, "name": "Volkswagen", "country_of_origin": "Germany", "logo_url": "http://www.almond-platform.com/car/public/images/vehicle-makes/graphic_volkswagen_logo.png" } }, "year": 2014 }
