import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-add-codes',
  templateUrl: './add-codes.component.html',
  styleUrls: ['./add-codes.component.scss']
})
export class AddCodesComponent implements OnInit {
  public products: any; // Array para almacenar los productos obtenidos de la API

  public inputValue: string;

  @Output() codes = new EventEmitter<Array<string[]>>();

 
  constructor(private http: HttpClient) {
    this.inputValue = "";
  }
  ngOnInit(): void {
    this.fetchData()
  }
  
  fetchData() {
    const apiUrl = 'https://localhost:7168/api/producto'; // Reemplaza con la URL de tu API
  
    // Opcionalmente, puedes definir cabeceras personalizadas
    // const headers = new HttpHeaders().set('Authorization', 'Bearer token');
  
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        // Manejar la respuesta de la API aquí
        console.log(response);
        this.products = response;
      },
      (error: any) => {
        // Manejar errores de la solicitud aquí
        console.error(error);
      }
    );
  }
  
  sendData(data: string):void{
    //valores sin espacios ni puntos
    // let values = this.inputValue.replace(/\.|\s/g, '').split(',')
    // //console.log(values)
    // //expresion regular para validar que exitan unicamente 8 caracteres numericos
    // let regex = /[0-9]{8}/
    // let okValues = Array<string>()
    // let wrongValues = Array<string>()


    // values.forEach(element => 
    //     regex.test(element)? okValues.push(element):wrongValues.push(element)
    //   );

    this.codes.emit([[...data], []])
  }

}
