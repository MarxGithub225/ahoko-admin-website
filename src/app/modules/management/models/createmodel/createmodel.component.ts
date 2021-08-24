import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { managementState, User } from 'src/assets/config/interfaces';
import { ModelservicesService } from '../services/modelservices.service';

import { MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createmodel',
  templateUrl: './createmodel.component.html',
  styleUrls: ['./createmodel.component.scss']
})
export class CreatemodelComponent implements OnInit {

  moduleState : managementState

  libelle = new FormControl('', Validators.required);
  brand = new FormControl('', Validators.required);

  loading : boolean = false;
  modelsData: any[] = [];
  
  constructor(
    private moduleService : ModelservicesService,
    public dialog: MatDialogRef<ModalComponent>,
    private snack: MatSnackBar
  ) { }

  public generateChar = () =>{
    let length = 6,
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"+ new Date().getTime(),
    retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n)).toUpperCase();
    }
    
    return retVal;
  }

  ngOnInit(): void {

    this.moduleService.stateObservable.subscribe(state => {
      this.moduleState = state;
      if(this.moduleState.models && this.moduleState.models.length > 0) {
        this.modelsData = this.moduleState.models
      }
    })
  }


  create () {
    if(
      this.libelle.invalid ||
      this.brand.invalid
      ) {
        this.libelle.markAsTouched();
        this.brand.markAsTouched();
        return;
      }

      const data = {
        libelle : this.libelle.value,
        brand : this.brand.value,
      }

      const exist = this.modelsData.filter(city => city.libelle.toLowerCase() === data.libelle.toLowerCase()).length > 0 ? true : false

      if (!exist) {
        this.moduleService.saveModel(data)
        .then(res => {
          if(res) {
            this.loading = false;
            this.dialog.close();
          }
        })
      }else {
        this.errorMessage ('Ce modèle existe dejà !');
      }

     
  }

  errorMessage(a): void {
    this.snack.open(a, '',
  
    {
      duration: 5000,
      verticalPosition: 'bottom',
      panelClass: 'danger-alert'
    }
  
    ) ;
  }
}

