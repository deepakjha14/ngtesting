import {Component, ContentChildren, Directive, Input, QueryList, ViewChildren} from '@angular/core';

@Directive({selector: 'pane'})
export class Pane {
  @Input() id!: string;
}

@Component({
  selector: 'tab',
  template: `
    <div class="top-level">Top level panes: {{serializedPanes}}</div>
    <div class="nested">Arbitrary nested panes: {{serializedNestedPanes}}</div>
  `
})
export class Tab {
  @ContentChildren(Pane) topLevelPanes!: QueryList<Pane>;
  @ContentChildren(Pane, {descendants: true}) arbitraryNestedPanes!: QueryList<Pane>;

  get serializedPanes(): string {
    return this.topLevelPanes ? this.topLevelPanes.map(p => p.id).join(', ') : '';
  }
  get serializedNestedPanes(): string {
    return this.arbitraryNestedPanes ? this.arbitraryNestedPanes.map(p => p.id).join(', ') : '';
  }
}

@Component({
  selector: 'example-app',
  template: `
  difference between contentchildren and viewchildren is that they contentchildren is for content projection which mean elements that come and sit inside the component from other component and children is that it takes the component and children from template itself
    <tab>
      <pane id="1"></pane>
      <pane id="2"></pane>
      <pane id="3" *ngIf="shouldShow">
        <tab>
          <pane id="3_1"></pane>
          <pane id="3_2"></pane>
        </tab>
      </pane>
    </tab>
    <button (click)="show()">Show 3</button>
  `,
})
export class ContentChildrenComp {
  @ViewChildren(Pane) tempChildren: any;
  shouldShow = false;

  show() {
    this.shouldShow = true;
  }
}