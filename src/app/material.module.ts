import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule} from '@angular/material/select';

 @NgModule({
   imports: [
      MatInputModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatBadgeModule,
      MatDialogModule,
      MatSelectModule
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