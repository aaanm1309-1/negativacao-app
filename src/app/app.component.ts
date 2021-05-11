import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';
import { NegativarService } from './negativar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'negativacao-app';
  clientes: Cliente[] = [];

  constructor(private service: NegativarService,
     private serviceClientes: ClientesService) {}

  negativar(){
    this.service
      .negativar()
      .subscribe(response => {
         this.clientes = response;
        //  console.log(response);
      });
  }

  listar(){
    this.serviceClientes
      .listar()
      .subscribe(resp => {
         this.clientes = resp;
        //  console.log(response);
      });
  }




}
