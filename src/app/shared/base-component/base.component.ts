import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';

/**
 * Base component
 *
 * Automatically unsubscribe from observable subscriptions when the component is destroyed
 */
@UntilDestroy({ checkProperties: true })
@Component({
    selector: 'app-base-component',
    template: 'THIS COMPONENT HAS NOT UI',
    styleUrls: []
})
export class BaseComponent implements OnDestroy {
    subscriptions: Array<Subscription> = [];

    constructor() {}

    ngOnDestroy(): void {}
}
