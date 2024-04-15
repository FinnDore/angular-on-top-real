import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  // providers: [provideAnimations()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('wedowidth', [
      // ...

      state(
        'false',
        style({
          width: '*',
        })
      ),
      state(
        'true',
        style({
          width: '*',
        })
      ),

      transition('true <=> false', [animate('1s ease-in-out')]),
      transition('* <=> *', [animate('1s ease-in-out')]),

      // transition('void <=> *', [animate('.15s ease-in-out')]),
      // transition('* <=> void', [animate('.15s ease-in-out')]),
      // transition('* <> *', [
      //   animate(
      //     '.15s cubic-bezier(.18,-0.54,.79,1.31)',
      //     style({
      //       width: '*',
      //     })
      //   ),
      // ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  trigger = false;
  title = 'some text';

  titles = [
    'some text',
    'another more diffent text thats long another more diffent text thats long',
    'another more diffent ',
  ];
  random() {
    this.trigger = !this.trigger;
    this.title = `${
      this.titles.filter((x) => x !== this.title)[
        Math.max(Math.floor(Math.random() * this.titles.length - 1), 0)
      ]
    }`;
    this.ref.detectChanges();
  }

  ngOnInit() {
    this.ref.detectChanges();
  }

  constructor(private ref: ChangeDetectorRef) {
    this.ref.detach();
  }
}
