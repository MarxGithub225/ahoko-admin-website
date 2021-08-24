import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  constructor() { }

  menus = [
    {
      id: 0,
      label: 'Marques et modèles'
    },
    {
      id: 1,
      label: 'Types de véhicules'
    },
    {
      id: 2,
      label: 'Bôites de vitesse'
    },
    {
      id: 3,
      label: 'Caractéristiques'
    }
  ];

  active = 0;
  
  ngOnInit(): void {
  }

}
