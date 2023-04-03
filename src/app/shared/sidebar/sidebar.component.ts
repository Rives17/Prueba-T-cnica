import { SubmenuService } from 'src/app/services/submenu.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  submenuItem!: any[];
  constructor(private submenuService: SubmenuService) {
    this.submenuItem = submenuService.menu
    console.log(this.submenuItem);
    
  }

}
