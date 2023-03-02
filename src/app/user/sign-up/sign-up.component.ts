import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
})
export class SignUpComponent {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    // use `MyValidators`
    this.validateForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      aadharNo: ['', [Validators.required]],
      panNo: ['', [Validators.required]],
      gstNo: ['', [Validators.required]],
      userType: ['', [Validators.required]],
      shopUniqueNo: ['', [Validators.required]],
      registrationId: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required]],

      line1: ['', [Validators.required]],
      line2: ['', [Validators.required]],
      landMark: ['', [Validators.required]],
      pinCode: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      regionCode: ['', [Validators.required]],
    });
  }
}
