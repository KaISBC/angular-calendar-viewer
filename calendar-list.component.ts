import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar-list',
  template: `
    <ul>
      <li *ngFor="let calendar of calendars" (click)="selectCalendar(calendar)">
        {{ calendar.name }}
      </li>
    </ul>
  `,
  styleUrls: ['./calendar-list.component.scss']
})
export class CalendarListComponent {
  calendars = [
    { id: 1, name: "Gregorio", description: "Il calendario standard." },
    { id: 2, name: "Islamico", description: "Basato sulle fasi lunari." },
    { id: 3, name: "Thailandese", description: "Anno corrente: 2567 BE." },
    { id: 4, name: "Ebraico", description: "Calendario lunisolare." },
  ];

  @Output() calendarSelected = new EventEmitter<any>();

  selectCalendar(calendar: any) {
    this.calendarSelected.emit(calendar);
  }
}
