import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  menu: any[] = [
    {
      titulo: 'Dashboard',
      url: 'dashboard',
      icono: 'dashboard',
      submenu: [
        { titulo: 'General Info', url: 'generalInfo'},
        { titulo: 'Request', url: 'request'},
        { titulo: 'Stakeholders', url: 'stakeholders'},
        { titulo: 'Team', url: 'team'},
        { titulo: 'Files', url: 'files'},
        { titulo: 'Budget', url: 'budget'},
      ]
    },
    {
      titulo: 'Boards',
      url: 'boards',
      icono: 'reorder',
      submenu2: [
        { titulo: 'General Info', url: 'generalInfo'},
        { titulo: 'Request', url: 'request'},
        { titulo: 'Stakeholders', url: 'stakeholders'},
        { titulo: 'Team', url: 'team'},
        { titulo: 'Files', url: 'files'},
        { titulo: 'Budget', url: 'budget'},
      ]
    },
    {
      titulo: 'Projects',
      url: 'projects',
      icono: 'shared',
      submenu3: [
        { titulo: 'General Info', url: 'projects/generalInfo'},
        { titulo: 'Request', url: 'request'},
        { titulo: 'Stakeholders', url: 'stakeholders'},
        { titulo: 'Team', url: 'team'},
        { titulo: 'Files', url: 'files'},
        { titulo: 'Budget', url: 'budget'},
      ]
    },
    {
      titulo: 'Roadmap',
      url: 'roadmap',
      icono: 'map',
      submenu4: [
        { titulo: 'General Info', url: 'generalInfo'},
        { titulo: 'Request', url: 'request'},
        { titulo: 'Stakeholders', url: 'stakeholders'},
        { titulo: 'Team', url: 'team'},
        { titulo: 'Files', url: 'files'},
        { titulo: 'Budget', url: 'budget'},
      ]
    },
    {
      titulo: 'Strategy',
      url: 'strategy',
      icono: 'build',
      submenu5: [
        { titulo: 'General Info', url: 'generalInfo'},
        { titulo: 'Request', url: 'request'},
        { titulo: 'Stakeholders', url: 'stakeholders'},
        { titulo: 'Team', url: 'team'},
        { titulo: 'Files', url: 'files'},
        { titulo: 'Budget', url: 'budget'},
      ]
    },
    {
      titulo: 'Global',
      url: 'global',
      icono: 'public',
      submenu6: [
        { titulo: 'General Info', url: 'generalInfo'},
        { titulo: 'Request', url: 'request'},
        { titulo: 'Stakeholders', url: 'stakeholders'},
        { titulo: 'Team', url: 'team'},
        { titulo: 'Files', url: 'files'},
        { titulo: 'Budget', url: 'budget'},
      ]
    },

  ]

}
