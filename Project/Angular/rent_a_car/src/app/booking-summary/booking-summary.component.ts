import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe
  ],
  templateUrl: './booking-summary.component.html',
  styleUrl: './booking-summary.component.css'
})
export class BookingSummaryComponent implements OnInit {

  bookingDetails!: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.bookingDetails = history.state.bookingDetails;
    console.log(this.bookingDetails);

  if (!this.bookingDetails) {
    alert('No booking details found! Redirecting to the booking page.');
    this.router.navigate(['/car-booking']);
  }
  }

  proceedToPayment(): void {
    this.router.navigate(['/payment'], { queryParams: { bookingId: this.bookingDetails.id, cost: this.bookingDetails.cost } });
  }

}
