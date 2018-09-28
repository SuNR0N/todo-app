import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddItemComponent } from './components/add-item.component';
import { ContainerComponent } from './components/container.component';
import { InfoComponent } from './components/info.component';
import { ListComponent } from './components/list.component';
import { ListItemComponent } from './components/list-item.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AddItemComponent,
    ContainerComponent,
    InfoComponent,
    ListComponent,
    ListItemComponent,
  ],
  bootstrap: [ContainerComponent]
})
export class AppModule { }