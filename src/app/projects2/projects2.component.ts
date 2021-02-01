import { Component, OnInit } from '@angular/core';
import { Project } from '../projects/project/project.model';
import data from '../projects.json'

@Component({
  selector: 'app-projects2',
  templateUrl: './projects2.component.html',
  styleUrls: ['./projects2.component.scss']
})
export class Projects2Component implements OnInit {
  projects: Project[] = data;
  selectedProject;
  showProject = false;

  constructor() { }

  ngOnInit(): void {
  }

  setProject(project: Project) {
    this.selectedProject = project;
    this.showProject = true;
  }

}
