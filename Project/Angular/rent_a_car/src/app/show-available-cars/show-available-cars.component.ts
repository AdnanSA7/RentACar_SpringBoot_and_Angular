import {Component, OnInit} from '@angular/core';
import {BookCarServiceService} from "../book-car/service/book-car-service.service";
import {CommonModule} from "@angular/common";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvailableCarBookService } from './available-car-book.service';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-available-cars',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, RippleModule, FormsModule, MultiSelectModule],
  templateUrl: './show-available-cars.component.html',
  styleUrl: './show-available-cars.component.css'
})
export class ShowAvailableCarsComponent implements OnInit {

  availableCars: any[] = [];

  selectedAdditionalServiceIds: number[] = []; // To hold selected additional service IDs

  bookingData: any;

  distanceValue: number | undefined;

  visible: boolean = false;

    showDialog() {
        this.visible = true;
        // console.log(this.visible);
    }

  constructor(private carBookingService: AvailableCarBookService, private authService: LoginService, private router: Router) {}

  ngOnInit(): void {
    // this.availableCars = this.carService.getAvailableCars(); // Retrieve stored cars
     // Get 'cars' from localStorage
     const carsData = localStorage.getItem('carData');
     const bookingInfo = localStorage.getItem('bookingData');

     // If carsData is not null, parse it as JSON, otherwise fallback to an empty array
     if (carsData && bookingInfo) {
       this.availableCars = JSON.parse(carsData);
       this.bookingData = JSON.parse(bookingInfo);
     } else {
       this.availableCars = []; // Fallback to an empty array if null
       this.bookingData = null;
     }

    //  this.fetchAvailableServices()
    this.getAdditionalServices();
  }


  carBookingRequest: any = {
    carId: null,
    rentalType: '',
    startDate: '',
    endDate: '',
    pickupLocation: '',
    dropOffLocation: '',
    hours: null,
    distance: null,
    additionalServiceIds: [],
    userId: null
  };

  availableServices: any[] = [];

  fetchAvailableServices(): void {
    // Example: Fetch available services (you can replace this with actual API call)

  }

  onSubmit() {
    // Retrieve the logged-in user's ID
    const userId = this.authService.getUserId();
    console.log(userId);

    // Add the user ID to the booking request
    this.carBookingRequest.userId = userId;
    this.carBookingRequest.additionalServiceIds = this.selectedAdditionalServiceIds
    console.log(this.carBookingRequest);
    this.carBookingService.bookCar(this.carBookingRequest).subscribe(
      (response) => {
        console.log('Booking successful', response);
        alert('Booking successful');
        this.router.navigate(['/booking-summary'], { state: { bookingDetails: response } });
        // this.router.navigate(['/payment'], { state: { booking: response } });
      },
      (error) => {
        console.error('Booking failed', error);
        alert('Booking failed');
      }
    );
  }

  onBookCar(car : any) {
    // console.log(car);
    this.showDialog();
    this.carBookingRequest = {
      carId: car.id,
      rentalType: this.bookingData.selectedServiceType,  // Rental Type (Hourly/Outstation/Daily)
      startDate: this.bookingData.startDate,
      endDate: this.bookingData.endDate,
      pickupLocation: this.bookingData.startLocation.name,
      dropOffLocation: this.bookingData.endLocation.name,
      hours: this.bookingData.selectedServiceType === 'Hourly' ? this.bookingData.hoursValue : undefined,
      distance: this.bookingData.selectedServiceType === 'Outstation Round Trip' ? this.distanceValue : undefined,
      additionalServiceIds: this.selectedAdditionalServiceIds // Assumed you have a list of selected additional services
    };
  }

  // bookCar(car: any): void {
  //   const bookingRequest = {
  //     carId: car.id,
  //     rentalType: this.bookingData.selectedServiceType.name,  // Rental Type (Hourly/Outstation/Daily)
  //     startDate: this.bookingData.startDate,
  //     endDate: this.bookingData.endDate,
  //     pickupLocation: this.bookingData.startLocation,
  //     dropOffLocation: this.bookingData.endLocation,
  //     hours: this.bookingData.selectedServiceType.name === 'Hourly' ? this.bookingData.hoursValue : undefined,
  //     distance: this.bookingData.selectedServiceType.name === 'Outstation Round Trip' ? this.distanceValue : undefined,
  //     additionalServiceIds: this.selectedAdditionalServiceIds, // Assumed you have a list of selected additional services

  //   };

  //   this.carBookingService.bookCar(bookingRequest).subscribe((res)=>{
  //     if(res){
  //       alert('Booking successful');
  //     }
  //     else{
  //       alert('Booking failed');
  //     }
  //   })

  //   // this.carBookingService.bookCar(bookingRequest).subscribe((response) => {
  //   //   console.log('Booking successful', response);
  //   //   // You can show a success message or redirect to another page
  //   // }, error => {
  //   //   console.error('Booking failed', error);
  //   // });
  // }


  getAdditionalServices(){
    this.carBookingService.getAdditionalService().subscribe((data)=>{
      this.availableServices = data.map((item: any)=>({
        id: item.id,
        name: item.name,
        cost: item.cost,
        description: item.description
      }))
    })
  }

}
