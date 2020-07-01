import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ResultComponent, HomeComponent],
  imports: [CommonModule, SearchRoutingModule, SharedModule],
})
export class SearchModule {}
