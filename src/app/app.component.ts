import { Component } from '@angular/core';
import { ChartSelectEvent } from 'ng2-google-charts';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googlecharttest';

  public ganttData:any =  {
  chartType: 'Gantt',
  dataTable: [
    ['Task ID', 'Task Name', 'Start Date', 'End Date', 'Duration', 'Percent Complete', 'Deependencies'],
    ['1', 'Task 1', new Date(2016,0,1), new Date(2017,1,1), 200, 100, null],
    ['2', 'Task 2', new Date(2017,1,2), new Date(2018,2,3), null, 60, '1'],
    ['3', 'Task 3', new Date(2018,2,2), new Date(2019,3,3), null, 20, '2'],
    ['4', 'Task 4', new Date(2017,1,2), new Date(2018,3,3), null, 20, '1'],
    // ['Research', 'Find sources',new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
    // ['Write', 'Write paper', null, new Date(2015, 0, 9), this.daysToMilliseconds(3), 25, 'Research,Outline'],
    // ['Cite', 'Create bibliography', null, new Date(2015, 0, 7), this.daysToMilliseconds(1), 20, 'Research'],
    // ['Complete', 'Hand in paper', null, new Date(2015, 0, 10), this.daysToMilliseconds(1), 0, 'Cite,Write'],
    // ['Outline', 'Outline paper', null, new Date(2015, 0, 6), this.daysToMilliseconds(1), 100, 'Research']
  ],
    options:{
      title: 'Project',
      height: 275,
      gantt:{
        barHeight: 30,
      }
    }
  }

  public select(event: ChartSelectEvent){
    event.message = 'uaaaaa';
    alert(event.message);
  }

  daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }

}
