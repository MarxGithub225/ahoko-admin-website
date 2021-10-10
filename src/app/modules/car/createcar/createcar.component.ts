import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

import { carState, managementState, gearboxtState, caracteristictState, cartypetState } from 'src/assets/config/interfaces';
import { CarserviceService } from '../services/carservice.service';
import { ModelservicesService } from '../../management/models/services/modelservices.service';
import { GearboxservicesService } from '../../management/gearbox/services/gearboxservices.service';
import { CaracteristicsservicesService } from '../../management/caracteristics/services/caracteristicsservices.service';
import { CartypeservicesService } from '../../management/cartype/services/cartypeservices.service';
@Component({
  selector: 'app-createcar',
  templateUrl: './createcar.component.html',
  styleUrls: ['./createcar.component.scss']
})
export class CreatecarComponent implements OnInit {

  carData : any = [];

  moduleState : carState;
  managementState : managementState;
  georboxState : gearboxtState;
  caracteristicState : caracteristictState;
  cartypeState : cartypetState;
  Vin = new FormControl('', Validators.required);

  inputData = {
    Make : new FormControl('', Validators.required),
    Body : new FormControl('', Validators.required),
    EngineCylinders : new FormControl('', Validators.required),
    NumberOfDoors : new FormControl('', Validators.required),
    FuelTypePrimary : new FormControl('', Validators.required),
    Model : new FormControl('', Validators.required),
    ModelYear : new FormControl('', Validators.required),
    Transmission : new FormControl('', Validators.required),
    NumberOfSeats : new FormControl('', Validators.required),
  }
  

  loading : boolean = false;

  brandSelected : '';
  inputItems : any[] = [];

  transmitions = [];
  brands = [];
  types = [];
  caracteristics = [];
  models = []
  modelsFilter = []

  needs = [
    {label : 'Make', placeHoler: 'Marque *', level: 1},
    {label : 'Manufacturer', placeHoler: 'Fabricant *', level: 0},
    {label : 'ProductType', placeHoler: 'Type de véhicule', level: 0},
    {label : 'CheckDigitValidity', placeHoler: '', level: 0},
    {label : 'SequentialNumber', placeHoler: 'Numéro sequentiel', level: 0},
    {label : 'Body', placeHoler: 'Carrosserie', level: 0},
    {label : 'EngineCylinders', placeHoler: 'Nombre de cylindre*', level: 1},
    {label : 'NumberOfDoors', placeHoler: 'Nombre de porte *', level: 1},
    {label : 'FuelTypePrimary', placeHoler: 'Carburant*', level: 0},
    {label : 'Model', placeHoler: 'Modèle', level: 1},
    {label : 'ModelYear', placeHoler: 'Année de la voiture', level: 1},
    {label : 'Series', placeHoler: 'Numéro de série', level: 0},
    {label : 'Transmission', placeHoler: 'Transmission', level: 0},
    {label : 'Engine', placeHoler: '', level: 0},
    {label : 'NumberOfSeats', placeHoler: 'Nombre de sièges', level: 1},
    {label : 'Drive', placeHoler: 'Type', level: 0},
    {label : 'FuelSystem', placeHoler: 'Système de carburant', level: 0}, 
    {label : 'FuelCapacity', placeHoler: 'Capacité du réservoir', level: 0},
    {label : 'FrontBreaks', placeHoler: '', level: 0}
  
  ];

  constructor(
    private modeleService : ModelservicesService,
    private moduleService : CarserviceService,
    public dialog: MatDialogRef<ModalComponent>,
    public snack : MatSnackBar,
    private gearboxService : GearboxservicesService,
    private caraceristicService: CaracteristicsservicesService,
    private cartypeService: CartypeservicesService,
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

  replaceAll = (string, search, replace) => {
    return string.split(search).join(replace);
  }
  replaceFonction = (text) => {
    const t = this.replaceAll(text, '-', '');
    const p = this.replaceAll(t, '-', '');
    const z = this.replaceAll(p, '\/', '');
    const y = this.replaceAll(z, '%', '');
    const k = y.split('(').length ? y.split('(')[0] : y;
    const m = k.replace(/[0-9]/g, '');
    const splitStr  = m.toLowerCase().split(' ');
  
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    const r = splitStr.join('');
  
    return r; 
  }

  ngOnInit(): void {
    this.gearboxService.init()
    this.caraceristicService.init()
    this.cartypeService.init()
    this.modeleService.init()

    this.moduleService.stateObservable.subscribe(state => {
      this.moduleState = state;

      if(this.moduleState.data) {
          this.carData = this.moduleState.data


          console.log('this.carData', this.carData)
          const returnDatas = [];
    
          this.needs.forEach(n => {
                
            const exist = returnDatas.filter(rd => rd.label === n.label).length > 0 ? true : false;
            if(!exist) {
              let item = {}
              let filter = this.carData.length ? this.carData.filter(dat => this.replaceFonction(dat.label) === n.label) : [];
              
              const isExist = filter.length ? filter[0] : null;
              if(isExist) { 
            
                item = {
                  label: n.label,
                  value: isExist.value.toString(),
                  placeholder: n.placeHoler,
                  level: n.level
                }

                returnDatas.push(item)
              }else {
              
                item = {
                  label: n.label,
                  value: null,
                  placeholder: n.placeHoler,
                  level: n.level
                }

                returnDatas.push(item);
              }
            }
          

          })

    
        this.inputItems = returnDatas;

        if(this.carData.Make) {

          for (const [key, value] of Object.entries(this.carData)) {
            if(key !== 'VIN')
            this.inputData = {...this.inputData, [key]:value}
            
          }

        }else {
           returnDatas.forEach(t => {
            this.inputData = {...this.inputData, [t.label]: t.value}
            })
        }
       

        this.modeleService.stateObservable.subscribe(state => {
          this.managementState = state;
    
          if(this.managementState.brands && this.managementState.brands.length > 0) {
            this.brandSelected = this.managementState.brands[0].libelle
    
            for (let i = 0; i < this.managementState.brands.length; i++) {
              this.brands.push(this.managementState.brands[i].libelle)
              
            }
    
            if(this.managementState.models && this.managementState.models.length > 0) {

              console.log('brands', this.brandSelected)
              const brandGiven = this.inputItems.filter(m => m.label === 'Make')[0].value; 
              const brandId = brandGiven ? 
              this.brands.filter(b => b.libelle === brandGiven)[0].id
              : this.brands.filter(b => b.libelle === this.brandSelected).length ? this.brands.filter(b => b.libelle === this.brandSelected)[0].id : null
              this.modelsFilter = this.models.filter(m => m.brand === brandId);
              
              for (let i = 0; i < this.modelsFilter.length; i++) {
                this.models.push(this.modelsFilter[i].libelle)
                
              }
            }
            
          }
        })
      }


      
    })

    

    this.gearboxService.stateObservable.subscribe(state => {
      this.georboxState = state;

      if(this.georboxState.gearboxs && this.georboxState.gearboxs.length > 0) {
        for (let i = 0; i < this.georboxState.gearboxs.length; i++) {
          this.transmitions.push(this.georboxState.gearboxs[i].libelle)
          
        }
      }
    })

    this.cartypeService.stateObservable.subscribe(state => {
      this.cartypeState = state;


      for (let i = 0; i <this.cartypeState.cartypes.length; i++) {
        this.types.push(this.cartypeState.cartypes[i].libelle)
        
      }
    })

    this.caraceristicService.stateObservable.subscribe(state => {
      this.caracteristicState = state;
        this.getCaracteristics(this.caracteristicState.caracteristics)
    })

    
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

  // 5N1AT2MT0KC773740

  getCaracteristics = (caracteristics) => {
    for (let i = 0; i <caracteristics.length; i++) {
      caracteristics.forEach((element, i) => {
        this.caracteristics.push({
          id: i,
          value: element.libelle,
          isChecked: false,
        })
      });
      
    }
  }

  getCarDatas = () => {
    this.loading = true;
    const data = {vindata: this.Vin.value}
    this.moduleService.fetchData(data)
    .then(res => {
      this.loading = false;
    })
  }

  
}
