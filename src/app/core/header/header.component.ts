import { Component, OnInit } from '@angular/core';
import { DataSave } from '../../shared/data-save-service';
import { AuthService } from '../../auth/auth.service';
import { HttpEvent } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private dataSave: DataSave, private authService: AuthService ) { }

  ngOnInit() {
  }

  onSave() {
    this.dataSave.saveData()
    .subscribe(
      (response: HttpEvent<object>) => {
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
    return this.authService.isAuthenticated();
  }


}
