import { NgModule , Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu';
import { CarouselComponent } from './carousel/carousel.component';
import { UsersideComponent } from './userside/userside.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider'
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AdminsideComponent } from './adminside/adminside.component';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentComponent } from './component.component';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    NavbarComponent,
    CarouselComponent,
    UsersideComponent,
    AdminsideComponent,
    ComponentComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    MatDividerModule,
    NgxExtendedPdfViewerModule,
    ToastrModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,

  
  
  ],
  exports:[
    NavbarComponent,
    MatMenuModule,
    CarouselComponent,
    UsersideComponent,
    MatDividerModule,
    HttpClientModule,
    AdminsideComponent,
    ComponentComponent,
  ]
})
export class ComponentModule { }
