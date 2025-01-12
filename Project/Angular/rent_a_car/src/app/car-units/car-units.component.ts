import { CommonModule, NgClass } from '@angular/common';
import { Component, model } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TableModule } from 'primeng/table';
import {DialogModule} from "primeng/dialog";
import {AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {FloatLabelModule} from "primeng/floatlabel";
import { Router } from '@angular/router';
import { MultiSelectModule } from 'primeng/multiselect';
import { CarUnitsService } from './car-units.service';
import { CarModel } from '../model/carModel';
import { CarShowDto } from '../model/carShow';

@Component({
  selector: 'app-car-units',
  standalone: true,
  imports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    TableModule,
    DropdownModule,
    PanelModule,
    CardModule,
    ProgressBarModule,
    ScrollPanelModule,
    DialogModule,
    FormsModule,
    FloatLabelModule,
    ReactiveFormsModule,
    MultiSelectModule
  ],
  templateUrl: './car-units.component.html',
  styleUrl: './car-units.component.css'
})
export class CarUnitsComponent {

  rentalTypeIds!: [];

  carData: CarModel = {
    brand: '',
    model: '',
    year: 0,
    seats: 0,
    color: '',
    registrationNumber: '',
    carCategoryId: 0,
    rentalTypeIds: []
  };
  selectedFile!: File;
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

  cars: CarShowDto[] = [
    // { model: 'Toyota Camry', price: 50, status: 'Available' },
    // { model: 'Honda Accord', price: 60, status: 'Rented' },
    // { model: 'BMW 320i', price: 100, status: 'Available' },
    // { model: 'Ford Mustang', price: 120, status: 'Rented' }
  ];


  protected readonly Number = Number;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }


  updateRentalTypeIds(event: any) {
    const value = event.target.value;
    this.carData.rentalTypeIds = value.split(',').map((id: string) => Number(id.trim()));
  }


  constructor(private formBuilder: FormBuilder, private carUnitService: CarUnitsService, private router: Router) {
  }

  ngOnInit(): void {
    // this.userForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    //   confirmPassword: ['', Validators.required],
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   phone: ['', [Validators.required, Validators.pattern('[0]{1}[1]{1}[0-9]{9}')]]
    // });

    this.getCar();
  }

  getCar(){
    this.carUnitService.getAllCar().subscribe((res)=>{
      console.log(res);
      this.cars = res;
    })
  }

  submitCar(){
    // if (this.selectedFile) {
    //   this.carUnitService.addCar(this.carData, this.selectedFile).subscribe(
    //     (response) => {
    //       // console.log('Car uploaded successfully:', response);
    //       alert('Car Added successfully');
    //       this.visible = false; // Close the modal on success
    //     },
    //     (error) => {
    //       console.error('Error uploading car:', error);
    //     }
    //   );
    // } else {
    //   console.error('No file selected!');
    // }
    this.carUnitService.addCar(this.carData,this.selectedFile).subscribe(()=>{
      alert('Car Added successfully');
      this.visible = false; // Close the modal on success
    })
    // this.carUnitService.addCar(this.carData).subscribe(()=>{
    //   alert('Car Added successfully');
    // })
  }

}
