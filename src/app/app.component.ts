import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { NegativarService } from './negativar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'negativacao-app';
  clientes: Cliente[] = [];

  constructor(private service: NegativarService) {}

  negativar(){
    this.service
      .negativar()
      .subscribe(response => {
         this.clientes = response;
         console.log(response);
      });
  }

  listar(){
    this.service
      .listar()
      .subscribe(response => {
         this.clientes = response;
         console.log(response);
      });
  }




}
