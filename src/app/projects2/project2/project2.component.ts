import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/projects/project/project.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.scss']
})
export class Project2Component implements OnInit {
  @Input() project: Project;
  @Output() close = new EventEmitter<any>();
  times = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
