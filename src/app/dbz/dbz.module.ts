import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MainPageComponent } from './pages/main.page.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListCharacterComponent } from './components/list-character/list-character.component';

@NgModule({
  declarations: [
    MainPageComponent,
    AddCharacterComponent,
    ListCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
   exports: [
    MainPageComponent
   ]
})
export class DbzModule { }
