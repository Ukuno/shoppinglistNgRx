import { Component, OnInit } from '@angular/core';
import { DataSave } from '../../shared/data-save-service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';


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
      (response: Response) => {
      }
    );
  }

  onFetch() {
    this.dataSave.fetchData();
  }

}
