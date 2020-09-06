import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// importing component
import { ProgramsComponent } from './programs/programs.component';
import { RoutingModule } from '../routing/routing.module';

@NgModule({
  declarations: [ProgramsComponent],
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule
  ],
  exports: [ProgramsComponent]
})
export class HomeModule { }
