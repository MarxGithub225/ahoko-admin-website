import { Component, OnInit , Input } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { caracteristictState, User } from 'src/assets/config/interfaces';
import { CaracteristicsservicesService } from '../services/caracteristicsservices.service';

import { MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deletecaracteristic',
  templateUrl: './deletecaracteristic.component.html',
  styleUrls: ['./deletecaracteristic.component.scss']
})
export class DeletecaracteristicComponent implements OnInit {

  @Input() datas: any;
  moduleState : caracteristictState

  loading : boolean = false;
  

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

    })
  }


  delete () {
    
    this.moduleService.deleteCaracteristics(this.datas)
    .then(res => {
      if(res) {
        this.loading = false;
        
        this.dialog.close();
      }
    })
  }

  cancel () {
    this.dialog.close();
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
