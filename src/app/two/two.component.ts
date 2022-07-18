import { Component, HostBinding, OnInit } from '@angular/core';
import { routeFadeStateTrigger, routeSlideInOutStateTrigger, routeSlideStateTrigger } from '../animations/route-animations';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  animations: [
    routeFadeStateTrigger,
    routeSlideStateTrigger,
    routeSlideInOutStateTrigger
  ]
})
export class TwoComponent implements OnInit {

  // @HostBinding('@routeFadeState') routeAnimation = true;
  // @HostBinding('@routeSlideState') routeAnimation = true;
  // @HostBinding('@routeSlideInOutState') routeAnimation = true;

  constructor() { }

  ngOnInit(): void {
  }

}
