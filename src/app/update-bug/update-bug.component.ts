import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';
@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css']
})
export class UpdateBugComponent implements OnInit {
  title: string = 'Create Bug';
  bug: Bug = new Bug(); //model -stores all form data
  bugId: any;
  constructor(private bugService: BugService) { }

  updateBug(id:any){
    const bugId = id;
    const promise = this.bugService.updateBug(this.bug);
    promise.subscribe(response=> {
      console.log(response);
      alert('bug added..')
      //this.bugArray.push(Object.assign({}, this.user));
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
