export type Theme = 'light' | 'dark'

export interface State {
  theme: Theme
}

export interface Methods {
  setTheme(theme: Theme): void
}

export interface Action {
  type: ActionTypes
  payload: State
}

export type ActionTypes = 'SET_THEME'
