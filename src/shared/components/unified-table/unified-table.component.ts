import { Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-unified-table',
  templateUrl: './unified-table.component.html',
  styleUrls: ['./unified-table.component.scss']
})
export class UnifiedTableComponent implements OnInit, OnChanges {
  @Input() displayedColumns: string[] = []
  @Input() dataSource = []
  @Input() title: string = 'Table'
  @Input() button_title = 'Add new item'
  @Input() containsActionButtons!: boolean
  @Output() action = new EventEmitter<any>()
  @Input() containsTableAction = true
  @ContentChild(TemplateRef) actions!: TemplateRef<Element>;

  noDataWasFound = true
  constructor() { }

  ngOnInit(): void {
    // if (!this.displayedColumns?.length && this.dataSource?.length) {
    //   this.displayedColumns = Object.keys(this.dataSource[0]).map(col => { return col })
    //   this.displayedColumns.push('actions')
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource'].currentValue != null && changes['dataSource'].currentValue != undefined) {
      this.dataSource = changes['dataSource'].currentValue
    }
    if (!this.displayedColumns?.length && this.dataSource?.length > 0) {
      this.displayedColumns = Object.keys(this.dataSource[0]).map(col => { return col })
      this.displayedColumns.push('actions')
      if (this.dataSource.length) this.noDataWasFound = false
    }
  }

  performAction(row: any, action: 'edit' | 'delete' | 'add') {
    this.action.emit({ row: row, action })
  }
}
