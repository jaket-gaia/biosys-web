import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { JsonEditorComponent } from './jsoneditor/jsoneditor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FeatureMapComponent, MarkerDirective } from './featuremap/featuremap.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';
import { ExpandableMessagesComponent } from './expandablemessages/expandablemessages.component';
import { EditRecordsTableComponent } from './edit-records-table/edit-records-table.component';
import { PyToPrimeDateFormatConversionPipe } from './pipes/date-conversion.pipe';
import { ButtonModule, MenubarModule, BreadcrumbModule, MessagesModule, ProgressBarModule, CheckboxModule, DropdownModule, DataTableModule,
    CalendarModule } from 'primeng/primeng';
import { SharedModule as PrimeSharedModule } from 'primeng/primeng';
import {BiosysCoreModule} from '../../biosys-core/biosys-core.module';


@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, MenubarModule, BreadcrumbModule, ButtonModule, MessagesModule,
        ProgressBarModule, CheckboxModule, DropdownModule, DataTableModule, CalendarModule, PrimeSharedModule, BiosysCoreModule],
    declarations: [HeaderComponent, JsonEditorComponent, NavbarComponent, BreadcrumbsComponent, FeatureMapComponent, FileuploaderComponent,
        MarkerDirective, PyToPrimeDateFormatConversionPipe, ExpandableMessagesComponent, EditRecordsTableComponent],
    exports: [CommonModule, FormsModule, RouterModule, BiosysCoreModule, HeaderComponent, JsonEditorComponent, NavbarComponent,
        BreadcrumbsComponent, EditRecordsTableComponent, ExpandableMessagesComponent, FeatureMapComponent, FileuploaderComponent,
        MarkerDirective, PyToPrimeDateFormatConversionPipe
    ]
})
export class SharedModule {}
