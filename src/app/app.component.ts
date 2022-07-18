import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeState', [
      transition('* => *', [

        group([
          query(':enter', [
            style({
              transform: 'translateX(100%)',
              opacity: 0
            }),
            animate('300ms ease-out')
          ], { optional: true }),

          query(':leave', [
            animate('300ms ease-out', style({
              transform: 'translateX(-100%)',
              opacity: 0
            }))
          ], { optional: true }),
        ])
      ])
    ])
  ]
})
export class AppComponent {

  title = 'ng-animations';
  constructor(private contexts: ChildrenOutletContexts) {}

  getAnimationData(rOutlet: RouterOutlet) {
    const routeData = rOutlet.activatedRouteData['animation'];
    if( !routeData ) {
      return 'OneComponentPage';
    }
    return routeData['page'];
  }
}
