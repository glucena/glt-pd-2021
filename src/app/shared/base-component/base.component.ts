import { Component, OnDestroy } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';

/**
 * Base component
 *
 * Automatically unsubscribe from observable subscriptions when the component is destroyed
 */
@AutoUnsubscribe()
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
