import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { managementState, User } from 'src/assets/config/interfaces';
import { ModelservicesService } from '../services/modelservices.service';

import { MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createbrand',
  templateUrl: './createbrand.component.html',
  styleUrls: ['./createbrand.component.scss']
})
export class CreatebrandComponent implements OnInit {

  moduleState : managementState

  libelle = new FormControl('', Validators.required);

  loading : boolean = false;
  
  brandsData : any[] = [];

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

      if(this.moduleState.brands && this.moduleState.brands.length > 0) {
        this.brandsData = this.moduleState.brands
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

      const exist = this.brandsData.filter(country => country.libelle.toLowerCase() === data.libelle.toLowerCase()).length > 0 ? true : false

      if (!exist) {
        this.moduleService.saveBrand(data)
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

