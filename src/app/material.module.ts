import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import { MatDialogModule } from "@angular/material/dialog";

 @NgModule({
   imports: [
      MatInputModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatBadgeModule,
      MatDialogModule
   ],
   exports: [
      MatInputModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatBadgeModule,
      MatDialogModule
   ],    
   providers: [],
 })
export class MaterialModule {}