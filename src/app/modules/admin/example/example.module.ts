import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { FilterPipe } from './filter.pipe';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: ExampleComponent,
    },
];

@NgModule({
    declarations: [ExampleComponent, FilterPipe],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        FormsModule,
    ],
})
export class ExampleModule {}
