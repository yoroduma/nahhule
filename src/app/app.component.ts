import { Component, Inject } from '@angular/core';
import { DrawerService } from './drawer.service';
import { Observable, of } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nahhule';
  isOpened$: Observable<boolean> = this.drawerService.isOpened$;
  isMobile$: Observable<boolean>;

  constructor(
    @Inject(DOCUMENT) private rootDocument: HTMLDocument,
    private drawerService: DrawerService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.isMobile$ = this.breakpointObserver
      .observe(Breakpoints.XSmall)
      .pipe(map((result) => result.matches));
  }

}
