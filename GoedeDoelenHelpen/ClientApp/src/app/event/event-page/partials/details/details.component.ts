import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditDetailsComponent } from './edit-details/edit-details.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  event: {
    title: string,
    date: string,
    charity: string,
  };

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.event = {
      title: 'Carwash Capelle',
      date: '9 juli 2018',
      charity: 'WEM Nederland',
    };
  }

  edit(): void {
    const dialogRef = this.dialog.open(EditDetailsComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
