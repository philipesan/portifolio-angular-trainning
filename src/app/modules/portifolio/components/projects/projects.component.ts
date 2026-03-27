import { Component, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = signal<IProjects[]>([
    {
      src: 'assets/images/sableye.png',
      alt: 'Project 1',
      title: 'Project 1',
      description: '<p>Project 1 description</p>',
      height: '100px',
      width: '51px',
      links: [
        {
          name: 'GitHub',
          href: 'https://github.com'
        }
      ]
    }
  ]);
}