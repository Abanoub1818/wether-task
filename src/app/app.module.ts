import { DropdownModule } from 'primeng/dropdown';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule }   from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WeatherStateComponent } from './components/weather-state/weather-state.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { PanelModule } from "primeng/panel";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { LineChartComponent } from './components/line-chart/line-chart.component'
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WeatherStateComponent,
    WeatherWidgetComponent,
    AreaChartComponent,
    LineChartComponent,

  ],
  imports: [
    DropdownModule,

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    PanelModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    TableModule
  ],
  providers: [MediaMatcher,MatNativeDateModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
