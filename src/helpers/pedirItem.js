import { stock } from "../data/stock"

export const pedirItem = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(stock)
        }, 3000)
    })
} 