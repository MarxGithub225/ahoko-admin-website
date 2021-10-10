//MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// ANIMATION
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// CCOKIES
import { CookieService } from 'ngx-cookie-service';

//TEXT EDITOR
import { AngularEditorModule } from '@kolkov/angular-editor';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// CROPPER
import { ImageCropperModule } from 'ngx-image-cropper';

import {DragDropModule} from '@angular/cdk/drag-drop';

// MATERIAL
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select'
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
//Local
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules//authentication/components/login/login.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { PassforgotComponent } from './modules//authentication/components/passforgot/passforgot.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProfilsideComponent } from './shared/navbar/components/profilside/profilside.component';
import { MobilesideComponent } from './shared/navbar/components/mobileside/mobileside.component';
import { ModalComponent } from './shared/modal/modal.component';
import { BottomsheetComponent } from './shared/bottomsheet/bottomsheet.component';
import { AdministratorsComponent } from './modules/administrators/administrators.component';
import { CreateadministratorComponent } from './modules/administrators/createadministrator/createadministrator.component';
import { DeleteadministratorComponent } from './modules/administrators/deleteadministrator/deleteadministrator.component';
import { EditadministratorComponent } from './modules/administrators/editadministrator/editadministrator.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { MenustickComponent } from './shared/menustick/menustick.component';
import { ManagementComponent } from './modules/management/management.component';
import { ModelsComponent } from './modules/management/models/models.component';
import { CreatemodelComponent } from './modules/management/models/createmodel/createmodel.component';
import { DeletemodelComponent } from './modules/management/models/deletemodel/deletemodel.component';
import { CreatebrandComponent } from './modules/management/models/createbrand/createbrand.component';
import { DeletebrandComponent } from './modules/management/models/deletebrand/deletebrand.component';
import { CartypeComponent } from './modules/management/cartype/cartype.component';
import { CreatecartypeComponent } from './modules/management/cartype/createcartype/createcartype.component';
import { DeletecartypeComponent } from './modules/management/cartype/deletecartype/deletecartype.component';
import { GearboxComponent } from './modules/management/gearbox/gearbox.component';
import { CreategearboxComponent } from './modules/management/gearbox/creategearbox/creategearbox.component';
import { DeletegearboxComponent } from './modules/management/gearbox/deletegearbox/deletegearbox.component';
import { CaracteristicsComponent } from './modules/management/caracteristics/caracteristics.component';
import { CreatecaracteristicComponent } from './modules/management/caracteristics/createcaracteristic/createcaracteristic.component';
import { DeletecaracteristicComponent } from './modules/management/caracteristics/deletecaracteristic/deletecaracteristic.component';
import { CarComponent } from './modules/car/car.component';
import { CreatecarComponent } from './modules/car/createcar/createcar.component';
import { EditcarComponent } from './modules/car/editcar/editcar.component';
import { DeletecarComponent } from './modules/car/deletecar/deletecar.component';
import { OwnerComponent } from './modules/owner/owner.component';
import { EditownerComponent } from './modules/owner/editowner/editowner.component';
import { OwnerdetailsComponent } from './modules/owner/ownerdetails/ownerdetails.component';
import { CardetailsComponent } from './modules/car/cardetails/cardetails.component';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoaderComponent,
    AuthenticationComponent,
    PassforgotComponent,
    NavbarComponent,
    ProfilsideComponent,
    MobilesideComponent,
    ModalComponent,
    BottomsheetComponent,
    AdministratorsComponent,
    CreateadministratorComponent,
    DeleteadministratorComponent,
    EditadministratorComponent,
    WelcomeComponent,
    MenustickComponent,
    ManagementComponent,
    ModelsComponent,
    CreatemodelComponent,
    DeletemodelComponent,
    CreatebrandComponent,
    DeletebrandComponent,
    CartypeComponent,
    CreatecartypeComponent,
    DeletecartypeComponent,
    GearboxComponent,
    CreategearboxComponent,
    DeletegearboxComponent,
    CaracteristicsComponent,
    CreatecaracteristicComponent,
    DeletecaracteristicComponent,
    CarComponent,
    CreatecarComponent,
    EditcarComponent,
    DeletecarComponent,
    OwnerComponent,
    EditownerComponent,
    OwnerdetailsComponent,
    CardetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    MatListModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatRadioModule,
    AngularEditorModule,
    ImageCropperModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatTooltipModule,
    MatTabsModule,
    MatSlideToggleModule,
    Ng2SearchPipeModule,
    DragDropModule
  ],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    {provide: LOCALE_ID, useValue: 'fr' },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
