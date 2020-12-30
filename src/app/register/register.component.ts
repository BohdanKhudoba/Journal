import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit() {
    const formData = {...this.form.value};
    // дані з форми які потім можна відправити на сервер
    this.router.navigateByUrl('/main')
  }

}
