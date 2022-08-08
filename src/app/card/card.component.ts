import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  // instructs this class compon that will receive 4 properties with those names
  // when we want to create it from other component-template file(app.component.html)
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() username = '';
  @Input() content = '';

  constructor() {}

  ngOnInit(): void {}
}
