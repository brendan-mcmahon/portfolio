import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
  section = 'bio'
  linkedIn = faLinkedin;
  gitHub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
