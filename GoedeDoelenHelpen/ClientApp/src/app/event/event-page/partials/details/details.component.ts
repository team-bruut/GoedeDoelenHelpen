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
    date: Date,
    charity: string,
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.event = {
      title: 'Carwash Capelle',
      date: new Date('2018-05-16T00:00:00' ),
      charity: 'WEM Nederland',
    };
  }

  edit(): void {
    const dialogRef = this.dialog.open(EditDetailsComponent, {
      data: this.event
    });

    dialogRef.afterClosed().subscribe(result => {
      this.event = result;
    });
  }

  toLocalDate(dateString: Date) {
    const options = { month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', options);
  }
}
