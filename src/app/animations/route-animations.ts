import { animate, query, style, transition, trigger } from "@angular/animations";

export const routeFadeStateTrigger = trigger('routeFadeState', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(300)
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  })))
])

export const routeSlideStateTrigger = trigger('routeSlideState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave', animate(300, style({
    transform: 'translateY(+100%)',
    opacity: 0
  })))
])

export const routeSlideInOutStateTrigger = trigger('routeSlideInOutState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(100%)'
    }),
    animate(200)
  ]),
  transition(':leave', [
    animate(200, style({
      transform: 'translateX(-100%)',
      opacity: 0
    }))
  ]),
])
