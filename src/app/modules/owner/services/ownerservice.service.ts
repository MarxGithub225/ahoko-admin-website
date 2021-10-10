import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ownerState } from 'src/assets/config/interfaces';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class OwnerserviceService {

  // define the subjects
 state: ownerState = {
  owners : []
};


stateSubject: BehaviorSubject<ownerState> = new BehaviorSubject(this.state);
readonly stateObservable = this.stateSubject.asObservable();

constructor(
  private http: HttpClient,
  private snack: MatSnackBar
) { }

async init () {

  const result: any = await this.http.get(environment.url + 'owner/get')
  .toPromise();

  if (result.data) {
    this.state.owners = result.data;
    this.stateSubject.next(this.state);
  }else {
    this.state.owners = [];
    this.stateSubject.next(this.state);
  }
  
}
}
