import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-routing-details',
  templateUrl: './routing-details.component.html',
  styleUrls: ['./routing-details.component.css']
})
export class RoutingDetailsComponent {
  constructor(private route: ActivatedRoute, private router: Router,
    private location: Location) {

  }

 @Output() parentEmit = new  EventEmitter();
  detailPage: any
  currentId: any
@Input() public child: any;
  // @Input() public parentVariable: any;
address = 'Noida'
  ngOnInit() {
    let paramId = this.route.snapshot.paramMap.get('id');
    this.currentId = paramId;
    console.log(this.child)

  }

  sendName(){
    this.parentEmit.emit(this.address)
    console.log('Inside send Name')

  }

  getBackLocation(){
    this.location.back()
  }
}
