import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        SideNavComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        SideNavComponent,
    ]
})
export class CoreModule { }
