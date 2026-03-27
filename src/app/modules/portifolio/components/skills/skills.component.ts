import { Component, signal } from '@angular/core';
import { ISkills } from '../../interfaces/ISkills.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  public skills = signal<ISkills[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Angular'
    },    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'CSS3'
    },    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'HTML5'
    },    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'JavaScript'
    },    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Node.js'
    },
  ]);
}
