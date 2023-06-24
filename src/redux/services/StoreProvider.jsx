'use client'

import { store } from '@/redux/services/store'
import React from 'react'
import { Provider } from 'react-redux'

export function StoreProvider({ children }) {
    return (
        <Provider store={store}> {children} </Provider>
    )
}