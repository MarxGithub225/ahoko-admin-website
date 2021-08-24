import { Component, OnInit } from '@angular/core';

import { navBarConfig } from 'src/assets/config/general';

@Component({
  selector: 'app-menustick',
  templateUrl: './menustick.component.html',
  styleUrls: ['./menustick.component.scss']
})
export class MenustickComponent implements OnInit {

  appConfig = {
    navBarConfig
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
