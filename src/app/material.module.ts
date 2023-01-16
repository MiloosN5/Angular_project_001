import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule} from '@angular/material/sidenav';

 @NgModule({
   imports: [
      MatInputModule,
      MatFormFieldModule,
      MatSidenavModule
   ],
   exports: [
      MatInputModule,
      MatFormFieldModule,
      MatSidenavModule
   ],    
   providers: [],
 })
export class MaterialModule {}