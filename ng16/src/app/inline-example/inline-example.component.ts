import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-inline-example',
  templateUrl: './inline-example.component.html',
  styleUrls: ['./inline-example.component.css'],
})
export class InlineExampleComponent implements OnInit {
  constructor(private us: UserDataService , private router: Router, private route: ActivatedRoute) {
    console.log('inside Inline-example')
  }

  detailPage: any;
  currentId: any;
  languageArr = ['Java', 'PHP', 'Python', 'Angular', 'HTML', 'CSS'];

  colour = 'purple'
  twowayData = 'initial value'
  userDetails: any

  isVisible = true;

  // JIT  -> just in time
  // AOT -> Ahead of time 

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;



  ngOnInit() {
    console.log(this.twowayData)
    this.detailPage =
      [{ id: 1, language: "PHP" },
      { id: 2, language: "Angular" },
      { id: 3, language: "React" },
      { id: 4, language: "Node" },
      { id: 5, language: "NextJs" },
      ]
     this.userDetails = this.us.getUserData();
     console.log('inline component',this.userDetails)
  }

  selectLanguage(detail: any) {

    // console.log(detail.id, detail.language)
    let paramId = this.route.snapshot.paramMap.get('id');
    this.currentId = paramId;
    // console.log(paramId)

    this.router.navigate(['/rd', detail.id])


  }

  checkLog(data: any) {
    console.log(data)
  }



}
