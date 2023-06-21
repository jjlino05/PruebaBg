import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from './services/api-service.service';
import { ItemsServiceService } from './services/items-service.service';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'interview-ds';
  correctValues: Array<string>;
  wrongValues: Array<string>;
  serviceArray: Array<string>;

  constructor(
    public apiService: ApiServiceService,
    public itemsService: ItemsServiceService,
    public router: Router
    ) {
    this.correctValues = [];
    this.wrongValues = [];
    this.serviceArray = [];
  }

  ngOnInit(): void {

    $('[data-toggle="tooltip"]').tooltip();

    this.apiService.getArticleCode$().subscribe(data => {
      for (let key in data)
        if (key == 'data') this.serviceArray.push(...data[key]);
    });
  }

  /**
   * Actualiza los valores de array en padre
   * @param codes Array de string en la posicion 0 -> valores correctos, posicion 1 -> valores incorrectos
   */
  checkArticleCodes(codes: Array<string[]>): void {
    this.correctValues = codes[0];
    this.wrongValues = codes[1];

    let coincidenceArray: Array<string> = []
    let noCoincidenceArray: Array<string> = []

    noCoincidenceArray.push(... this.wrongValues)

    //validacion existencia en array del servicio
    
    for(let index in this.serviceArray){
      if(this.correctValues.indexOf(this.serviceArray[index]) >= 0)
        coincidenceArray.push(this.serviceArray[index])
      else
        noCoincidenceArray.push(this.serviceArray[index])
    }

    this.itemsService.setCorrectValues(coincidenceArray)
    this.itemsService.setWrongValues(noCoincidenceArray)

    //redireccion a la nueva ruta
    this.router.navigate(['/articles'])
  }
}
