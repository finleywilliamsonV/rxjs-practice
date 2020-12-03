import { Observable, of } from 'rxjs'
import { filter, map } from 'rxjs/operators'

const squareEvens: Observable<number> = of(1, 2, 3, 4, 5, 6)
    .pipe(
        filter((num: number) => num % 2 === 0),
        map((num: number) => num * num)
    )

squareEvens.subscribe((num: number) => console.log(num))
