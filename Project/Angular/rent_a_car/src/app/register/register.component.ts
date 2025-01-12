import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserModel} from "../model/userModel";
import {CustomerService} from "../Customer/customer.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0]{1}[1]{1}[0-9]{9}')]]
    },
      {
        validators: this.passwordMatchValidator
      }
    );
    console.log(this.userForm.invalid)
  }

  passwordMatchValidator(control: AbstractControl){
    return control.get('password')?.value === control.get('confirmPassword')?.value
      ? null : {mismatch: true};
  }

  save(user: UserModel) {
    // console.log(user);
    console.log(this.userForm.invalid)
    this.customerService.addUser(user).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }
}
