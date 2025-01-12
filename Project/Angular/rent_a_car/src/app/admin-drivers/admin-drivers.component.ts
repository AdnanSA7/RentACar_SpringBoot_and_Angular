import { Component, OnInit } from '@angular/core';
import { DriverModel } from '../model/driverModel';
import { Router } from '@angular/router';
import { AdminDriversService } from './admin-drivers.service';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-drivers',
  standalone: true,
  imports: [CommonModule, DialogModule, TableModule, ButtonModule, FormsModule],
  templateUrl: './admin-drivers.component.html',
  styleUrl: './admin-drivers.component.css'
})
export class AdminDriversComponent implements OnInit {
rentalTypeIds!: [];

driverData: any = {
  firstName: '',
  lastName: '',
  number: '',
  nidNumber: '',
  drivingLicenseNum: '',
    carId: undefined
  };
  selectedFile!: File;
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

  drivers: DriverModel[] = [
    // { model: 'Toyota Camry', price: 50, status: 'Available' },
    // { model: 'Honda Accord', price: 60, status: 'Rented' },
    // { model: 'BMW 320i', price: 100, status: 'Available' },
    // { model: 'Ford Mustang', price: 120, status: 'Rented' }
  ];


  protected readonly Number = Number;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }


  // updateRentalTypeIds(event: any) {
  //   const value = event.target.value;
  //   this.driverData.rentalTypeIds = value.split(',').map((id: string) => Number(id.trim()));
  // }


  constructor(private adminDriverService: AdminDriversService, private router: Router) {
  }

  ngOnInit(): void {
    this.getDriver();
  }

  getDriver(){
    this.adminDriverService.getAllDriver().subscribe((res)=>{
      console.log(res);
      this.drivers = res;
    })
  }

  submitDriver(){
    this.adminDriverService.addDriver(this.driverData,this.selectedFile).subscribe(()=>{
      alert('Driver Added successfully');
      this.visible = false; // Close the modal on success
    });
  }
}
