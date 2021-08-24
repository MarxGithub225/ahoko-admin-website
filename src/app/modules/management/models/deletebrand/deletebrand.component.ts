import { Component, OnInit , Input } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { managementState, User } from 'src/assets/config/interfaces';
import { ModelservicesService } from '../services/modelservices.service';

import { MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-deletebrand',
  templateUrl: './deletebrand.component.html',
  styleUrls: ['./deletebrand.component.scss']
})
export class DeletebrandComponent implements OnInit {

  @Input() datas: any;
  moduleState : managementState;

  models : any[] = [];
  loading = false;
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

      if(this.moduleState.models && this.moduleState.models.length > 0) {
        this.models = this.moduleState.models
      }
    })
  }


  delete () {
    
  let modelsDatas = this.models.filter(m => m.brand === this.datas.id);

  if(modelsDatas.length > 0) {
    modelsDatas.forEach(subcat => {
      this.moduleService.deleteModel(subcat)
    })

    setTimeout(() => {
      this.moduleService.deleteBrand(this.datas)
    .then(res => {
      if(res) {
        this.loading = false;
        window.location.reload();
        this.dialog.close();
      }
    })
    }, 500);
  }else {
    this.moduleService.deleteBrand(this.datas)
    .then(res => {
      if(res) {
        this.loading = false;
        
        this.dialog.close();
      }
    })
  }
  
  }

  cancel () {
    this.dialog.close();
  }
}