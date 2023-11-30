import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  // searchQuery: string = '';
  @Input() searchQuery: string = '';
  @Output() searchEvent = new EventEmitter<string>();
  @Output() resetSearchEvent = new EventEmitter<void>();

  search(evt: Event) {
    evt.preventDefault();
    this.searchEvent.emit(this.searchQuery);
    console.log(this.searchQuery);
  }

  resetSearch() {
    this.resetSearchEvent.emit();
    this.searchQuery = '';
  }
}
