import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from './payment-service/payment.service';
import { FormsModule } from '@angular/forms';
import {Button} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {CurrencyPipe, DatePipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule, Button, DialogModule, CurrencyPipe, DatePipe, NgIf],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent implements OnInit {
  bookingId!: string;
  cost!: number;
  bookingDetails: any;

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  paymentData: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private paymentService: PaymentService) {  }

  ngOnInit(): void {
    // Retrieve the query parameters
    this.route.queryParams.subscribe((params) => {
      this.bookingId = params['bookingId'];
      this.cost = parseFloat(params['cost']);

      if (this.bookingId && this.cost) {
        this.paymentData = {
          bookingId: this.bookingId,
          amount: this.cost,
          initialAmount: this.cost * 0.2, // Example: 20% of cost
          paymentMethod: '',
          transactionId: '',
        };
        console.log('Payment Data:', this.paymentData);
      } else {
        alert('Missing booking information. Redirecting to the booking page.');
        this.router.navigate(['/car-booking']);
      }
    });

  }

  // proceedToPayment() {
  //   // Implement payment logic here (e.g., redirect to a payment gateway)
  //   console.log('Payment processing...');
  // }

  submitPayment() {
    // console.log(this.paymentData);
    this.paymentService.processPayment(this.paymentData).subscribe({
      next: (response) => {
        this.bookingDetails = response;
        alert('Payment submitted successfully!');
        this.showDialog();
      },
      error: (err) => {
        alert('Payment failed. Please try again.');
      },
    });
  }

  // processPayment() {
  //   const paymentData = {
  //     bookingId: this.bookingId,
  //     amount: this.paymentAmount,
  //     method: this.paymentMethod,
  //     paymentType: this.isFullPayment ? 'FULL' : 'DEPOSIT',
  //   };
  //
  //   this.paymentService.processPayment(paymentData).subscribe(
  //     (response) => {
  //       console.log('Payment successful:', response);
  //       alert('Payment processed successfully!');
  //       this.router.navigate(['/confirmation']);
  //     },
  //     (error) => {
  //       console.error('Payment failed:', error);
  //     }
  //   );
  // }
  generateInvoice() {
    // window.open();
    // Logic for generating invoice (can be a PDF download, for example)
    window.open('/generate-invoice?bookingId=' + this.bookingDetails.id);
  }
}
