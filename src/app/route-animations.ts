import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';


export const fadeAnimation = trigger('routeAnimations',
  [
    // The '* => *' will trigger the animation to change between any two states
    transition('* => *', [
      query(':enter', [style({ opacity: 0 })], { optional: true }),
      query(
        ':leave',
        // here we apply a style and use the animate function to apply the style over 0.3 seconds
        [style({ opacity: 1, position: 'absolute', top: 0, height: '100%' }), animate('0.3s ease', style({ opacity: 0, top: -100 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0, top: -100 }), animate('0.3s ease', style({ opacity: 1, top: 0 }))],
        { optional: true }
      )
    ])
  ]
);

