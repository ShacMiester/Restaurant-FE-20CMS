import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  subtitle: string = `The page you are looking for might have beel removed, had it's name changed, or is temporarily unavailable.`
  constructor() { }

  ngOnInit(): void {
  }

}
