import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() editInitiated = new EventEmitter<void>();
  @Output() deleteInitiated = new EventEmitter<void>();

  onEditInitiated(): void {
    this.editInitiated.emit();
  }

  // Perform the onClick action of whatever component is using this component (passed as a prop)

  onDeleteInitiated(): void {
    this.deleteInitiated.emit();
  }

  // Perform the onClick action of whatever component is using this component (passed as a prop)

}
