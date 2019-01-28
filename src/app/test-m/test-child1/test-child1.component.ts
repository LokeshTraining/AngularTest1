import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-child1',
  templateUrl: './test-child1.component.html',
  styleUrls: ['./test-child1.component.css']
})
export class TestChild1Component implements OnInit {
  @Input() public uName: string;
  @Output() sayName: EventEmitter<number> = new EventEmitter();
  public testVar: boolean;
  
  private _count: number = 0;

  constructor() { }

  ngOnInit() {
  }

  sayNameToParent() {
    this._count++;
    this.sayName.emit(this._count)
  }

}
