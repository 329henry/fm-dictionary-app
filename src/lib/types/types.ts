export interface TWord {
  word: string
  phonetic: string
  phonetics: TPhonetic[]
  meanings: TMeaning[]
  license: TLicense
  sourceUrls: string[]
}

export interface TPhonetic {
  text: string
  audio: string
  sourceUrl?: string
}

export interface TMeaning {
  partOfSpeech: string
  definitions: TDefinition[]
  synonyms: string[]
  antonyms: string[]
}

export interface TDefinition {
  definition: string
  synonyms: string[]
  antonyms: string[]
}

export interface TLicense {
  name: string
  url: string
}
