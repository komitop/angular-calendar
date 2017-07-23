webpackJsonp([29],{140:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"sources",function(){return a});var a=[{filename:"component.ts",contents:t(403)},{filename:"template.html",contents:t(404)},{filename:"module.ts",contents:t(405)}]},403:function(e,n){e.exports="import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';\nimport { Http, URLSearchParams } from '@angular/http';\nimport 'rxjs/add/operator/map';\nimport { CalendarEvent } from 'angular-calendar';\nimport {\n  isSameMonth,\n  isSameDay,\n  startOfMonth,\n  endOfMonth,\n  startOfWeek,\n  endOfWeek,\n  startOfDay,\n  endOfDay,\n  format\n} from 'date-fns';\nimport { Observable } from 'rxjs/Observable';\nimport { colors } from '../demo-utils/colors';\n\ninterface Film {\n  id: number;\n  title: string;\n  release_date: string;\n}\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent implements OnInit {\n  view: string = 'month';\n\n  viewDate: Date = new Date();\n\n  events$: Observable<Array<CalendarEvent<{ film: Film }>>>;\n\n  activeDayIsOpen: boolean = false;\n\n  constructor(private http: Http) {}\n\n  ngOnInit(): void {\n    this.fetchEvents();\n  }\n\n  fetchEvents(): void {\n    const getStart: any = {\n      month: startOfMonth,\n      week: startOfWeek,\n      day: startOfDay\n    }[this.view];\n\n    const getEnd: any = {\n      month: endOfMonth,\n      week: endOfWeek,\n      day: endOfDay\n    }[this.view];\n\n    const search: URLSearchParams = new URLSearchParams();\n    search.set(\n      'primary_release_date.gte',\n      format(getStart(this.viewDate), 'YYYY-MM-DD')\n    );\n    search.set(\n      'primary_release_date.lte',\n      format(getEnd(this.viewDate), 'YYYY-MM-DD')\n    );\n    search.set('api_key', '0ec33936a68018857d727958dca1424f');\n    this.events$ = this.http\n      .get('https://api.themoviedb.org/3/discover/movie', { search })\n      .map(res => res.json())\n      .map(({ results }: { results: Film[] }) => {\n        return results.map((film: Film) => {\n          return {\n            title: film.title,\n            start: new Date(film.release_date),\n            color: colors.yellow,\n            meta: {\n              film\n            }\n          };\n        });\n      });\n  }\n\n  dayClicked({\n    date,\n    events\n  }: {\n    date: Date;\n    events: Array<CalendarEvent<{ film: Film }>>;\n  }): void {\n    if (isSameMonth(date, this.viewDate)) {\n      if (\n        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||\n        events.length === 0\n      ) {\n        this.activeDayIsOpen = false;\n      } else {\n        this.activeDayIsOpen = true;\n        this.viewDate = date;\n      }\n    }\n  }\n\n  eventClicked(event: CalendarEvent<{ film: Film }>): void {\n    window.open(\n      `https://www.themoviedb.org/movie/${event.meta.film.id}`,\n      '_blank'\n    );\n  }\n}\n"},404:function(e,n){e.exports='<mwl-demo-utils-calendar-header\n  [(view)]="view"\n  [(viewDate)]="viewDate"\n  (viewDateChange)="fetchEvents()"\n  (viewChange)="fetchEvents()">\n</mwl-demo-utils-calendar-header>\n\n<ng-template #loading>\n  <div class="text-center">\n    <i class="fa fa-spin fa-spinner fa-5x"></i>\n    <br>\n    Loading events...\n  </div>\n</ng-template>\n\n<div *ngIf="events$ | async; else loading; let events">\n  <div [ngSwitch]="view">\n    <mwl-calendar-month-view\n      *ngSwitchCase="\'month\'"\n      [viewDate]="viewDate"\n      [events]="events"\n      [activeDayIsOpen]="activeDayIsOpen"\n      (dayClicked)="dayClicked($event.day)"\n      (eventClicked)="eventClicked($event.event)">\n    </mwl-calendar-month-view>\n    <mwl-calendar-week-view\n      *ngSwitchCase="\'week\'"\n      [viewDate]="viewDate"\n      [events]="events"\n      (eventClicked)="eventClicked($event.event)">\n    </mwl-calendar-week-view>\n    <mwl-calendar-day-view\n      *ngSwitchCase="\'day\'"\n      [viewDate]="viewDate"\n      [events]="events"\n      (eventClicked)="eventClicked($event.event)">\n    </mwl-calendar-day-view>\n  </div>\n</div>'},405:function(e,n){e.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { HttpModule } from '@angular/http';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    HttpModule,\n    CalendarModule.forRoot(),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"}});
//# sourceMappingURL=29-b18c8c85b77ba127125e.js.map