import { Observable, fromEvent, Subscription } from 'rxjs'

const BTN_CLICK_START: number = 0
const BTN_CLICK_MAX: number = 3

const clickyButton: HTMLElement = document.getElementById('button')

const buttonClickObservable: Observable<Event> = fromEvent(clickyButton, 'click')

const buttonClickSubscription: Subscription = (() => {
    let buttonClicks: number = BTN_CLICK_START

    return buttonClickObservable.subscribe(
        (click: MouseEvent) => {
            console.log('click:', click)

            buttonClicks++

            if (buttonClicks === BTN_CLICK_MAX) {
                buttonClickSubscription.unsubscribe()
            }
        },
        (error: Error) => {
            console.error('ERROR:', error)
        },
        () => {
            console.log('Complete!') // cannot get complete to fire
        },
    )
})()
