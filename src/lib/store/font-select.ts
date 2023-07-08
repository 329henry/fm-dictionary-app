import { writable } from 'svelte/store'

const fontStorage = localStorage.getItem('font')

export const font = writable(fontStorage ?? 'San Serif')

font.subscribe(value => localStorage.setItem('font', value))
