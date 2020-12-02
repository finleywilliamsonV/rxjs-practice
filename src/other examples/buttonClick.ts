import { Observable, fromEvent, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'

const contentDiv: HTMLElement = document.getElementById('content')
const button: HTMLElement = document.createElement('button')

button.innerText = 'Click Me!'
contentDiv.appendChild(button)

const BTN_CLICK_START: number = 0
const BTN_CLICK_MAX: number = 3

const clicks: Observable<Event> = fromEvent(button, 'click')

const points = clicks.pipe(
    map((click: MouseEvent) => ({
        x: click.clientX,
        y: click.clientY
    }))
)

const buttonClickSubscription: Subscription = (() => {
    let clickCount: number = BTN_CLICK_START

    return points.subscribe(
        (click: MouseEvent) => {
            console.log('click:', click)

            clickCount++

            if (clickCount === BTN_CLICK_MAX) {
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
