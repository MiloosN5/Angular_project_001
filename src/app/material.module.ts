import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';

 @NgModule({
   imports: [
      MatInputModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatBadgeModule
   ],
   exports: [
      MatInputModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatBadgeModule
   ],    
   providers: [],
 })
export class MaterialModule {}