import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildCompComponent } from './demoSampath/child-comp/child-comp.component';
import { ParentCompComponent } from './demoSampath/parent-comp/parent-comp.component';

const routes: Routes = [
  { path: '', component: ParentCompComponent },
  { path: 'parent', component: ParentCompComponent },
  { path: 'child', component: ChildCompComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
