export interface Column {
    title: string,
    dataIndex: string,
    key: string
}

export interface Data {
    key: number
    name: string,
    age: number,
    address: string,
    [key: string]: string | number
}