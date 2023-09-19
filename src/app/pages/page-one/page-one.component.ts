import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  title:string='Lorem Ipsum';
  text:string='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius tortor at diam eleifend, in rutrum elit placerat. Donec ultricies, tortor at ultricies gravida, justo libero malesuada elit, sit amet pretium quam sem sit amet diam. Quisque et massa nulla.';
 // @Input() name:string='';
  pagename:string='Sayfa 1'
  counter: number = 0;
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();
  constructor(){}

  ngOnInit(): void {}

  onIncrement(){
    this.increment.emit();
  }
  onDecrement(){
    this.decrement.emit();
  }
  onReset(){
    this.reset.emit();
  }
}
