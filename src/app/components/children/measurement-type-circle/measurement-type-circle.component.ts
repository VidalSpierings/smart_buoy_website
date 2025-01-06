import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-measurement-type-circle',
  standalone: true,
  imports: [],
  templateUrl: './measurement-type-circle.component.html',
  styleUrl: './measurement-type-circle.component.css'
})
export class MeasurementTypeCircleComponent {

  @Input() measurementTypeEmojiText: string = '❌';
  @Input() measurementText: string = '∅';

  // values after the equals signs, are the initially assigned values

}
