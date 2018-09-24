import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataSave } from '../../shared/data-save-service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {


  constructor(private dataSave: DataSave, private authService: AuthService ) { }



  onSave() {
    this.dataSave.saveData()
    .subscribe(
      (response: Response) => {
      }
    );
  }

  onFetch() {
    this.dataSave.fetchData();
  }

  isLogOut() {
    this.authService.isLogOut();
  }

  isAuthenticated() {
    return this.authService.isAuthernticated();
  }

}
