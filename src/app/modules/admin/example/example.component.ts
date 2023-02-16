import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Fonte } from './exemple.model';
import { ExempleService } from './exemple.service';

@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.components.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExampleComponent implements OnInit {
    searchTerm: string;
    fontes: Fonte;
    displayedColumns: string[] = ['id', 'user_firstname', 'status', 'action'];

    constructor(private exampleService: ExempleService) {}

    ngOnInit(): void {
        this.exampleService.getFonte().subscribe((fontes) => {
            this.fontes = fontes;
        });
    }
    search() {
        const searchParams = {
            searchTerm: this.searchTerm,
            fields: [
                'post.ID',
                'fields.proprietario.user_firstname',
                'fields.status',
            ],
        };
        this.exampleService.getData(searchParams).subscribe((fontes) => {
            this.fontes = this.fontes;
        });
    }
}
