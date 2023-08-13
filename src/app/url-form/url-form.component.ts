import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.scss']
})
export class UrlFormComponent implements OnInit {
  public registerForm!: FormGroup;

  public domains = [
    'https://www.google.com',
    'https://www.facebook.com',
  ]

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      url: ['', Validators.required],
      domain: ['https://www.google.com', Validators.required],
      path: ['']
    });
    // Disable the domain form control
    this.registerForm.get('domain')?.disable();
  };
}
