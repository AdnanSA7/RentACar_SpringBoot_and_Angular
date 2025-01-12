import { Component, OnInit } from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {ChartModule} from "primeng/chart";
import {AdminBookingService} from "./admin-booking.service";
import {DatePipe, NgIf} from "@angular/common";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-admin-booking',
  standalone: true,
  imports: [
    DropdownModule,
    TableModule,
    FormsModule,
    ChartModule,
    NgIf,
    DatePipe,
    ButtonModule
  ],
  templateUrl: './admin-booking.component.html',
  styleUrl: './admin-booking.component.css'
})
export class AdminBookingComponent implements OnInit {

  constructor(private adminBookingService: AdminBookingService) {
  }



  ngOnInit(): void {
    this.getAllBookings();
  }

  carTypeOptions = [
    { label: 'Sedan', value: 'sedan' },
    { label: 'SUV', value: 'suv' },
    { label: 'Hatchback', value: 'hatchback' },
  ];
  selectedCarType: string | null = null;

  statusOptions = [
    { label: 'Pending', value: 'pending' },
    { label: 'Ongoing', value: 'ongoing' },
    { label: 'Returned', value: 'returned' },
  ];
  selectedStatus: string | null = null;

  carBookings: any;

  // carBookings = [
  //   {
  //     bookingId: 'BK-WZ1001',
  //     bookingDate: 'Aug 1, 2028',
  //     clientName: 'Alice Johnson',
  //     carModel: 'Toyota Corolla',
  //     plan: '2 Days',
  //     date: 'Aug 1, 2028 to Aug 2, 2028',
  //     driver: 'Yes',
  //     payment: '$50',
  //     status: 'Returned',
  //   },
  //   {
  //     bookingId: 'BK-WZ1002',
  //     bookingDate: 'Aug 1, 2028',
  //     clientName: 'Bob Smith',
  //     carModel: 'Honda Civic',
  //     plan: '7 Days',
  //     date: 'Aug 1, 2028 to Aug 8, 2028',
  //     driver: 'No',
  //     payment: '$350',
  //     status: 'Ongoing',
  //   },
  // ];

  timeRangeOptions = [
    { label: 'Last 8 Months', value: '8m' },
    { label: 'Last Year', value: '1y' },
    { label: 'Last 6 Months', value: '6m' },
  ];
  selectedTimeRange = '8m';

  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Done',
        backgroundColor: '#f03e3e', // Red color for "Done" bookings
        data: [300, 400, 500, 600, 450, 586, 600, 700, 800, 900, 1000, 1100],
        barPercentage: 0.5,
        categoryPercentage: 0.8,
      },
      {
        label: 'Canceled',
        backgroundColor: '#212529', // Black color for "Canceled" bookings
        data: [150, 200, 250, 300, 200, 300, 350, 400, 450, 500, 550, 600],
        barPercentage: 0.5,
        categoryPercentage: 0.8,
      },
    ],
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#495057',
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return tooltipItem.dataset.label + ': ' + tooltipItem.raw + ' Bookings';
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#6c757d',
        },
        grid: {
          drawBorder: false,
          color: 'rgba(108, 117, 125, 0.1)',
        },
      },
      y: {
        ticks: {
          color: '#6c757d',
          beginAtZero: true,
        },
        grid: {
          drawBorder: false,
          color: 'rgba(108, 117, 125, 0.1)',
        },
      },
    },
  };



  updateStatus(bookingId: number) {
    const status = confirm('Approve this booking?') ? 'Rented' : 'Pending';
    this.adminBookingService.updateBookingStatus(bookingId, status).subscribe(
      (response) => {
        console.log('Status updated successfully:', response);
        this.getAllBookings();
      },
      (error) => {
        console.error('Error updating status:', error);
      }
    );
  }

  rejectBooking(bookingId: number) {
    const status = confirm('Approve this booking?') ? 'Rejected' : 'Pending';
    this.adminBookingService.updateBookingStatus(bookingId, status).subscribe(
      (response) => {
        console.log('Status updated successfully:', response);
        this.getAllBookings();
      },
      (error) => {
        console.error('Error updating status:', error);
      }
    );
  }

  getAllBookings() {
    this.adminBookingService.getBookings().subscribe((data)=>{
      console.log(data);
      this.carBookings = data;
    });
  }


}
