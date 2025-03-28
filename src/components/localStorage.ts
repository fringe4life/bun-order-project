import type{ LocalStorage } from "../vite-env.d.ts";
import menuArray from "./data.ts";
const CURRENT_ORDER = 'currentOrder' as const

/**
 * @abstract Gets the current order if it exits else returns an empty array
 * @returns The localStorage object for the order
 */
function getCurrentOrder<T>(current = CURRENT_ORDER){
    const currentOrder = localStorage.getItem(current) 
    const lsObj = currentOrder && JSON.parse(currentOrder) || []
    return lsObj satisfies T
}

/**
 * 
 * @param lsObj 
 */
function storeCurrentOrder(lsObj:LocalStorage.OrderSummary[]){
    localStorage.setItem(CURRENT_ORDER, JSON.stringify(lsObj))
}
type Amount = 1 | -1
function changeOrder(amount: Amount, id: number){
    const currentOrder = getCurrentOrder()
    if(currentOrder[id]){
        currentOrder[id] += amount
    } else if( amount===1){
        currentOrder[id] = amount
    }
    storeCurrentOrder(currentOrder)
}

function clearCurrentOrder(){
    localStorage.removeItem(CURRENT_ORDER)
}

function getTotalPrice(): number {
    const lsObj = getCurrentOrder() as LocalStorage.OrderSummary[]
    // transforms the object into an array of key-value pairs,
    // then reduces it to calculate the total price by multiplying price by quantity
    const lsArray = Array.from(lsObj)
    return  lsArray.reduce((acc:number, curr:unknown,index)=> {
        return acc + (menuArray[index].price * (curr as number))
    }, 0) satisfies number
}

export {
    clearCurrentOrder,
    changeOrder,
    getCurrentOrder,
    getTotalPrice,
}