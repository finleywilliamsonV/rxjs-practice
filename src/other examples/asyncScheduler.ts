// https://rxjs-dev.firebaseapp.com/guide/scheduler

import { Observable, asyncScheduler } from 'rxjs'
import { observeOn } from 'rxjs/operators'

const observable = new Observable<number>((proxyObserver) => {
    proxyObserver.next(1)
    proxyObserver.next(2)
    proxyObserver.next(3)
    proxyObserver.complete()
}).pipe(
    observeOn(asyncScheduler)
)

const finalObserver = {
    next(x: number) {
        console.log(`got value ${x}`)
    },
    error(err: any) {
        console.error(`something wrong occurred: ${err}`)
    },
    complete() {
        console.log('done')
    }
}

console.log('just before subscribe')
observable.subscribe(finalObserver)
console.log('just after subscribe')
