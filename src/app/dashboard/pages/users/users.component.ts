import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import {User } from './models'
import { UsersService } from './users.service';
import { Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userName ='';

  users: Observable<User[]>;

  constructor (
    private matDialog: MatDialog,
    private usersService: UsersService, 
    ) {

      

      this.users = this.usersService.getUsers()
      this.usersService.loadUsers()
      //  this.usersService.getUsers().subscribe({
      //    next: (v)=> {
      //      this.users = v
      //      this.usersService.sendNotification('Se cargaron los usuarios')
      //    }
      //  });
    }

  //openUsersDialog(): void {
  //  this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({next:(v) => {
  //    console.log('valor: ', v);
  //    if (!!v) {
  //      this.users = [
  //        ...this.users,
  //        {
  //          ...v,
  //          id: new Date().getTime(),
  //        },
  //      ];
  //    }

  //  },
  //});
  //}

  //onEditUser(user: User): void{
  //  this.matDialog.open(UsersDialogComponent, {
  //    data: user,
  //  }). afterClosed().subscribe({
  //    next: (v) =>{
  //      if (!!v) {
  //        this.users = this.users.map((u) => 
  //          u.id === user.id? {...u, ...v}: u); 

  //      }
  //    }
  //  });
  //}

  //onDeleteUser(userId: number): void {
  //  if (confirm('¿Esta seguro?')) {
  //  this.users = this.users.filter((u) =>u.id !== userId);
  //  }
  //}
}
