import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
   exports: [
    MainPageComponent
   ]
})
export class DbzModule { }
