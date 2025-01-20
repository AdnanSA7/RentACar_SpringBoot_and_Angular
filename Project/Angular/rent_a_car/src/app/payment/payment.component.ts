import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  bookingDetails: any = {"id":6,"carId":10,"brand":"Toyota","model":"Corolla","registrationNumber":"XYZ1234","rentalType":"Daily","startDate":"2024-12-17T18:00:00.000+00:00","endDate":"2024-12-18T18:00:00.000+00:00","pickupLocation":"Dhaka","dropOffLocation":null,"hours":null,"days":null,"distance":null,"driverId":1,"driverFirstName":"John","driverLastName":"Doe","totalCost":2500.0,"status":"Pending","additionalServiceName":[],"initialAmount":500.0,"paymentMethod":"Nagad","transactionId":"Tdvadjkla22785"};

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  paymentData: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private paymentService: PaymentService,private cdRef: ChangeDetectorRef) {  }

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
        // this.bookingDetails = response;
        this.bookingDetails = {"id":response.id,"carId":response.carId,"brand":"Toyota","model":"Corolla","registrationNumber":"XYZ1234","rentalType":"Daily","startDate":"2024-12-17T18:00:00.000+00:00","endDate":"2024-12-18T18:00:00.000+00:00","pickupLocation":"Dhaka","dropOffLocation":null,"hours":null,"days":null,"distance":null,"driverId":1,"driverFirstName":"John","driverLastName":"Doe","totalCost":response.cost,"status":"Pending","additionalServiceName":[],"initialAmount":500.0,"paymentMethod":response.paymentMethod,"transactionId":response.transactionId};
        this.cdRef.detectChanges(); // Trigger change detection
        alert('Payment submitted successfully!');
        this.showDialog();
        console.log(this.bookingDetails);
        console.log(response);
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
    const printContents = document.getElementById('printIf')?.innerHTML; // Get the content of the div
  
    // Create a new window or an iframe for printing
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow?.document.write(`
      <html>
        <head>
          <title>Booking Details</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
            }
              button{
              display: none
              }
            h2 {
              color: #4CAF50;
            }
            p {
              font-size: 16px;
            }
            .print-button {
              margin-top: 20px;
              display: inline-block;
              padding: 10px;
              background-color: #4CAF50;
              color: white;
              border: none;
              cursor: pointer;
            }
            .print-button:hover {
              background-color: #45a049;
            }
          </style>
        </head>
        <body>
          <h2>Booking Details</h2>
          ${printContents} <!-- Inject the content for printing -->
          <button class="print-button" onclick="window.print();window.close();">Print</button>
        </body>
      </html>
    `);
    printWindow?.document.close();
  }
  

}
