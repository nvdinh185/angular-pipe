import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoundPipe } from './round.pipe';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { NewLinePipe } from './pipes/new-line.pipe';
import { LinkifyPipe } from './pipes/linkify.pipe';
import { ApiAuthService } from './services/apiAuthService';
import { HttpClientModule } from '@angular/common/http';
import { ChanLePipe } from './pipes/chan-le.pipe';
import { LinkUrlPipe } from './pipes/link.url.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';
import { IconTypePipe } from './pipes/icon-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimeAgoPipe,
    RoundPipe,
    LearnPipeComponent,
    NewLinePipe,
    LinkifyPipe,
    ChanLePipe,
    LinkUrlPipe,
    IconTypePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
