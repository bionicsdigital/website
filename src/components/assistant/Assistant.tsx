'use client'

import { AssistantProvider } from './AssistantProvider'
import AssistantBubble from './AssistantBubble'
import AssistantButton from './AssistantButton'
import AssistantCard from './AssistantCard'

export default function Assistant() {
  return (
    <AssistantProvider>
      <div className="pointer-events-auto fixed bottom-24 right-2 z-[9999] sm:bottom-28 sm:right-7">
        <div className="relative">
          <AssistantCard />
          <AssistantBubble />
          <AssistantButton />
        </div>
      </div>
    </AssistantProvider>
  )
}
