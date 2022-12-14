import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MongoComponent } from './mongo/mongo.component';
import { MonproductComponent } from './monproduct/monproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateempComponent } from './updateemp/updateemp.component';

@NgModule({
  declarations: [
    AppComponent,
    MongoComponent,
    MonproductComponent,
    UpdateempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
