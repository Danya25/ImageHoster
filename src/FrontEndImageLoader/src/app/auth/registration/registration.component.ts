import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {from, Observable} from 'rxjs';
import {User} from '../../models/user';
import {AuthService} from '../../shared/auth.service';
import {map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private auth: AuthService, private toastr: ToastrService) {
  }

  formReg: FormGroup;
  isRegister: boolean;

  ngOnInit(): void {
    this.formReg = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email], this.validationEmailOnReg.bind(this)),
      pass: new FormControl('', [Validators.required]),
      agree: new FormControl('', [Validators.required])
    });
  }

  validationEmailOnReg(controller: FormControl): Observable<any> {
    return from(new Promise((resolve, reject) => {
      this.auth.checkRegistr(controller.value).subscribe((data) => {
        if (!data) {
          resolve({forbiddenEmail: true});
        } else {
          resolve(null);
        }
      });
    }));
  }

  OnSubmit() {
    let user: User;
    user = {
      email: this.formReg.value.email,
      password: this.formReg.value.pass
    };
    this.auth.createUser(user).subscribe(t => {
      console.log(t);
      if (t === 'Success') {
        this.toastr.success('Удачная регистрация!');
      } else {
        this.toastr.error('Ошибка регистрации!');
      }
    });
  }
}
