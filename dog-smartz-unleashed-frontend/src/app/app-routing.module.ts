import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingClassesComponent } from './components/training-classes/training-classes.component';
import { CalanderComponent } from './components/calander/calander.component';

const routes: Routes = [
  { path: 'classes', component: TrainingClassesComponent}, 
  { path: 'calander', component: CalanderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
