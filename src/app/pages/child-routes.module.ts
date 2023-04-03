import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { StrategyComponent } from './strategy/strategy.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { ProjectsComponent } from './projects/projects.component';
import { GlobalComponent } from './global/global.component';
import { BoardsComponent } from './boards/boards.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const childRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' }},
  {path: 'boards', component: BoardsComponent, data: { titulo: 'Boards' }},
  {path: 'global', component: GlobalComponent, data: { titulo: 'Global' }},
  {path: 'projects', component: ProjectsComponent, data: { titulo: 'Projects' }},
  {path: 'roadmap', component: RoadmapComponent, data: { titulo: 'Roadmap' }},
  {path: 'strategy', component: StrategyComponent, data: { titulo: 'Strategy' }},
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
