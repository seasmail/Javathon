import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CompanyService} from '../company.service';
import {Company} from '../company.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [CompanyService],
})
export class CompaniesComponent implements OnInit {

  companies: any;

  constructor(private router: Router, private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies()
      .subscribe( data => {
        this.companies = data;
      });
  }

}
