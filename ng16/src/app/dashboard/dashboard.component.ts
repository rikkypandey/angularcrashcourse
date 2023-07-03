import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';
// import { MatInputModule } from '@angular/material/input';
import { UserDataService } from '../user-data.service';
import { Observable, catchError, switchMap } from 'rxjs';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MaterialExampleComponent } from 'src/app/material-example/material-example.component';
import { NewserviceService } from '../service/newservice.service';


/**
 * @title Card with sub-title
 */


export interface PeriodicElement {
  name: string;
  id: number;
  age: number;
}

const ELEMENT_DATA: PeriodicElement[] = []

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // standalone: true,
  // imports: [MatCardModule, MatButtonModule,MatInputModule],
})
export class DashboardComponent {
pageTitle = 'Dashboard Page';
subTitle = 'Manage User Data'

  userData : any;
  // displayedColumns: string[] = ['name', 'age', 'id'];
  displayedColumns: string[] = [ 'id','firstName','lastName','address','gender', 'age','action'];
  dataSource = ELEMENT_DATA;

constructor(private us: UserDataService, public dialog: MatDialog,
  private newService: NewserviceService){
  console.log('inside Dasboard')
}
  longText = `Click here to redirect to Inline Module.`;
  course ='Angular Course';

ngOnInit(){
  this.us.getUserData().subscribe(data => {
      this.userData = data;
      this.dataSource = data;
  }
  )  

  // this.us.getUserDBData().subscribe((data:any)=>{
  //   console.log('dbdata',data)
  //   this.userData = data;
  //   this.dataSource = data;
  // })

  this.newService.getData().subscribe((value:any) =>{
    this.dataSource = value;
  } )
}

editData(data: any) {
  this.dialog.open(MaterialExampleComponent, 
    {width: '450px',height: '80%', data : data});
}
deleteData(id: any) {

  this.newService.deleteData(id).subscribe({
    next(value) {
      alert('Data deleted Successfully!')
    }, error(err) {
      alert('Error!')
    },
  })

}

}

