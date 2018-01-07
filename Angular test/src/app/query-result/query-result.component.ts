import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/car.service';
import { Car } from '../model/car';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.css']
})
export class QueryResultComponent implements OnInit {

  cars: Car[];
  cols: any[];
  brands: SelectItem[];
  colors: SelectItem[];
  yearFilter: number;
  yearTimeout: any;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ]

    this.brands = [];
    this.brands.push({ label: 'All Brands', value: null });
    this.brands.push({ label: 'BMW', value: 'BMW' });
    this.brands.push({ label: 'Nison', value: 'Nison' });
    this.brands.push({ label: 'Toyota', value: 'Toyota' });
    this.brands.push({ label: 'Honda', value: 'Honda' });
    this.brands.push({ label: 'Marzda', value: 'Marzda' });
    this.brands.push({ label: 'Mercedes', value: 'Mercedes' });
    this.brands.push({ label: 'VOVO', value: 'VOVO' });

    this.colors = [];
    this.colors.push({ label: 'White', value: 'White' });
    this.colors.push({ label: 'Green', value: 'Green' });
    this.colors.push({ label: 'Pink', value: 'Pink' });
    this.colors.push({ label: 'Black', value: 'Black' });
    this.colors.push({ label: 'Red', value: 'Red' });
    this.colors.push({ label: 'Grey', value: 'Grey' });
    this.colors.push({ label: 'Orange', value: 'Orange' });
    this.colors.push({ label: 'Blue', value: 'Blue' });
  }
  onYearChange(event, dt, col) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, col.field, col.filterMatchMode);
    }, 250);
  }


}
