import { Component, OnInit } from '@angular/core';
import { managementState, User } from 'src/assets/config/interfaces';
import { ModelservicesService } from './services/modelservices.service';

import { AuthService } from 'src/app/services/auth/auth.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { BottomsheetComponent } from 'src/app/shared/bottomsheet/bottomsheet.component';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  moduleState : managementState
  userState : User

  active = 0;

  models : any[] = [];
  modelsDatas : any[] = [];

  constructor(
    private moduleService : ModelservicesService,
    public matDialog: MatDialog, 
    private _bottomSheet: MatBottomSheet,
    private authService: AuthService
  ) { }

  public openModal = (modalWith, modalWithExt, modalRoot, modalTitle, modalDatas) => {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = false;
    dialogConfig.width = modalWith + modalWithExt;
    dialogConfig.panelClass = "custom-dialog-container";
    dialogConfig.data = {root: modalRoot, title: modalTitle, data: modalDatas}
    this.matDialog.open(ModalComponent, dialogConfig);
  }
  
  public openBottomSheet(sheetRoot, sheetTitle, sheetDatas): void {
    const sheetConfig = new MatBottomSheetConfig();
    sheetConfig.panelClass = "custom-sheet-container";
    sheetConfig.data = {root: sheetRoot, title: sheetTitle, data: sheetDatas}
    this._bottomSheet.open(BottomsheetComponent, sheetConfig);
  }

  ngOnInit(): void {
    this.moduleService.init()

    this.moduleService.stateObservable.subscribe(state => {
      this.moduleState = state;

      console.log (this.moduleState)
      if(this.moduleState.models && this.moduleState.models.length > 0) {
        this.models = this.moduleState.models

        if(this.moduleState.brands && this.moduleState.brands.length > 0) {
          this.getModels(this.moduleState.brands[63].id)
        }
      }
    })

    this.authService.userObservable.subscribe(state => {
      this.userState = state
    })
  }

  
  getModels (id) {
    this.modelsDatas = this.models.filter(m => Number(m.brand) === Number(id));
    console.log('Models =>',id, this.modelsDatas)
  }

}
