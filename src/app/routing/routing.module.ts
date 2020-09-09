import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import of components
import { ProgramsComponent } from '../home/programs/programs.component';

const appRoutes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ProgramsComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabled'
})
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
