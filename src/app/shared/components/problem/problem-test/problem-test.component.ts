import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-problem-test',
  templateUrl: './problem-test.component.html',
  styleUrls: ['./problem-test.component.css'],
})
export class ProblemTestComponent {
  @Input() sampleTests: string = '';
}
