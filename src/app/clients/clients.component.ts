import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any;
  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients()
      .subscribe( data => {
        this.clients = data;
      });
  }

}
