import {Component, OnInit} from '@angular/core';
import {UserInformationService} from '../../shared/user-information.service';
import {User} from '../../models/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userInfo: UserInformationService) {
  }

  username: string = localStorage.key(0);
  ngOnInit(): void {
  }
}
