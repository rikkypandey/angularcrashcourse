import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MaterialExampleComponent } from 'src/app/material-example/material-example.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

 
  openDialog(){
    this.dialog.open(MaterialExampleComponent,{
        width:'400px', height:' 80%'

    })

  }
  
}
