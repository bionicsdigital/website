export type AnalyticsEventMap = {
  quote_form_view: { form_type: 'request_quote' }
  quote_form_start: { form_type: 'request_quote' }
  quote_form_submit: { form_type: 'request_quote' }
  quote_form_success: { form_type: 'request_quote' }
  quote_form_error: { form_type: 'request_quote'; error_stage: 'validation' | 'response' | 'network' }
  order_form_view: { form_type: 'product_order' }
  order_submit: { form_type: 'product_order' }
  order_success: { form_type: 'product_order' }
  order_error: { form_type: 'product_order'; error_stage: 'validation' | 'response' | 'network' }
  career_application_start: { form_type: 'career_application' }
  career_application_submit: { form_type: 'career_application' }
  career_application_success: { form_type: 'career_application' }
  career_application_error: { form_type: 'career_application'; error_stage: 'validation' | 'response' | 'network' }
  contact_click: { link_type: 'contact'; location: 'site' }
  phone_click: { link_type: 'phone'; location: 'site' }
  email_click: { link_type: 'email'; location: 'site' }
  whatsapp_click: { link_type: 'whatsapp'; location: 'site' }
  brochure_download: { resource_type: 'brochure'; location: 'site' }
  cta_click: { cta_name: string; location: 'site' }
}

type DataLayerMessage = Record<string, unknown> | IArguments | unknown[]

declare global {
  interface Window {
    dataLayer?: DataLayerMessage[]
    gtag?: (...args: unknown[]) => void
  }
}

export function pushDataLayer(message: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.dataLayer ??= []
  window.dataLayer.push(message)
}

export function trackEvent<Name extends keyof AnalyticsEventMap>(
  event: Name,
  parameters: AnalyticsEventMap[Name],
) {
  pushDataLayer({ event, ...parameters })
}

