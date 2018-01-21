import {Component} from "@angular/core";
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';

@Component({
    selector: 'app-calendar-month-view',
    templateUrl: './calendar.component.html',
    styleUrls:['./calendar.component.css']
})

export class CalendarComponent {
    viewDate: Date = new Date();

    events: Array<CalendarEvent<{ incrementsBadgeTotal: boolean }>> = [
        {
            title: 'Test appointment 1',
            color: {
                primary: '#e3bc08',
                secondary: '#FDF1BA'
            },
            start: new Date(),
            meta: {
                incrementsBadgeTotal: true
            }
        },
        {
            title: 'Test Appointment 2',
            color: {
                primary: '#1e90ff',
                secondary: '#D1E8FF'
            },
            start: new Date(),
            meta: {
                incrementsBadgeTotal: false
            }
        },
        {
            title: 'Test Appointment 3',
            color: {
                primary: '#1e90ff',
                secondary: '#D1E8FF'
            },
            start: new Date(this.viewDate.setDate(this.viewDate.getDate() + 3)),
            meta: {
                incrementsBadgeTotal: false
            }
        }
    ];

    beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
        body.forEach(day => {
            day.badgeTotal = day.events.filter(
                event => event.meta.incrementsBadgeTotal
            ).length;
        });
    }
}