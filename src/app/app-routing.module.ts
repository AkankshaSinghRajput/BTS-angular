import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBugComponent } from './create-bug/create-bug.component';
import { GetBugComponent } from './get-bug/get-bug.component';

const routes: Routes =[
  {
    path: 'createbug' ,component: CreateBugComponent
  },
  {
    path: 'searchbug' , component: GetBugComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [CreateBugComponent, GetBugComponent]
