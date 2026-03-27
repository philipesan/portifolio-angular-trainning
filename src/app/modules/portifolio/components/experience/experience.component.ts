import { Component, signal } from '@angular/core';
import { IExperience } from '../../interfaces/IExperience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'Sleep in literal cave',
        p:'Delford City | I dont really remember when anymore'
      }, text: '<p>Sleep in Cave Eat Rock Sleep again eat more rock life is good</p>'
    }, {
      summary: {
        strong: 'Eat a really big rock',
        p:'Delford City | After 2011'
      }, text: '<p>I Eat really big rock once, it said something about touching its bacon</p>'
    }, {
      summary: {
        strong: 'Taunt Ferrothorn a lot',
        p:'Showdown | Before they nerfed me :('
      }, text: '<p>I Taunt Ferrothorn when it try to throw rock, it says very bad words back to me</p>'
    }
  ]);
}
