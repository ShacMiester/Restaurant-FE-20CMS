import { preMenuItems } from './../../../entities/menu-pre-face.entity';
import { Component, OnInit } from '@angular/core';
import { MenuPreFaceService } from '../../../services/menu-pre-face.service'

@Component({
  selector: 'app-menu-pre-face',
  templateUrl: './menu-pre-face.component.html',
  styleUrls: ['./menu-pre-face.component.scss']
})
export class MenuPreFaceComponent implements OnInit {
  preMenuItems!: preMenuItems[]
  constructor(private MenuPreFaceService: MenuPreFaceService) { }

  ngOnInit(): void {
    this.getPreMenuItems()
  }

  getPreMenuItems() {
    this.MenuPreFaceService.getPreFaceItems().subscribe(items =>
      this.preMenuItems = items)
  }
}
