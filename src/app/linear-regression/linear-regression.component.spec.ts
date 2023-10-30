import { TestBed } from '@angular/core/testing';
import { LinearRegressionComponent } from './linear-regression.component';
import { LinearRegressionService } from '../services/linear-regression.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let service: LinearRegressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearRegressionComponent],
      providers: [LinearRegressionService],
      imports: [HttpClientModule],
    });

    // Crea una instancia del componente y del servicio antes de cada prueba
    component = TestBed.createComponent(LinearRegressionComponent).componentInstance;
    service = TestBed.inject(LinearRegressionService);
  });

  // Test para el test1.json
  it('should return B1 = 1.7279 with test1 json', () => {
    // Simula los datos de test1
    const test1Data = {
      proxy_size: [
        130,
        650,
        99,
        150,
        128,
        302,
        95,
        945,
        368,
        961],
      actual_added: [
        186,
        699,
        132,
        272,
        291,
        331,
        199,
        1890,
        788,
        1601]
    };

    spyOn(service, 'getTest1').and.returnValue(of(test1Data)); // Simula la llamada a getTest1

    component.fetchDataForRoute(1); // Llama al método para obtener los datos

    // Llama a la función calculateB1
    const result = component.calculateB1();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(1.7279, 4);
  });

  it('should return B0 = -22.5525 with test1 json', () => {
    // Simula los datos de test1
    const test1Data = {
      proxy_size: [
        130,
        650,
        99,
        150,
        128,
        302,
        95,
        945,
        368,
        961],
      actual_added: [
        186,
        699,
        132,
        272,
        291,
        331,
        199,
        1890,
        788,
        1601]
    };

    spyOn(service, 'getTest1').and.returnValue(of(test1Data)); // Simula la llamada a getTest1

    component.fetchDataForRoute(1); // Llama al método para obtener los datos

    // Llama a la función calculateB0
    const result = component.calculateB0();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(-22.5525, 4);
  });

  it('should return y = 644.429 if x = 386 with test1 json', () => {
    // Simula los datos de test1
    const test1Data = {
      proxy_size: [
        130,
        650,
        99,
        150,
        128,
        302,
        95,
        945,
        368,
        961],
      actual_added: [
        186,
        699,
        132,
        272,
        291,
        331,
        199,
        1890,
        788,
        1601]
    };

    spyOn(service, 'getTest1').and.returnValue(of(test1Data)); // Simula la llamada a getTest1

    component.fetchDataForRoute(1); // Llama al método para obtener los datos

    // Llama a la función calculateY
    const result = component.calculateY(386);

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(644.429, 3);
  });

  // Test para el test2.json  
  it('should return B1 = 0.1681 with test2 JSON', () => {
    // Datos de prueba
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };

    // Simula la llamada al servicio o la respuesta de datos
    spyOn(service, 'getTest2').and.returnValue(of(testData));

    // Llama al método para obtener los datos
    component.updateData(2);

    // Llama a la función calculateB1
    const result = component.calculateB1();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(0.1681, 4);
  });

  it('should return B0 = -4.039 with test2 JSON', () => {
    // Datos de prueba
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };

    // Simula la llamada al servicio o la respuesta de datos
    spyOn(service, 'getTest2').and.returnValue(of(testData));

    // Llama al método para obtener los datos
    component.updateData(2);

    // Llama a la función calculateB0
    const result = component.calculateB0();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(-4.039, 3);
  });

  it('should return y = 60.858 if x = 386 with2 test JSON', () => {
    // Datos de prueba
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };

    // Simula la llamada al servicio o la respuesta de datos
    spyOn(service, 'getTest2').and.returnValue(of(testData));

    // Llama al método para obtener los datos
    component.updateData(2);

    // Llama a la función calculateY con un valor de X
    const result = component.calculateY(386);

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(60.858, 3);
  });

  // Test para el test3.json
  it('should return B1 = 1.43097 with test3 JSON', () => {
    // Datos de prueba
    const testData = {
      plan_added: [
        163,
        765,
        141,
        166,
        137,
        355,
        136,
        1206,
        433,
        1130
      ],
      actual_added: [
        186,
        699,
        132,
        272,
        291,
        331,
        199,
        1890,
        788,
        1601
      ]
    };

    // Simula la llamada al servicio o la respuesta de datos
    spyOn(service, 'getTest3').and.returnValue(of(testData));

    // Llama al método para obtener los datos
    component.updateData(3);

    // Llama a la función calculateB1
    const result = component.calculateB1();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(1.43097, 5);
  });

  it('should return B0 = -23.92 with test3 JSON', () => {
    // Datos de prueba
    const testData = {
      plan_added: [
        163,
        765,
        141,
        166,
        137,
        355,
        136,
        1206,
        433,
        1130
      ],
      actual_added: [
        186,
        699,
        132,
        272,
        291,
        331,
        199,
        1890,
        788,
        1601
      ]
    };

    // Simula la llamada al servicio o la respuesta de datos
    spyOn(service, 'getTest3').and.returnValue(of(testData));

    // Llama al método para obtener los datos
    component.updateData(3);

    // Llama a la función calculateB0
    const result = component.calculateB0();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(-23.92, 2);
  });

  it('should return y = 528.4294 if x = 386 with3 test JSON', () => {
    // Datos de prueba
    const testData = {
      plan_added: [
        163,
        765,
        141,
        166,
        137,
        355,
        136,
        1206,
        433,
        1130
      ],
      actual_added: [
        186,
        699,
        132,
        272,
        291,
        331,
        199,
        1890,
        788,
        1601
      ]
    };

    // Simula la llamada al servicio o la respuesta de datos
    spyOn(service, 'getTest3').and.returnValue(of(testData));

    // Llama al método para obtener los datos
    component.updateData(3);

    // Llama a la función calculateY con un valor de X
    const result = component.calculateY(386);

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(528.4294, 4);
  });

  // Test para el test4.json
  it('should return B1 = 0.140164 with test4 JSON', () => {
    // Datos de prueba
    const testData = {
      plan_added: [
        163,
        765,
        141,
        166,
        137,
        355,
        136,
        1206,
        433,
        1130
      ],
      actual_develop: [
        15.0,
        69.9,
        6.5,
        22.4,
        28.4,
        65.9,
        19.4,
        198.7,
        38.8,
        138.2
      ]
    };

    // Simula la llamada al servicio o la respuesta de datos
    spyOn(service, 'getTest4').and.returnValue(of(testData));

    // Llama al método para obtener los datos
    component.updateData(4);

    // Llama a la función calculateB1
    const result = component.calculateB1();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(0.140164, 6);
  });

  it('should return B0 = -4.604 with test4 JSON', () => {
    // Datos de prueba
    const testData = {
      plan_added: [
        163,
        765,
        141,
        166,
        137,
        355,
        136,
        1206,
        433,
        1130
      ],
      actual_develop: [
        15.0,
        69.9,
        6.5,
        22.4,
        28.4,
        65.9,
        19.4,
        198.7,
        38.8,
        138.2
      ]
    };

    // Simula la llamada al servicio o la respuesta de datos
    spyOn(service, 'getTest4').and.returnValue(of(testData));

    // Llama al método para obtener los datos
    component.updateData(4);

    // Llama a la función calculateB0
    const result = component.calculateB0();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(-4.604, 3);
  });

  it('should return y = 49.4994 if x = 386 with test4 JSON', () => {
    // Datos de prueba
    const testData = {
      plan_added: [
        163,
        765,
        141,
        166,
        137,
        355,
        136,
        1206,
        433,
        1130
      ],
      actual_develop: [
        15.0,
        69.9,
        6.5,
        22.4,
        28.4,
        65.9,
        19.4,
        198.7,
        38.8,
        138.2
      ]
    };

    // Simula la llamada al servicio o la respuesta de datos
    spyOn(service, 'getTest4').and.returnValue(of(testData));

    // Llama al método para obtener los datos
    component.updateData(4);

    // Llama a la función calculateY con un valor de X
    const result = component.calculateY(386);

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(49.4994, 4);
  });
});