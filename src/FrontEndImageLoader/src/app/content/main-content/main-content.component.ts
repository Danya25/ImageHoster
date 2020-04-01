import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {ImgWorkerService} from '../../shared/img-worker.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private auth: AuthService, private imgServ: ImgWorkerService) { }
  img: string[] = [];

  ngOnInit(): void {
    this.imgServ.getImg().subscribe((date) => {
      if (date.length >= 1) {
        this.img = [...this.img, ...date];
      }
      console.log(date);
    });
  }
  changeTrack(index, item) {
    return item;
  }
}
