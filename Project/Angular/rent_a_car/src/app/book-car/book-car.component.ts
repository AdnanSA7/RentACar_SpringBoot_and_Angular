import {Component, OnInit} from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { BookCarServiceService } from './service/book-car-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-car',
  standalone: true,
  imports: [ToolbarModule, AvatarModule, FloatLabelModule, DropdownModule, CalendarModule, FormsModule, CommonModule],
  templateUrl: './book-car.component.html',
  styleUrl: './book-car.component.css',
})
export class BookCarComponent implements OnInit{

  hoursValue: number | undefined;

  private readonly KEY_VALUE = 'carData';
  private readonly KEY_VALUE1 = 'bookingData';

  selectedRentalType: string = '';
  selectedStartLocation: string = '';
  selectedEndLocation: string = '';
  selectedCategory: any;
  startDate!: Date;
  endDate!: Date;

  availableCars: any[] = [];
  errorMessage: string = '';

  rentalTypes: any[] = [];         // Full API data
  serviceTypes: any[] = [];        // For Service Type Dropdown
  filteredCarCategories: any[] = []; // Car Categories Based on Selected Rental Type
  selectedServiceType: any;        // Stores the selected Rental Type
  startLocation = [
    { name: 'Dhaka' },
    { name: 'Chittagong' },
    { name: 'Sylhet' },
  ];
  endLocation = [{ name: 'Dhaka' }, { name: 'Chittagong' }, { name: 'Sylhet' }];

  // isDarkMode = false;

  constructor(private service: BookCarServiceService, private router: Router) {
    // console.log(this.selectedServiceType);
  }

  ngOnInit() {
    // const theme = localStorage.getItem('theme');
    // this.isDarkMode = theme === 'dark';
    // this.applyTheme();
    this.getAllCarTypes();
  }

  // toggleTheme() {
  //   this.isDarkMode = !this.isDarkMode;
  //   localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  //   this.applyTheme();
  // }

  // private applyTheme() {
  //   const body = document.body;
  //   body.classList.toggle('dark', this.isDarkMode);
  //   body.classList.toggle('light', !this.isDarkMode);
  // }


  getAllCarTypes(){
    this.service.getAllCar().subscribe((data)=>{

      this.rentalTypes = data;

      // Extract Service Types
      this.serviceTypes = data.map((item:any) => ({
        id: item.id,
        name: item.rentalType_name,
      }));

      // // Flatten and Remove Duplicates for Car Categories
      // const carSet = new Set<string>();
      // data.forEach((item:any) => {
      //   item.carCategoryNames.forEach((category: string) => carSet.add(category));
      // });
      // this.carCategories = Array.from(carSet).map((name) => ({ name }));
    });
  }

// Filter Car Categories Based on Selected Service Type
  onServiceTypeChange(event: any): void {
    const selectedRental = this.rentalTypes.find((type) => type.rentalType_name === event.value.name);
    this.filteredCarCategories = selectedRental?.carCategoryNames.map((name: string) => ({ name })) || [];
  }


  // Fetch cars and navigate to the results page
  searchCars() {
    if (!this.selectedServiceType || !this.startDate) {
      alert('Please select a service type and pick-up date');
      return;
    }


    const rentalTypeName = this.selectedServiceType.name;
    const categoryName = this.selectedCategory.name;
    const startDate = this.startDate;
    const endDate = this.endDate;

    this.service.fetchAvailableCars(rentalTypeName, categoryName, startDate).subscribe(
      (cars) =>
      {

        if(cars){
          const bookingInfo = {
            selectedServiceType : rentalTypeName,
            startDate,
            categoryName,
            endDate,
            startLocation : this.selectedStartLocation,
            endLocation : this.selectedEndLocation,
            hoursValue : this.hoursValue
          }

          if(localStorage.getItem(this.KEY_VALUE)!= null || localStorage.getItem(this.KEY_VALUE1)!= null){
            localStorage.removeItem(this.KEY_VALUE);
            localStorage.removeItem(this.KEY_VALUE1);
          }
          // Serialize the cars array to a string before storing in localStorage
          localStorage.setItem(this.KEY_VALUE, JSON.stringify(cars));
          localStorage.setItem(this.KEY_VALUE1, JSON.stringify(bookingInfo));

          this.service.setAvailableCars(cars); // Save cars in the service
          this.router.navigate(['/available-cars']); // Navigate to the results page
        }
      }
    );
  }


  // Fetch Available Cars
  // fetchAvailableCars() {
  //   if (!this.selectedRentalType || !this.selectedCategory || !this.startDate) {
  //     this.errorMessage = 'Please fill all the fields!';
  //     return;
  //   }
  //   this.errorMessage = '';
  //
  //   this.service
  //     .getAvailableCars(this.selectedRentalType, this.selectedCategory, this.startDate)
  //     .subscribe(
  //       (data) => {
  //         this.availableCars = data;
  //       },
  //       (error) => {
  //         console.error('Error fetching available cars:', error);
  //         this.errorMessage = 'Failed to fetch available cars. Please try again.';
  //       }
  //     );
  // }

}
