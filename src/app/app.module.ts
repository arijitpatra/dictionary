import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookmarkPanelComponent } from './components/bookmark-panel/bookmark-panel.component';
import { HeaderPanelComponent } from './components/header-panel/header-panel.component';
import { WordsPanelComponent } from './components/words-panel/words-panel.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkPanelComponent,
    HeaderPanelComponent,
    WordsPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
