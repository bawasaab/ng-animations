import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/one' },
  {
    path: 'one',
    component: OneComponent,
    data: { animation: { page: 'OneComponentPage'} }
  },
  {
    path: 'two',
    component: TwoComponent,
    data: { animation: { page: 'TwoComponentPage'} }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
