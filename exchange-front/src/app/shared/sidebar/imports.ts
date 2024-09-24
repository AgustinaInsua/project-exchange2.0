// Import PrimeNG modules
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RippleModule } from 'primeng/ripple';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  imports: [
    AvatarModule,
    AvatarGroupModule,
    SidebarModule,
    ButtonModule,
    AutoCompleteModule,
    RippleModule,
    PanelMenuModule,
    PanelModule
  ],
  exports: [
    AvatarModule,
    AvatarGroupModule,
    SidebarModule,
    ButtonModule,
    RippleModule,
    AutoCompleteModule,
    PanelMenuModule,
    PanelModule
  ],
  providers: [  ]
})
export class ImportsModule {}
