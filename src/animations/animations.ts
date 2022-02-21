import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

export const onSideNavChange = trigger('onSideNavChange', [
  state(
    'open',
    style({
      marginLeft: '0px',
    })
  ),
  state(
    'close',
    style({
      'margin-left': '-79px',
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);

export const onSubSideNavChange = trigger('onSubSideNavChange', [
  state(
    'close',
    style({
      width: '0px',
    })
  ),
  state(
    'open',
    style({
      'min-width': '250px',
    })
  ),
  transition('close => open', animate('300ms ease-in')),
  transition('open => close', animate('300ms ease-in')),
]);

export const onMainContentChange = trigger('onMainContentChange', [
  state(
    'close',
    style({
      'margin-left': '62px',
    })
  ),
  state(
    'open',
    style({
      'margin-left': '200px',
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);

export const animateText = trigger('animateText', [
  state(
    'hide',
    style({
      display: 'none',
      opacity: 0,
    })
  ),
  state(
    'show',
    style({
      display: 'inline-block',
      opacity: 1,
    })
  ),
  transition('close => open', animate('200ms ease-in')),
  transition('open => close', animate('200ms ease-out')),
]);

export const sideMenuMobile = trigger('sideMenuMobile', [
  state(
    'close',
    style({
      left: '0px',
    })
  ),
  state(
    'open',
    style({
      left: '50px',
    })
  ),

  transition('open => closed', [animate('1s')]),
]);

export const moveSideMenuMobile = trigger('moveSideMenuMobile', [
  state(
    'close',
    style({
      left: '192px',
    })
  ),
  state(
    'open',
    style({
      left: '192px',
    })
  ),

  transition('open => closed', [animate('1s')]),
]);

export const dashboardsMenu = trigger('dashboardsMenu', [
  state(
    'close',
    style({
      width: '0',
      opacity: '0',
      fontSize: '0',
    })
  ),
  state(
    'open',
    style({
      width: '192px',
      opacity: '1',
      fontSize: '14px',
    })
  ),

  transition('open => closed', [animate('1s')]),
]);

export const translateInOut = trigger('translateInOut', [
  transition(':enter', [
    style({ transform: 'translateX({{x}})' }),
    animate('0.6s 0s cubic-bezier(0.85, 0, 0.15, 1)', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0)' }),
    animate('0.6s 0s cubic-bezier(0.85, 0, 0.15, 1)', style({ transform: 'translateX({{x}})' })),
  ]),
]);

export const scaleInOut = trigger('scaleInOut', [
  transition(':enter', [style({ transform: 'scale(0)' }), animate('0.3s', style({ transform: 'scale(1)' }))]),
  transition(':leave', [style({ transform: 'scale(1)' }), animate('0.3s', style({ transform: 'scale(0)' }))]),
]);

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(15px)' }),
    animate('0.3s 0.2s', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const tableExpansionAnimation = [
  trigger('detailExpand', [
    state('collapsed', style({ height: '0px', minHeight: '0' })),
    state('expanded', style({ height: '*' })),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]),
];

export const headerAnimation = [
  trigger('slideHeaderDown', [
    // ...
    state(
      'open',
      style({
        marginTop: '0px',
        opacity: 1,
        position: 'relative',
      })
    ),
    state(
      'closed',
      style({
        marginTop: '-60px',
        opacity: 0.5,
        position: 'relative',
      })
    ),
    transition('open => closed', [animate('0.3s')]),
    transition('closed => open', [animate('0.3s')]),
  ]),
];
