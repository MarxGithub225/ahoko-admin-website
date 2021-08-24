import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { caracteristictState, User } from 'src/assets/config/interfaces';
import { CaracteristicsservicesService } from '../services/caracteristicsservices.service';

import { MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-createcaracteristic',
  templateUrl: './createcaracteristic.component.html',
  styleUrls: ['./createcaracteristic.component.scss']
})
export class CreatecaracteristicComponent implements OnInit {

  moduleState : caracteristictState

  libelle = new FormControl('', Validators.required);

  loading : boolean = false;
  
  caracteristicsData : any[] = [];

  constructor(
    private moduleService : CaracteristicsservicesService,
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

      if(this.moduleState.caracteristics && this.moduleState.caracteristics.length > 0) {
        this.caracteristicsData = this.moduleState.caracteristics
      }
    })
  }


  create () {
    if(this.libelle.invalid 
      ) {
        this.libelle.markAsTouched();
        return;
      }

      const data = {
        libelle : this.libelle.value,
      }

      const exist = this.caracteristicsData.filter(car => car.libelle.toLowerCase() === data.libelle.toLowerCase()).length > 0 ? true : false

      if (!exist) {
        this.moduleService.saveCaracteristics(data)
        .then(res => {
          if(res) {
            this.loading = false;
            this.dialog.close();
          }
        })
      }else {
        this.errorMessage ('Cette marque existe dejà !');
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

