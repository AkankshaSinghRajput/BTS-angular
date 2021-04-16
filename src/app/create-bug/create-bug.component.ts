import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreateBugComponent implements OnInit {
  title:string = 'createBug';
  bug:Bug=new Bug(); //model -stores all form data

  constructor(private bugService:BugService) { }
  save(){

    const promise = this.bugService.save(this.bug);
    promise.subscribe(response=> {
      console.log(response);
      alert('user added..')
      //this.userArray.push(Object.assign({}, this.user));
    },
    error=> {
      console.log(error);
      alert('error happenned..')
    })
    // this.user.firstname = 'John';
  }
  ngOnInit(): void {
  }

}
