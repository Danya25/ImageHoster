import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {UserInformationService} from '../../shared/user-information.service';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastrService: ToastrService,
              private userInfo: UserInformationService,
              private route: Router,
              private auth: AuthService) {
  }

  formAuth: FormGroup;

  ngOnInit() {
    this.formAuth = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  OnSubmit() {
    const user = this.formAuth.value;
    this.auth.getUserByEmail(user.email, user.password).subscribe((token) => {
      if (token !== 'Error') {
        this.toastrService.success('Вход выполнен');
        localStorage.setItem(user.email, token);
        this.route.navigate(['/app']);
      } else {
        this.toastrService.error('Неправильный логин или пароль', 'Ошибка', {
          positionClass: 'toast-top-left',
          progressBar: true,
        });
      }

    });

  }
}
