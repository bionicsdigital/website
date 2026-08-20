export type AssistantExpression =
  | 'nano'
  | 'nano-wave'
  | 'nano-smile'
  | 'nano-blink'
  | 'nano-thinking'

export type AssistantState = {
  isOpen: boolean
  currentExpression: AssistantExpression
  currentMessage: string
  hovered: boolean
  thinking: boolean
  blinking: boolean
  welcomeShown: boolean
}

export type AssistantContextValue = AssistantState & {
  setHovered: (hovered: boolean) => void
  toggleOpen: () => void
  close: () => void
  openQuote: () => void
}

export const assistantImages: Record<AssistantExpression, string> = {
  nano: '/mascot/nano.svg',
  'nano-wave': '/mascot/nano-smile.svg',
  'nano-smile': '/mascot/nano-smile.svg',
  'nano-blink': '/mascot/nano-smile.svg',
  'nano-thinking': '/mascot/nano-smile.svg',
}

export const initialAssistantState: AssistantState = {
  isOpen: false,
  currentExpression: 'nano',
  currentMessage: 'How may I help?',
  hovered: false,
  thinking: false,
  blinking: false,
  welcomeShown: false,
}
