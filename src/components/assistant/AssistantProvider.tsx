'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import QuoteModal from '@/components/forms/QuoteModal'
import {
  assistantMessages,
  hoverMessage,
  thinkingMessage,
  welcomeMessage,
} from './AssistantMessages'
import {
  initialAssistantState,
  type AssistantContextValue,
  type AssistantExpression,
  type AssistantState,
} from './AssistantState'
import { useEscapeKey, useOutsideClick } from './AssistantHooks'

const AssistantContext = createContext<AssistantContextValue | null>(null)

const welcomeKey = 'bionics-assistant-welcome-shown'

type AssistantProviderProps = {
  children: ReactNode
}

function randomBlinkDelay() {
  return 4000 + Math.round(Math.random() * 3000)
}

export function AssistantProvider({ children }: AssistantProviderProps) {
  const [state, setState] = useState<AssistantState>(initialAssistantState)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const messageIndexRef = useRef(0)
  const blinkTimerRef = useRef<number | null>(null)
  const messageTimerRef = useRef<number | null>(null)
  const thinkingTimerRef = useRef<number | null>(null)
  const thinkingResetTimerRef = useRef<number | null>(null)

  const close = useCallback(() => {
    setState((current) => ({ ...current, isOpen: false, currentExpression: 'nano' }))
  }, [])

  const assistantRef = useOutsideClick<HTMLDivElement>(state.isOpen, close)
  useEscapeKey(state.isOpen, close)

  const updateExpression = useCallback((expression: AssistantExpression) => {
    setState((current) => ({ ...current, currentExpression: expression }))
  }, [])

  const resetThinkingTimer = useCallback(() => {
    if (thinkingTimerRef.current) window.clearTimeout(thinkingTimerRef.current)
    if (thinkingResetTimerRef.current) window.clearTimeout(thinkingResetTimerRef.current)

    setState((current) =>
      current.thinking
        ? {
            ...current,
            thinking: false,
            currentExpression: current.hovered ? 'nano-smile' : 'nano',
          }
        : current
    )

    thinkingTimerRef.current = window.setTimeout(() => {
      setState((current) => {
        if (current.isOpen || current.hovered) return current
        return {
          ...current,
          thinking: true,
          currentExpression: 'nano-thinking',
          currentMessage: thinkingMessage,
        }
      })

      thinkingResetTimerRef.current = window.setTimeout(() => {
        setState((current) => ({
          ...current,
          thinking: false,
          currentExpression: current.hovered ? 'nano-smile' : 'nano',
        }))
        resetThinkingTimer()
      }, 2200)
    }, 8000)
  }, [])

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem(welcomeKey) === 'true'

    if (!hasSeenWelcome) {
      sessionStorage.setItem(welcomeKey, 'true')
      setState((current) => ({
        ...current,
        welcomeShown: true,
        currentExpression: 'nano-wave',
        currentMessage: welcomeMessage,
      }))

      const welcomeTimer = window.setTimeout(() => {
        setState((current) => ({
          ...current,
          currentExpression: 'nano-smile',
        }))
      }, 2000)

      const idleTimer = window.setTimeout(() => {
        setState((current) => ({
          ...current,
          currentExpression: current.hovered ? 'nano-smile' : 'nano',
        }))
      }, 3800)

      return () => {
        window.clearTimeout(welcomeTimer)
        window.clearTimeout(idleTimer)
      }
    }

    setState((current) => ({ ...current, welcomeShown: true }))
  }, [])

  useEffect(() => {
    const scheduleBlink = () => {
      blinkTimerRef.current = window.setTimeout(() => {
        setState((current) => {
          if (current.isOpen || current.hovered || current.thinking) return current
          return {
            ...current,
            blinking: true,
            currentExpression: 'nano-blink',
          }
        })

        window.setTimeout(() => {
          setState((current) => ({
            ...current,
            blinking: false,
            currentExpression:
              current.hovered || current.isOpen
                ? 'nano-smile'
                : current.thinking
                  ? 'nano-thinking'
                  : 'nano',
          }))
          scheduleBlink()
        }, 150)
      }, randomBlinkDelay())
    }

    scheduleBlink()

    return () => {
      if (blinkTimerRef.current) window.clearTimeout(blinkTimerRef.current)
    }
  }, [])

  useEffect(() => {
    messageTimerRef.current = window.setInterval(() => {
      setState((current) => {
        if (current.hovered || current.thinking || current.isOpen) return current
        messageIndexRef.current =
          (messageIndexRef.current + 1) % assistantMessages.length
        return {
          ...current,
          currentMessage: assistantMessages[messageIndexRef.current],
        }
      })
    }, 4500)

    return () => {
      if (messageTimerRef.current) window.clearInterval(messageTimerRef.current)
    }
  }, [])

  useEffect(() => {
    resetThinkingTimer()

    return () => {
      if (thinkingTimerRef.current) window.clearTimeout(thinkingTimerRef.current)
      if (thinkingResetTimerRef.current) {
        window.clearTimeout(thinkingResetTimerRef.current)
      }
    }
  }, [resetThinkingTimer])

  const setHovered = useCallback(
    (hovered: boolean) => {
      setState((current) => ({
        ...current,
        hovered,
        currentExpression: hovered
          ? 'nano-smile'
          : current.isOpen
            ? 'nano-smile'
            : 'nano',
        currentMessage: hovered ? hoverMessage : assistantMessages[messageIndexRef.current],
      }))
      resetThinkingTimer()
    },
    [resetThinkingTimer]
  )

  const toggleOpen = useCallback(() => {
    setState((current) => ({
      ...current,
      isOpen: !current.isOpen,
      currentExpression: 'nano-smile',
      currentMessage: 'How may I help?',
    }))
    resetThinkingTimer()
  }, [resetThinkingTimer])

  const openQuote = useCallback(() => {
    setQuoteOpen(true)
    setState((current) => ({ ...current, isOpen: false }))
    resetThinkingTimer()
  }, [resetThinkingTimer])

  const value = useMemo<AssistantContextValue>(
    () => ({
      ...state,
      setHovered,
      toggleOpen,
      close,
      openQuote,
    }),
    [close, openQuote, setHovered, state, toggleOpen]
  )

  return (
    <AssistantContext.Provider value={value}>
      <div ref={assistantRef}>{children}</div>
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </AssistantContext.Provider>
  )
}

export function useAssistant() {
  const context = useContext(AssistantContext)
  if (!context) {
    throw new Error('useAssistant must be used within AssistantProvider')
  }

  return context
}
