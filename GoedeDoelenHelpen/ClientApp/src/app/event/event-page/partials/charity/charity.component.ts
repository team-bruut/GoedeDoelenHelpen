import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.scss']
})
export class CharityComponent implements OnInit {

  charity: {
    name: string,
    description: string,
  };

  constructor() { }

  ngOnInit() {
    this.charity = {
      name: 'WEM Nederland',
      description: 'Het is de missie van de christelijke stichting WEM-Nederland en haar partners om weeskinderen in Muanda van DR Congo de beste leefomstandigheden te bieden, waarbij ieder weeskind beschikt over een waardevol thuis. Dit doet WEM-Nederland door middel van het financieren en meebouwen aan familiehuizen, waterputten, boerderijen, een bakkerij en een school. Ook ondersteunt WEM- Nederland de mogelijkheid om (vak)onderwijs te volgen, zodat ieder kind een beroep kan gaan uitoefenen en uitzicht heeft op een mooie toekomst.',
    };
  }

}
