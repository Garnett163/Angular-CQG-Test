import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PackageItemComponent } from './components/packageItem/packageItem.component';
import { WeeklyDownloadsPipe } from './pipe/weekly-downloads.pipe';
import { HoverHighlightDirective } from './directive/hover.directive';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageItemComponent,
    WeeklyDownloadsPipe,
    HoverHighlightDirective,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
