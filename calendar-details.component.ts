import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-details',
  template: `
    <div *ngIf="calendar">
      <h2>{{ calendar.name }}</h2>
      <p>{{ calendar.description }}</p>
    </div>
  `,
  styleUrls: ['./calendar-details.component.scss']
})
export class CalendarDetailsComponent {
  @Input() calendar: any;
}
