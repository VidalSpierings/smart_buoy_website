import { Component, inject } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DashboardService } from '../../../../services/dashboard.service';

@Component({
  selector: 'app-buoy-statistics',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './buoy-statistics.component.html',
  styleUrl: './buoy-statistics.component.css'
})
export class BuoyStatisticsComponent {

  dashboardService: DashboardService = inject(DashboardService);

  dummyJSObjectsArray: object[] = [{}];

  chartDataContents = {};

  chartData = {};

  /*

  chartData = {
    labels: ['Mutsters', 'Linsen', 'De Reus', 'Spierings'],
    datasets: [
      {
        label: 'Ratings',
        backgroundColor: '#9CCC65',
        borderColor: '#7CB342',
        data: [100, 95, 90, 105]
      },
      {
        label: 'Ratings2',
        backgroundColor: '#000000',
        borderColor: '#000000',
        data: [23, 32, 58, 29]
      }
    ]
  };

  */

  chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  };

  constructor(){

    this.dashboardService.getBuoyData().then((dashboardModel) => {

      const measurementNames = Object.keys(dashboardModel.historischeWaardes);
      const colors = [
        { backgroundColor: '#9CCC65', borderColor: '#7CB342' },
        { backgroundColor: '#000000', borderColor: '#000000' },
        { backgroundColor: '#FF5733', borderColor: '#C70039' },
        { backgroundColor: '#33C9FF', borderColor: '#3349FF' },
        { backgroundColor: '#FFC300', borderColor: '#FF5733' },
        { backgroundColor: '#FF8C00', borderColor: '#FF4500' },
        { backgroundColor: '#1E90FF', borderColor: '#4682B4' },
        { backgroundColor: '#32CD32', borderColor: '#228B22' },
        { backgroundColor: '#FFD700', borderColor: '#FFA500' },
        { backgroundColor: '#FF1493', borderColor: '#C71585' }
      ];

      // range of supported colors for the line on the line graph

      const timestampLabels = Object.values(dashboardModel.historischeWaardes)[0].map(entry => entry.timestamp);

      // get the timestamps

      const formattedTimes = timestampLabels.map(this.formatTimestampToTime);

      let chartDataSets: object[] = [];

      for (let i = 0; i < measurementNames.length; i++) {
        const measurementValues = Object.values(dashboardModel.historischeWaardes)[i].map(entry => entry.value);
        // get measurementValues for object at the index. I.E.: The historical measurement values for a given measurement type
        chartDataSets.push({
          label: measurementNames[i % measurementNames.length], 
          // cycle through labels
          backgroundColor: colors[i % colors.length].backgroundColor,
          borderColor: colors[i % colors.length].borderColor,
          data: measurementValues,
          /*
          // assign to the data property. Expected form is an array of numbers. With the help of the for loop,
          // the approptiate data can be set
          */
        });
      }

      this.chartDataContents = {
        labels: formattedTimes,
        datasets: chartDataSets
      }

      /*

      // the "chartData" property, ought to contain a property for labels on the x-axis, and a datasets property;
      // latter consisting of the points on the graph and associated metadata (for multiple lines), such as,
      // but not limited to, a color for the line connecting the points, and a label identifying the kind of data
      // for set line

      */

      this.chartData = this.chartDataContents;

      /*

      // assign the "chartData" property the data of the "chartDataContents" variable,
      // containing the new (meta)data for the graph. Performing this action results in
      // the chart being populated exclusively with the most recently created data

      */

    }).catch((error) => {

      console.error('Error fetching data:', error);

    });

  }

  formatTimestampToTime(timestamp: string): string {
    
    const date = new Date(timestamp);
    
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    // Format hours and minutes as "HH:MM"
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    
    return formattedTime;
    
}

}
