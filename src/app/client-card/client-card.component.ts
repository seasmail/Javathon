import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {
  @Input() client;
  bonus: number;

  constructor(public clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClientBonus(1, 2)
      .subscribe( data => {
        this.bonus = data;
      });
  }

  public onSubmit() {
    this.clientService.increaseBonus('1111', 'coffy').subscribe(data => this.bonus = data);
  }

}
