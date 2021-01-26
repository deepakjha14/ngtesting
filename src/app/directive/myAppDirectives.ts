import {AfterContentInit, ContentChildren, Directive, QueryList} from '@angular/core';

@Directive({selector: 'child-directive'})
class ChildDirective {
}

@Directive({selector: 'someDir'})
class SomeDir implements AfterContentInit {
  @ContentChildren(ChildDirective) contentChildren!: QueryList<ChildDirective>;

  ngAfterContentInit() {
    // contentChildren is set
  }
}