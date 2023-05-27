import { Expression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { ProgressBarMode } from '@angular/material/progress-bar';


@Component({
  selector: 'app-inline-example',
  templateUrl: './inline-example.component.html',
  styleUrls: ['./inline-example.component.css']
})
export class InlineExampleComponent implements OnInit {

  languageArr = ['Java', 'PHP', 'Python', 'Angular', 'HTML', 'CSS'];

  colour ='purple'
  twowayData = 'initial value'
  
  
  isVisible = true;

  // JIT  -> just in time
  // AOT -> Ahead of time 

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

ngOnInit(){
 console.log(this.twowayData)
}

checkLog(data: any){
  console.log(data)
}



}
