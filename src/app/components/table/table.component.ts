import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  public users!: any[];

  constructor(private usersService: UsersService) {
    this.usersService.getUsers()
      .subscribe(
        data => (this.users = data.results , console.log(data.results))
      )
    
  }
}
