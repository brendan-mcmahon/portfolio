import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../styles.scss', './home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedPage = 'bio';

  constructor() { }

  ngOnInit(): void {
  }

}
