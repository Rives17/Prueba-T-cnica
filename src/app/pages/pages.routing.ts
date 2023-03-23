import { PagesComponent } from './pages.component';
import { StrategyComponent } from './strategy/strategy.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { ProjectsComponent } from './projects/projects.component';
import { GlobalComponent } from './global/global.component';
import { BoardsComponent } from './boards/boards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' }},
      {path: 'boards', component: BoardsComponent, data: { titulo: 'Boards' }},
      {path: 'global', component: GlobalComponent, data: { titulo: 'Global' }},
      {path: 'projects', component: ProjectsComponent, data: { titulo: 'Projects' }},
      {path: 'roadmap', component: RoadmapComponent, data: { titulo: 'Roadmap' }},
      {path: 'strategy', component: StrategyComponent, data: { titulo: 'Strategy' }},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
