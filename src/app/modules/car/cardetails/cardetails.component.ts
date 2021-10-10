import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { carState, User } from 'src/assets/config/interfaces';
import { CarserviceService } from '../services/carservice.service';
@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.scss']
})
export class CardetailsComponent implements OnInit {

  moduleState: carState
  carDetails : any[] = []
  reference : any;

  needs = [
    {label : 'Make', placeHoler: 'Marque'},
    {label : 'Manufacturer', placeHoler: 'Fabricant'},
    {label : 'ProductType', placeHoler: 'Type de véhicule'},
    {label : 'CheckDigitValidity', placeHoler: 'Validité'},
    {label : 'SequentialNumber', placeHoler: 'Numéro sequentiel'},
    {label : 'Body', placeHoler: 'Carrosserie'},
    {label : 'EngineCylinders', placeHoler: 'Nombre de cylindre'},
    {label : 'NumberOfDoors', placeHoler: 'Nombre de porte'},
    {label : 'FuelTypePrimary', placeHoler: 'Carburant'},
    {label : 'Model', placeHoler: 'Modèle'},
    {label : 'ModelYear', placeHoler: 'Année de la voiture'},
    {label : 'Series', placeHoler: 'Numéro de série'},
    {label : 'Transmission', placeHoler: 'Transmission'},
    {label : 'Engine', placeHoler: 'Moteur'},
    {label : 'NumberOfSeats', placeHoler: 'Nombre de sièges'},
    {label : 'Drive', placeHoler: 'Type'},
    {label : 'FuelSystem', placeHoler: 'Système de carburant'}, 
    {label : 'FuelCapacity', placeHoler: 'Capacité du réservoir'},
    {label : 'FrontBreaks', placeHoler: 'Freins avant'},
    {label : 'RentingSart', placeHoler: 'Début de location'},
    {label : 'RentingEnd', placeHoler: 'Fin de location'},
    {label : 'IsDriver', placeHoler: 'Avec chauffeur'},
    {label : 'Vin', placeHoler: 'N° chassis'},
    {label : 'Description', placeHoler: 'Description'},
    {label : 'Caracteristics', placeHoler: 'Caractéristiques'},
    {label : 'Owner', placeHoler: 'Propriétaire'},
  ];

  constructor(
    private router: ActivatedRoute,
    private moduleService : CarserviceService,
  ) { 
    this.reference = router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.moduleService.init();

    this.moduleService.stateObservable.subscribe(state => {
      this.moduleState = state;


      if(this.moduleState.cars && this.moduleState.cars.length)
       {

        this.getCar(this.moduleState.cars)

       } 
      
    })
  }


  getCar (cars) {

    for(const [key, value] of Object.entries(cars.filter(c => c.Vin === this.reference)[0]) ) {
      if(key !== 'Id' && key !== 'Date')
      this.carDetails.push({label : key, value: value})
    }

    this.carDetails.forEach(cd => {
      this.needs.forEach(n => {
        if(cd.label === n.label) {
          cd.placeHoler = n.placeHoler

        }
      })
    })
 }
}