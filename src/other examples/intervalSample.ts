// RxJS v6+
import { interval, Observable } from 'rxjs'
import { sample, tap } from 'rxjs/operators'

// emit value every 1s
const source: Observable<number> = interval(1000)

// sample last emitted value from source every 2s
const example: Observable<number> = source.pipe(
    sample(interval(2000))
)

// output: 0..1..2..3..4..5
const intervalSubscription = source.subscribe((val:number) => console.log('Interval:', val))

// output: 1..3..5..7..
const sampleSubscription = example.subscribe((val: number) => console.log('... Sample:', val))
