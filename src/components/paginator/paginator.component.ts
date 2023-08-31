import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Output() sendLetter: EventEmitter<string> = new EventEmitter<string>();

  letters = [
    { "letter": "a" },
    { "letter": "b" },
    { "letter": "c" },
    { "letter": "d" },
    { "letter": "e" },
    { "letter": "f" },
    { "letter": "g" },
    { "letter": "h" },
    { "letter": "i" },
    { "letter": "j" },
    { "letter": "k" },
    { "letter": "l" },
    { "letter": "m" },
    { "letter": "n" },
    { "letter": "o" },
    { "letter": "p" },
    { "letter": "q" },
    { "letter": "r" },
    { "letter": "s" },
    { "letter": "t" },
    { "letter": "u" },
    { "letter": "v" },
    { "letter": "w" },
    { "letter": "x" },
    { "letter": "y" },
    { "letter": "z" },
    { "letter": "Todos" }
  ]

  constructor() {}

  ngOnInit() {}
}
