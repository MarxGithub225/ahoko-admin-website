import { Component, OnInit , Input } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { managementState, User } from 'src/assets/config/interfaces';
import { ModelservicesService } from '../services/modelservices.service';

import { MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-deletemodel',
  templateUrl: './deletemodel.component.html',
  styleUrls: ['./deletemodel.component.scss']
})
export class DeletemodelComponent implements OnInit {

  @Input() datas: any;
  moduleState : managementState


  loading : boolean = false;
  
  constructor(
    private moduleService : ModelservicesService,
    public dialog: MatDialogRef<ModalComponent>,
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
    
    this.moduleService.deleteModel(this.datas)
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
}
