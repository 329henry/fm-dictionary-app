import { writable } from 'svelte/store'

const fontStorage = localStorage.getItem('font')

export const font = writable(fontStorage ?? 'Inter')

font.subscribe(value => localStorage.setItem('font', value))
