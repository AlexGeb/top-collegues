import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() limite: EventEmitter<number> = new EventEmitter<number>();
  @Output() pseudo: EventEmitter<string> = new EventEmitter<string>();
  limiteField: FormControl = new FormControl();
  pseudoField: FormControl = new FormControl();
  constructor() {}

  ngOnInit() {
    this.limiteField.valueChanges.subscribe(term => {
      console.log('je tappe : ', term);
      if (!term || term <= 0) {
        term = 100;
      }
      this.limite.emit(term);
    });
    this.pseudoField.valueChanges.subscribe(term => {
      this.pseudo.emit(term);
    });
  }
}
