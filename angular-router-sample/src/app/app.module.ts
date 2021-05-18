import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
    PageNoteFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'crisis-list', component: CrisisListComponent },
      { path: 'heroes-list', component: HeroesListComponent },
      { path: '', redirectTo: '/heroes-list', pathMatch: 'full' },
      { path: '**', component: PageNoteFoundComponent }, // SI, ES ALTO TYPO TA?
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
