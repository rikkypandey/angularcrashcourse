import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent {

  constructor(public dialog: MatDialog) {}

 

}
