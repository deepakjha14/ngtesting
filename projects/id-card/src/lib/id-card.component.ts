import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-id-card',
  templateUrl: './id-card.html',
  styles: [
  ]
})
export class IdCardComponent implements OnInit {
  @Input() fullName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
