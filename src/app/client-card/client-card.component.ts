import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from '../client.service';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {
  @Input() client;
  bonus: number;
  maxBonus: number;
  constructor(public clientService: ClientService,
              public companyService: CompanyService) { }

  ngOnInit() {
    this.clientService.getClientBonus(1, 2)
      .subscribe( data => {
        this.bonus = data;
      });
    this.companyService.getCompanies().subscribe(data => this.maxBonus = data[0].maxBonus);
  }

  public onSubmit() {
    console.log(this.maxBonus);
    this.clientService.increaseBonus('1111', 'coffy').subscribe(data => {this.bonus = data; if (this.bonus > this.maxBonus) {
      this.clientService.resetBonus('1111', 'coffy');
    }});
  }

}
