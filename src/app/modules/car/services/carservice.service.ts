import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { carState } from 'src/assets/config/interfaces';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  // define the subjects
 state: carState = {
  cars : [],
  data : []
};


stateSubject: BehaviorSubject<carState> = new BehaviorSubject(this.state);
readonly stateObservable = this.stateSubject.asObservable();

constructor(
  private http: HttpClient,
  private snack: MatSnackBar
) { }

async init () {

  const result: any = await this.http.get(environment.url + 'car/get')
  .toPromise();

  if (result.data) {
    this.state.cars = result.data;
    this.stateSubject.next(this.state);
  }else {
    this.state.cars = [];
    this.stateSubject.next(this.state);
  }
  
}


// Fectch vin data

async fetchData(vin): Promise<boolean>  {

  
  let headers= new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  });

  let options = {
    headers : headers
  }

  const body = vin
  
  return this.http.post(environment.url + 'car/fetching', 
  JSON.stringify(body), 
  options)
  .toPromise()
  .then(async (res: any) => {
      
    if(res.status) {
      this.state.data = res.dataDecode.decode;
      this.stateSubject.next(this.state);
      console.log(this.state)
      return true;
    }
    else 
    {
      this.successMessage ("Mauvais chassis: Aucune donnée trouvée");
      return false;
    }
    
      
  }).catch(err => {
    this.successMessage ("Une erreur est survenue, veuillez réessayer.");
    return false;
    
  });

}

// New Car

async saveCar(car): Promise<boolean>  {

  
  let headers= new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  });

  let options = {
    headers : headers
  }

  const body = car
  
  return this.http.post(environment.url + 'car/register', 
  JSON.stringify(body), 
  options)
  .toPromise()
  .then(async (res: any) => {
      
    if(res.status) {
      this.successMessage ("Véhicule enregistré avec succès !");
      this.init();
      return true;
    }
    else 
    {
      this.successMessage ("Une erreur est survenue, veuillez réessayer.");
      return false;
    }
    
      
  }).catch(err => {
    this.successMessage ("Une erreur est survenue, veuillez réessayer.");
    return false;
    
  });

}


// Edit Car

async editCar(car): Promise<boolean>  {

  
  let headers= new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  });

  let options = {
    headers : headers
  }

  const body = car

  
  return this.http.put(environment.url + 'car/update', 
  JSON.stringify(body), 
  options)
  .toPromise()
  .then(async (res: any) => {
    if(res.status) {
      this.successMessage ("Véhicule modifié avec succès !");
      this.init();
      return true;
    }
    else
    this.errorMessage('Une erreur est survenue, veuillez réessayer.')
      return false;
  }).catch(err => {
    this.errorMessage('Une erreur est survenue, veuillez réessayer.')
    return false;
  });

}




// Delete car

async deleteCar(car): Promise<boolean>  {

  
  let headers= new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  });

  let options = {
    headers : headers
  }

  const body = car

  
  return this.http.put(environment.url + 'admin/delete', 
  JSON.stringify(body), 
  options)
  .toPromise()
  .then(async (res: any) => {
    if(res.status) {
      this.successMessage ("Véhicule supprimé avec succès !");
      this.init();
      return true;
    }
    else
    this.errorMessage('Une erreur est survenue, veuillez réessayer.')
      return false;
  }).catch(err => {
    this.errorMessage('Une erreur est survenue, veuillez réessayer.')
    return false;
  });

}
//ALERTS

errorMessage(a): void {
  this.snack.open(a, '',

  {
    duration: 5000,
    verticalPosition: 'bottom',
    panelClass: 'danger-alert'
  }

  ) ;
}

successMessage(a): void{
  this.snack.open(a, '',

  {
    duration: 3000,
    verticalPosition: 'top',
    panelClass: 'success-alert'
  }

  );
}
}


