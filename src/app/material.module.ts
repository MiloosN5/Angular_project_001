import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

 @NgModule({
   imports: [
      MatInputModule,
      MatFormFieldModule,
   ],
   exports: [
      MatInputModule,
      MatFormFieldModule,
   ],    
   providers: [],
 })
export class MaterialModule {}