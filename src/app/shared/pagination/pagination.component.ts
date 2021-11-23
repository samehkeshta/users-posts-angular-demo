import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnChanges {
  @Input() items: any[] = [];
  @Input('page-size') pageSize: number = 10;
  @Output('page-changed') pageChanged: EventEmitter<number> = new EventEmitter<number>();

  pages = new Array<number>();
  currentPage = 1;

  ngOnChanges(changes: SimpleChanges) {
    this.currentPage = 1;
    this.pages = new Array<number>();

    for (var i = 1; i <= this.pagesCount; i++) {
      this.pages.push(i);
    }
  }

  get isVisible() { return this.items.length > this.pageSize; }

  get pagesCount() { return this.items.length / this.pageSize; }

  get isPreviousDisabled() { return this.currentPage == 1; }

  get isNextDisabled() { return this.currentPage == this.pagesCount; }

  onPageClick(pageNumber: number) {
    this.currentPage = pageNumber;
    this.emitPageChanged();
  }

  onPreviousClick() {
    if (this.currentPage == 1)
      return;

    this.currentPage -= 1;
    this.emitPageChanged();
  }

  onNextClick() {
    if (this.currentPage == this.pagesCount)
      return;

    this.currentPage += 1;
    this.emitPageChanged();
  }

  private emitPageChanged() {
    this.pageChanged.emit(this.currentPage);
  }
}
