import { Expression } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-example',
  templateUrl: './inline-example.component.html',
  styleUrls: ['./inline-example.component.css']
})
export class InlineExampleComponent {

  languageArr = ['Java', 'PHP', 'Python', 'Angular', 'HTML', 'CSS'];

  color='purple'
  twowayData = ''
  isVisible = true;

  // JIT  -> just in time
  // AOT -> Ahead of time 
}
