import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorsComponent } from './modules/administrators/administrators.component';
import { CarComponent } from './modules/car/car.component';
import { CardetailsComponent } from './modules/car/cardetails/cardetails.component';
import { HomeComponent } from './modules/home/home.component';
import { ManagementComponent } from './modules/management/management.component';
import { OwnerComponent } from './modules/owner/owner.component';
import { OwnerdetailsComponent } from './modules/owner/ownerdetails/ownerdetails.component';

const routes: Routes = [
  {
    path: '',
    component:  HomeComponent
  },
  {
    path: 'admins',
    component:  AdministratorsComponent
  },
  {
    path: 'management',
    component:  ManagementComponent
  },
  {
    path: 'cars',
    component:  CarComponent
  },
  {
    path: 'cars/:id',
    component:  CardetailsComponent
  },
  {
    path: 'owners',
    component:  OwnerComponent
  },
  {
    path: 'owners/:id',
    component:  OwnerdetailsComponent
  }
  ,
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
