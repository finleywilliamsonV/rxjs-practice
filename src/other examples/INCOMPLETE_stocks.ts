type StockI = {
    symbol: string,
    price: number,
    volume: number
}
type ExchangeI = StockI[]

const exchanges: ExchangeI[] = [
    [
        { symbol: 'XFX', price: 240.22, volume: 23432 },
        { symbol: 'TNZ', price: 332.19, volume: 234 }
    ],
    [
        { symbol: 'JXJ', price: 120.22, volume: 5323 },
        { symbol: 'NYN', price: 88.47, volume: 98275 }
    ]
]

const concatAll = <T>(array: T[][]): T[] => {
    const results: T[] = []
    array.forEach((subArray) => {
        subArray.forEach((item) => {
            results.push(item)
        })
    })
    return results
}

const stocks = concatAll(exchanges)

// display in plunker preview
const displayInPreview = (string: string) => {
    const newDiv = document.createElement('div')
    const newContent = document.createTextNode(string)
    newDiv.appendChild(newContent)
    document.body.appendChild(newDiv)
}

stocks.forEach((stock) => {
    console.log(JSON.stringify(stock))
    displayInPreview(JSON.stringify(stock))
})

export {}
