import { ADD_VALUE, MINUS_VALUE, RESET_VALUE, TIMES_VALUE } from '../types'

export const minusValue = (count) => ({
    type: MINUS_VALUE,
    count
})

export const addValue = (count) => ({
    type: ADD_VALUE,
    count
})

export const timesValue = (count) => ({
    type: TIMES_VALUE,
    count
})

export const resetValue = (count) => ({
    type: RESET_VALUE,
    count
})