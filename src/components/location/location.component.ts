import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { CrudService } from '../admin/services/crud.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent
  extends CrudService<any, number>
  implements OnInit, OnDestroy
{
  Subscription: Subscription = new Subscription();
  branches = [];
  constructor(protected override _http: HttpClient) {
    super(_http, 'branch');
  }

  ngOnInit(): void {
    this.getBranches();
  }

  getBranches() {
    this.Subscription.add(
      this.findAll().subscribe({
        next: (v) => {
          this.branches = v;
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
  changeBranch(id: number) {
    localStorage.setItem('Branch',id.toLocaleString())
  }
}
