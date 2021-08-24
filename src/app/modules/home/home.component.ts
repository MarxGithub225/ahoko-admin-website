import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/services/auth/auth.service';
import { navBarConfig } from 'src/assets/config/general';
import { User, administratorState} from 'src/assets/config/interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userState : User
  adminState: administratorState

  appConfig = {
    navBarConfig
  };
  
  constructor(
    private authService: AuthService,
  ) { }



  ngOnInit(): void {


    this.authService.userObservable.subscribe(state => {
      this.userState = state
    })
  }
}
