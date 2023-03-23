import { ComponentsModule } from './../components/components.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardsComponent } from './boards/boards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponent } from './global/global.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PagesComponent,
    BoardsComponent,
    DashboardComponent,
    GlobalComponent,
    ProjectsComponent,
    RoadmapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    ComponentsModule
  ],
  exports: [
    BoardsComponent,
    DashboardComponent,
    GlobalComponent,
    ProjectsComponent,
    RoadmapComponent,
  ]
})
export class PagesModule { }
