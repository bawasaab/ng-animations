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

      state(
        'mousedown', 
        style({
          backgroundColor: 'red',
          border: '1px solid black',
          width: '100px',
          height: '100px',
        })
      ),

      transition(
        'default => clicked', 
        animate('1s 500ms ease-in')
      ),

      transition(
        'clicked => default', 
        animate('1s 500ms ease-out')
      ),

      transition(
        'mousedown <=> clicked', 
        animate('1s 500ms ease-in')
      ),

      // transition(
      //   'clicked => mousedown', 
      //   animate('1s 500ms ease-out')
      // ),

    ]),

    // second trigger
    trigger('numberEnteredState', [
      state(
        'unselected',
        style({
          border: '1px solid black',
          padding: '5px',
          margin: '5px'
        })
      ),

      state(
        'selected',
        style({
          border: '2px solid black',
          padding: '5px',
          margin: '5px',
          backgroundColor: 'red',
          color: 'white'
        })
      ),

      transition(
        'unselected => selected', [
          // style({
          //   border: '2px solid black',
          //   padding: '5px',
          //   margin: '5px',
          //   backgroundColor: 'red',
          //   color: 'white'
          // }),
          animate(300)
        ]
      )
    ])
  ]
})
export class AppComponent {
  clickInfo = 'default';
  paragraphClicked = 'default';
  numberEntered!: Number;

  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000)
  }

  getNumberEntered($event: any) {
    this.numberEntered = $event.target.value

  }
}
