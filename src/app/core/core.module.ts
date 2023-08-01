import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './sidenav/sidenav.component';



@NgModule({
    declarations: [
        SideNavComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SideNavComponent,
    ]
})
export class CoreModule { }
