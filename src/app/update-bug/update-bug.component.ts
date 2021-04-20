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
  id: string='';
  constructor(private bugService: BugService) { }

  // updateBug(id: string){
  //   const promise = this.bugService.updateBug(this.id);
  //   promise.subscribe(response=> {
  //     console.log(response);
  //     alert('bug Updated')
  //     //this.bugArray.push(Object.assign({}, this.user));
  //   },
  //   error=> {
  //     console.log(error);
  //     alert('error happenned..')
  //   })
  //   // this.user.firstname = 'John';
  // }

  ngOnInit(): void {
  }

}
