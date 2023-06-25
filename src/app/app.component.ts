import { Component, ViewChild } from '@angular/core';
import {
  BryntumCalendarComponent,
  BryntumProjectModelComponent,
} from '@bryntum/calendar-angular';
import { calendarConfig, projectConfig } from './app.config';
import { LocaleManager, LocaleHelper } from '@bryntum/calendar';

import '../../node_modules/@bryntum/calendar/locales/calendar.locale.De.js';
import '../../node_modules/@bryntum/calendar/locales/calendar.locale.En.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'localeCalendar';

  resources = [
    {
      id: 1,
      name: 'Default Calendar',
      eventColor: 'green',
    },
  ];

  events = [
    {
      id: 1,
      name: 'Meeting',
      startDate: '2022-01-01T10:00:00',
      endDate: '2022-01-01T11:00:00',
      resourceId: 1,
    },
  ];

  calendarConfig: any = calendarConfig;
  projectConfig = projectConfig;

  @ViewChild('calendar') calendarComponent!: BryntumCalendarComponent;
  @ViewChild('project') projectComponent!: BryntumProjectModelComponent;

  locale = {
    // localeName: 'En',
    // localeDesc: 'English (US)',
    // localeCode: 'en-US',

    DateHelper: {
      locale: 'en-US',
      weekStartDay: 0,
      nonWorkingDays: {
        '0': true,
        '6': true,
      },
      weekends: {
        '0': true,
        '6': true,
      },
      unitNames: [
        {
          single: 'millisecond',
          plural: 'ms',
          abbrev: 'ms',
          canonicalUnitName: 'millisecond',
        },
        {
          single: 'second',
          plural: 'seconds',
          abbrev: 's',
          canonicalUnitName: 'second',
        },
        {
          single: 'minute',
          plural: 'minutes',
          abbrev: 'min',
          canonicalUnitName: 'minute',
        },
        {
          single: 'hour',
          plural: 'hours',
          abbrev: 'h',
          canonicalUnitName: 'hour',
        },
        {
          single: 'day',
          plural: 'days',
          abbrev: 'd',
          canonicalUnitName: 'day',
        },
        {
          single: 'week',
          plural: 'weeks',
          abbrev: 'w',
          canonicalUnitName: 'week',
        },
        {
          single: 'month',
          plural: 'months',
          abbrev: 'mon',
          canonicalUnitName: 'month',
        },
        {
          single: 'quarter',
          plural: 'quarters',
          abbrev: 'q',
          canonicalUnitName: 'quarter',
        },
        {
          single: 'year',
          plural: 'years',
          abbrev: 'yr',
          canonicalUnitName: 'year',
        },
        {
          single: 'decade',
          plural: 'decades',
          abbrev: 'dec',
          canonicalUnitName: 'decade',
        },
      ],
      unitAbbreviations: [
        ['mil'],
        ['s', 'sec'],
        ['m', 'min'],
        ['h', 'hr'],
        ['d'],
        ['w', 'wk'],
        ['mo', 'mon', 'mnt'],
        ['q', 'quar', 'qrt'],
        ['y', 'yr'],
        ['dec'],
      ],
      parsers: {
        L: 'MM/DD/YYYY',
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
      },
    },
    //When i am modifying the following i see the changes reflected in my app.
    //Which means that i am correctly overriding the locale i am using.
    AgendaView: {
      Agenda: 'temp',
    },
  };

  ngOnInit() {
    LocaleHelper.publishLocale('En', this.locale);
    console.log(LocaleHelper.locale);
    //LocaleManager.applyLocale('En', this.locale);
    //LocaleHelper.publishLocale();

    // setTimeout(() => {
    //   LocaleManager.applyLocale('De');
    // }, 5000);
  }
}
