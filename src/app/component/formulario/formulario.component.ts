import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  formulario: FormGroup;
  constructor( private appService : AppService) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      category: new FormControl(),
      description: new FormControl(),
      image: new FormControl(),
    });
  }

  ngOnInit(): void{}

 async  onSubmit() {
    console.log(this.formulario.value)
   const response = await this.appService.agregarDrink(this.formulario.value);
   console.log(response)
  }
}
