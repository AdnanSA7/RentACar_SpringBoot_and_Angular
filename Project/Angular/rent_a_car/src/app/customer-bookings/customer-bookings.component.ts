import {Component, OnInit} from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {DatePipe, NgIf} from "@angular/common";
import {Button} from "primeng/button";
import {CustomerBookingsService} from "./customer-bookings.service";
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-bookings',
  standalone: true,
  imports: [
    DropdownModule,
    FormsModule,
    TableModule,
    DatePipe,
    Button,
    NgIf
  ],
  templateUrl: './customer-bookings.component.html',
  styleUrl: './customer-bookings.component.css'
})
export class CustomerBookingsComponent implements OnInit {

  carTypeOptions: any[] | undefined;
  selectedCarType: any;
  selectedStatus: any;
  statusOptions: any[] | undefined;
  carBookings!: any[];
  userId!: any;

  constructor(private bookingsService: CustomerBookingsService, private authService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    this.getCustomerBookings();
  }

  getCustomerBookings() {
    this.bookingsService.getBookingsByUser(this.userId).subscribe((data: any) => {
      this.carBookings = data;
    })
  }

}
