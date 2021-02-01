import { Component, OnInit } from '@angular/core';
import { Project } from './project/project.model';
import data from '../projects.json'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = data;
  selectedProject: Project = this.projects[0];

  constructor() { }

  ngOnInit(): void {
  }

}
