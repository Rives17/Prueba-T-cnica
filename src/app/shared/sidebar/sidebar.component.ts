import { MenuService } from 'src/app/services/menu.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  menuItem!: any[];
  constructor(private menuService: MenuService) {
    this.menuItem = menuService.menu
    
  }

}
