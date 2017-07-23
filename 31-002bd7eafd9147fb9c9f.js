webpackJsonp([31],{138:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),o.d(n,"sources",function(){return t});var t=[{filename:"component.ts",contents:o(397)},{filename:"template.html",contents:o(398)},{filename:"module.ts",contents:o(399)}]},397:function(e,n){e.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent } from 'angular-calendar';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  view: string = 'month';\n\n  viewDate: Date = new Date();\n\n  events: Array<CalendarEvent<{ id: number }>> = [\n    {\n      title: 'Event 1',\n      color: colors.yellow,\n      start: new Date(),\n      meta: {\n        id: 1\n      }\n    },\n    {\n      title: 'Event 2',\n      color: colors.blue,\n      start: new Date(),\n      meta: {\n        id: 2\n      }\n    }\n  ];\n}\n"},398:function(e,n){e.exports='<mwl-demo-utils-calendar-header\n  [(view)]="view"\n  [(viewDate)]="viewDate">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]="view">\n  <mwl-calendar-month-view\n    *ngSwitchCase="\'month\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    [activeDayIsOpen]="true">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase="\'week\'"\n    [viewDate]="viewDate"\n    [events]="events">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase="\'day\'"\n    [viewDate]="viewDate"\n    [events]="events">\n  </mwl-calendar-day-view>\n</div>'},399:function(e,n){e.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"}});
//# sourceMappingURL=31-002bd7eafd9147fb9c9f.js.map