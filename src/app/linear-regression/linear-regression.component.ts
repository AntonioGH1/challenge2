import { Component, OnInit } from '@angular/core';
import { LinearRegressionService } from '../services/linear-regression.service';
import { Calculate } from '../common/calculate';

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.css']
})
export class LinearRegressionComponent implements OnInit {
  constructor(private linearRegressionService: LinearRegressionService) { }

  lista1: number[] = [];
  lista2: number[] = [];
  selectedRouteNumber: number = 1; // Establecer en ruta 1 por defecto

  sumX = 0;
  sumY = 0;
  mediaX = 0
  mediaY = 0;
  sumXY = 0;
  sumXX = 0;
  sumYY = 0;
  n = 0;

  calculate = new Calculate();

  ngOnInit(): void {
    this.fetchDataForRoute(this.selectedRouteNumber);
  }

  // Función para obtener datos basados en el número de ruta seleccionado
  fetchDataForRoute(routeNumber: number): void {
    switch (routeNumber) {
      case 1:
        this.linearRegressionService.getTest1().subscribe((data) => {
          this.lista1 = data.proxy_size;
          this.lista2 = data.actual_added;
          this.handleDataResponse(data);
        });
        break;
      case 2:
        this.linearRegressionService.getTest2().subscribe((data) => {
          this.lista1 = data.proxy_size;
          this.lista2 = data.actual_develop;
          this.handleDataResponse(data);
        });
        break;
      case 3:
        this.linearRegressionService.getTest3().subscribe((data) => {
          this.lista1 = data.plan_added;
          this.lista2 = data.actual_added;
          this.handleDataResponse(data);
        });
        break;
      case 4:
        this.linearRegressionService.getTest4().subscribe((data) => {
          this.lista1 = data.plan_added;
          this.lista2 = data.actual_develop;
          this.handleDataResponse(data);
        });
        break;
      default:
        console.error('Número de ruta no válido');
    }
  }

  // Función para manejar la respuesta de los datos
  handleDataResponse(data: any): void {
    console.log(data);

    this.sumX = this.calculate.sumX(this.lista1);
    this.sumY = this.calculate.sumX(this.lista2);
    this.mediaX = this.calculate.calculateMedia(this.lista1);
    this.mediaY = this.calculate.calculateMedia(this.lista2);

    this.sumXY = this.calculate.sumXY(this.lista1, this.lista2);
    this.sumXX = this.calculate.sumXX(this.lista1);
    this.sumYY = this.calculate.sumXX(this.lista2);
    this.n = this.lista1.length;
  }

  // Función para actualizar datos basados en un número de ruta seleccionado
  updateData(routeNumber: number): void {
    this.fetchDataForRoute(routeNumber);
  }

  //Función para calcular B1
  calculateB1(): number {
    var b1 = 0;
    
    b1 = this.calculate.calculateB1(this.sumXY, this.sumX, this.sumY, this.sumXX, this.n);

    console.log(b1);

    return b1;
  }

  //Función para cualcular B0
  calculateB0(): number {
    var b0 = 0;

    b0 = this.calculate.calculateB0(this.sumX, this.sumY, this.calculateB1(), this.n);

    console.log(b0);

    return b0;
  }

  calculateY(x: number): number {
    var y = 0;

    y = this.calculate.calculateY(this.calculateB0(), this.calculateB1(), x);

    console.log(y);

    return y;
  }
}