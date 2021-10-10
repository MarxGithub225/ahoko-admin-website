import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { OwnerserviceService } from '../../owner/services/ownerservice.service';
import { CentralService } from 'src/app/services/central.service';
import { ownerState } from 'src/assets/config/interfaces';

@Component({
  selector: 'app-ownerdetails',
  templateUrl: './ownerdetails.component.html',
  styleUrls: ['./ownerdetails.component.scss']
})
export class OwnerdetailsComponent implements OnInit {

  moduleState: ownerState
  ownerDetails : any = {}
  reference : any;

  constructor(
    private router: ActivatedRoute,
    private central : CentralService,
    private moduleService : OwnerserviceService,
  ) { 
    this.reference = router.snapshot.paramMap.get('id');
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
  }


  getOwners (owners, profiles) {
    this.ownerDetails =  profiles.filter(p => owners.some(o => o.reference === p.reference)).filter(ow => ow.reference === this.reference)[0]

    console.log('results', this.ownerDetails)


//     country: "Côte d'Ivoire"
// date: "1628799203795"
// email: "nguessanmarx@gmail.com"
// firstname: "Marx"
// id: "1"
// lastname: "Nguess 225"
// phone: "002250787467290"
// reference: "ZAC5WTEXROM4I0N"
 }
}
