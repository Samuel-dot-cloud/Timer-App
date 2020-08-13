import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timer-app';

  max     = 1;
  current = 0;

  // tslint:disable-next-line:typedef
  start() {
    const interval = Observable.interval(100);

    interval
      .takeWhile(_ => !this.isFinished )
      .do(i => this.current += 0.1)
      .subscribe();
  }

   /// finish timer
  // tslint:disable-next-line:typedef
  finish() {
    this.current = this.max;
  }

  /// reset timer
  // tslint:disable-next-line:typedef
  reset() {
    this.current = 0;
  }


  /// Getters to prevent NaN errors

  // tslint:disable-next-line:typedef
  get maxVal() {
    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  }

  // tslint:disable-next-line:typedef
  get currentVal() {
    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  // tslint:disable-next-line:typedef
  get isFinished() {
    return this.currentVal >= this.maxVal;
  }

}
