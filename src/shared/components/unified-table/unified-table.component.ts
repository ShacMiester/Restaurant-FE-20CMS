import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-unified-table',
  templateUrl: './unified-table.component.html',
  styleUrls: ['./unified-table.component.scss']
})
export class UnifiedTableComponent implements OnInit, OnChanges {
  @Input() displayedColumns: string[] = []
  @Input() dataSource: any[] = []
  @Input() title: string = 'Table'
  @Input() button_title = 'Add new item'
  @Input() containsActionButtons!: boolean
  @Output() action = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
    if (!this.displayedColumns.length && this.dataSource.length) {
      this.displayedColumns = Object.keys(this.dataSource[0]).map(col => { return col })
      this.displayedColumns.push('actions')
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = changes['dataSource'].currentValue
    if (!this.displayedColumns.length && this.dataSource.length > 0) {
      this.displayedColumns = Object.keys(this.dataSource[0]).map(col => { return col })
      this.displayedColumns.push('actions')
    }
  }

  performAction(row: any, action: 'edit' | 'delete' | 'add') {
    this.action.emit({ row: row, action })
  }

}
