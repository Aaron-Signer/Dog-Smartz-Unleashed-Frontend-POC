import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingClassesComponent } from './components/training-classes/training-classes.component';

const routes: Routes = [
  { path: 'classes', component: TrainingClassesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
