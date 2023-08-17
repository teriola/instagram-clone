import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideNavComponent } from './sidenav/sidenav.component';

@NgModule({
    declarations: [SideNavComponent],
    imports: [CommonModule, RouterModule],
    exports: [SideNavComponent],
})
export class CoreModule {}
