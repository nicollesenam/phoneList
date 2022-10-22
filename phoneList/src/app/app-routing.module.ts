import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmModalComponent } from './shared/components/confirm-modal/confirm-modal.component';
import { PeopleComponent } from './shared/components/people/people.component';

const routes: Routes = [
  {path: '', component: PeopleComponent},
  {path: 'contacts', component: PeopleComponent},
  {path: 'contacts', component: ConfirmModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
