import { Component, OnInit , Input } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { gearboxtState, User } from 'src/assets/config/interfaces';
import { GearboxservicesService } from '../services/gearboxservices.service';

import { MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-deletegearbox',
  templateUrl: './deletegearbox.component.html',
  styleUrls: ['./deletegearbox.component.scss']
})
export class DeletegearboxComponent implements OnInit {

  @Input() datas: any;
  moduleState : gearboxtState

  loading : boolean = false;
  

  constructor(
    private moduleService : GearboxservicesService,
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
    
    this.moduleService.deleteGearbox(this.datas)
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
