import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LastfmComponent } from './lastfm/lastfm.component';
import { SavetrackComponent } from './savetrack/savetrack.component';
import { SearchtrackComponent } from './searchtrack/searchtrack.component';
import { UpdatetrackComponent } from './updatetrack/updatetrack.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MuzixHttpService } from './muzix-http.service';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { DeletetrackComponent } from './deletetrack/deletetrack.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LastfmComponent,
    SavetrackComponent,
    SearchtrackComponent,
    UpdatetrackComponent,
    WhishlistComponent,
    DeletetrackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot([
      {path:'search', component:SearchtrackComponent},
      {path:'searchtrack/:trackname',component:LastfmComponent},
      {path:'savetrack/:mbid',component:SavetrackComponent},
      {path:'myplaylist', component:WhishlistComponent},
      {path: 'deletetrack/:mbid', component:DeletetrackComponent},
      {path: 'updatetrack/:mbid/:comment', component:UpdatetrackComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      
    ])
  ],
  providers: [MuzixHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
