import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {

  public titulo!: string;

  constructor(private router: Router, private route: ActivatedRoute ) {

    this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        map(() => this.route),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }))
        .subscribe( route => this.titulo = route.snapshot.data['titulo'])

  }

}
