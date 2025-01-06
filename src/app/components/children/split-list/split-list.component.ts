import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-split-list',
  standalone: true,
  imports: [],
  templateUrl: './split-list.component.html',
  styleUrl: './split-list.component.css'
})
export class SplitListComponent {

  @Input() timestamp: string = '∅';
  @Input() measurementsInFull: string = '∅';

  constructor(){



  }

}
