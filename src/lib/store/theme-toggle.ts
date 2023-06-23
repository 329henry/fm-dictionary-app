import { writable } from 'svelte/store'

const themeStorage = localStorage.getItem('theme')

export const theme = writable(themeStorage ?? 'dark')

theme.subscribe(value => localStorage.setItem('theme', value))
