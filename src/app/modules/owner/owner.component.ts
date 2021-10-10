import { Component, OnInit } from '@angular/core';
import { ownerState, User } from 'src/assets/config/interfaces';
import { OwnerserviceService } from './services/ownerservice.service';

import { AuthService } from 'src/app/services/auth/auth.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { BottomsheetComponent } from 'src/app/shared/bottomsheet/bottomsheet.component';
import { CentralService } from 'src/app/services/central.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  moduleState: ownerState
  userState : User

  owners : any[] = []
  constructor(
    private moduleService : OwnerserviceService,
    public matDialog: MatDialog, 
    private _bottomSheet: MatBottomSheet,
    private authService: AuthService,
    private central : CentralService
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
    this.moduleService.init();

    this.moduleService.stateObservable.subscribe(state => {
      this.moduleState = state;


      if(this.moduleState.owners && this.moduleState.owners.length)
       {

        this.central.stateObservable.subscribe(state => {
          
          this.getOwners(this.moduleState.owners, state.profiles)
        })

       } 
      
    })

    this.authService.userObservable.subscribe(state => {
      this.userState = state
    })

    
  }



  getOwners (owners, profiles) {
     this.owners =  profiles.filter(p => owners.some(o => o.reference === p.reference))
  }

}

