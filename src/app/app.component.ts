import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clickedState', [

      state(
        'default', 
        style({
          backgroundColor: 'orange',
          width: '100px',
          height: '100px',
        })
      ),

      state(
        'clicked', 
        style({
          backgroundColor: 'blue',
          width: '300px',
          height: '50px',
        })
      ),

      transition(
        'default => clicked', 
        animate('1s 500ms ease-in')
      )
    ])
  ]
})
export class AppComponent {
  clickInfo = 'default';

  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000)
  }
}
