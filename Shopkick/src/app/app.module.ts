import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { routing } from './app.routing';
import { BarcodeComponent } from './barcode/barcode.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  
} from '@angular/material';
import { BarcodeFilterPipe } from './pipes/BarcodeFilter.pipe';
import { BarcodeService } from './services/barcode.service';
import { Http, HttpModule } from '@angular/Http';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { FileUploadComponent } from './admin/file/file-upload/file-upload.component';
import { FileService } from './services/file.service';
import { CompanyService } from './services/company.service';


@NgModule({
  exports : [CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ],
  imports:      [ BrowserModule, FormsModule, routing, HttpClientModule, BrowserAnimationsModule, MatSelectModule, HttpModule ],
  declarations: [ AppComponent, HelloComponent, AppLayoutComponent, SiteLayoutComponent, AppHeaderComponent, SiteHeaderComponent, SiteFooterComponent, LoginComponent, DashboardComponent, HomeComponent, AboutComponent, RegisterComponent, ProfileComponent, BarcodeComponent, BarcodeFilterPipe, AdminComponent, FileUploadComponent ],
  providers: [BarcodeService, AuthGuard, AuthService, UserService, FileService, CompanyService, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
},
 
// providers used to create fake backend
fakeBackendProvider],
  bootstrap:    [ AppComponent, BarcodeComponent ],
  
})
export class AppModule { }
