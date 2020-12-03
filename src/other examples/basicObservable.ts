import { Observable, Observer, Subscription } from 'rxjs'

const ob$ = new Observable((observer) => {
    observer.next('a new value!')
    observer.complete()
})

const observer: Observer<string> = {
    next: (data: string) => console.log('Data Received:', data),
    error: (e: Error) => console.error('ERROR:', e),
    complete: () => console.log('Complete!')
}

const subscription: Subscription = ob$.subscribe(observer)

console.log('ob$:', ob$)
console.log('observer:', observer)
console.log('subscription:', subscription)
