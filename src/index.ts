import { Observable } from 'rxjs'

const observable = new Observable((observer:any) => {
    observer.next('Hello World!')
    observer.next('Hello Again!')
    observer.complete()
    observer.next('Bye')
})

const logItem = (val:any) => {
    const node = document.createElement('li')
    const textnode = document.createTextNode(val)
    node.appendChild(textnode)
    document.getElementById('list').appendChild(node)
}

observable.subscribe(
    (x:any) => logItem(x),
    (error: any) => logItem(`Error: ${error}`),
    () => logItem('Completed'),
)
