export type Language = 'ARABIC' | 'ENGLISH'

export interface State {
  language: Language
}

export interface Methods {
  setLanguage(language: Language): void
}

export interface Action {
  type: ActionTypes
  payload: State
}

export type ActionTypes = 'SET_LANGUAGE'
