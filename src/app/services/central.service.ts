import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { State } from 'src/assets/config/interfaces';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CentralService {

  // define the subjects
  state: State = {
    loading: true,
    user: null,
    profiles: []
  };
  stateSubject: BehaviorSubject<State> = new BehaviorSubject(this.state);
  readonly stateObservable = this.stateSubject.asObservable();

  constructor(
    private authService: AuthService,
    private http: HttpClient,
  ) { }

  private authInit() {
    this.authService.initialize();
    this.authService.userObservable.subscribe(user => this.state = {...this.state, user});
    setTimeout(() => {
      this.setLoading(false);
    }, 2000)
  }

  async profileInit() {
    const result: any = await this.http.get(environment.url + 'profile/get')
    .toPromise();

    if (result.data) {
      this.state.profiles = result.data;
      this.stateSubject.next(this.state);
    }else {
      this.state.profiles = [];
      this.stateSubject.next(this.state);
    }
  }

  init() {
    this.authInit();
    this.profileInit();
  }

  // functions related to the service
  public setLoading(status: Boolean) {
    this.state.loading = status;
    this.stateSubject.next(this.state);
  }
}
