import { Component, OnInit } from '@angular/core';
import { DataSave } from '../shared/data-save-service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private dataSave: DataSave) { }

  ngOnInit() {
  }

  onSave() {
    this.dataSave.saveData()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

}
