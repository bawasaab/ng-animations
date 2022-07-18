import { Component, HostBinding, OnInit } from '@angular/core';
import { routeFadeStateTrigger, routeSlideInOutStateTrigger, routeSlideStateTrigger } from '../animations/route-animations';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
  animations: [
    routeFadeStateTrigger,
    routeSlideStateTrigger,
    routeSlideInOutStateTrigger
  ]
})
export class OneComponent implements OnInit {

  // @HostBinding('@routeFadeState') routeAnimation = true;
  // @HostBinding('@routeSlideState') routeAnimation = true;
  // @HostBinding('@routeSlideInOutState') routeAnimation = true;

  constructor() { }

  ngOnInit(): void {
  }

}
