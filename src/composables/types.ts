export interface ChartParams {
    domId: string
    data: {
        labels: string[]
        datasets: {
            label: string
            data: number[]
            lineColor:string
        }[]
    }
}