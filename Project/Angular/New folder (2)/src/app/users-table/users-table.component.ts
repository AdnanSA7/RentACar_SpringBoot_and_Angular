import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { UserModel } from '../model/userModel';
import { CustomerService } from '../Customer/customer.service';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [
    TableModule, HttpClientModule, CommonModule, InputTextModule, TagModule, 
    DropdownModule, MultiSelectModule, ProgressBarModule, ButtonModule
  ],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent implements OnInit {

  users!: UserModel[];


    statuses!: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    searchValue: string | undefined;

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        // this.customerService.getCustomersLarge().then((customers) => {
        //     this.customers = customers;
        //     this.loading = false;

        //     this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
        // });
        this.getUsers();

        // this.representatives = [
        //     { name: 'Amy Elsner', image: 'amyelsner.png' },
        //     { name: 'Anna Fali', image: 'annafali.png' },
        //     { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        //     { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        //     { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        //     { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        //     { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        //     { name: 'Onyama Limba', image: 'onyamalimba.png' },
        //     { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        //     { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
        // ];

        // this.statuses = [
        //     { label: 'Unqualified', value: 'unqualified' },
        //     { label: 'Qualified', value: 'qualified' },
        //     { label: 'New', value: 'new' },
        //     { label: 'Negotiation', value: 'negotiation' },
        //     { label: 'Renewal', value: 'renewal' },
        //     { label: 'Proposal', value: 'proposal' }
        // ];
    }

    clear(table: Table) {
        table.clear();
        this.searchValue = ''
    }

    // getSeverity(status: string) {
    //     switch (status.toLowerCase()) {
    //         case 'unqualified':
    //             return 'danger';

    //         case 'qualified':
    //             return 'success';

    //         case 'new':
    //             return 'info';

    //         case 'negotiation':
    //             return 'warning';

    //         case 'renewal':
    //             return null;
    //     }
    // }


    getUsers(){
      this.customerService.getUsers().subscribe((data)=>{
        this.users = data;
      })
    }

}
