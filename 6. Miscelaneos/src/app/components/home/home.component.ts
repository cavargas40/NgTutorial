import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <br>
  <app-css></app-css>
  <br>

  <app-ngclass></app-ngclass>
  <br><br>

  <p [appHighlight]="'orange'">
    Hola mundo
  </p>
  <br>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngOnChanges(): void {
    console.log('ngOnChanges')
  }


  constructor() {
    console.log('contructor')
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

}
