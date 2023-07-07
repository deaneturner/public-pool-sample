import { Subject } from 'rxjs';

export class EasyUnsubscribe {
    protected easyUnsubscribe = new Subject<void>();

    public destroy(): void {
        this.easyUnsubscribe.next();
        this.easyUnsubscribe.complete();
    }
}