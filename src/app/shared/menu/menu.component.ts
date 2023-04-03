import { Component } from '@angular/core';
import { SubmenuService } from 'src/app/services/submenu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  submenuItems!: any[];

  constructor( private submenuService: SubmenuService) {
    this.submenuItems = submenuService.menu
    
  }
}
