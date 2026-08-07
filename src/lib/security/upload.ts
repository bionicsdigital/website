import { extname } from 'node:path'

const extensions = new Set(['.pdf', '.doc', '.docx'])
const mimeByExtension: Record<string, string[]> = {
  '.pdf': ['application/pdf'],
  '.doc': ['application/msword', 'application/x-ole-storage'],
  '.docx': ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
}

function startsWith(bytes: Uint8Array, signature: number[]) {
  return signature.every((value, index) => bytes[index] === value)
}

export function sanitizeResumeFilename(filename: string, extension: string) {
  const base = filename.replace(/\\/g, '/').split('/').pop()?.replace(/\.[^.]+$/, '') || 'resume'
  const safe = base.normalize('NFKC').replace(/[^a-zA-Z0-9_-]/g, '_').replace(/_+/g, '_').slice(0, 80) || 'resume'
  return `${safe}${extension}`
}

export function validateResumeFile(file: File, bytes: Uint8Array) {
  const extension = extname(file.name).toLowerCase()
  if (!extensions.has(extension)) return { valid: false as const, reason: 'extension' }
  if (!mimeByExtension[extension]?.includes(file.type)) return { valid: false as const, reason: 'mime' }
  let signatureValid = false
  if (extension === '.pdf') signatureValid = startsWith(bytes, [0x25, 0x50, 0x44, 0x46, 0x2d])
  if (extension === '.doc') signatureValid = startsWith(bytes, [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1])
  if (extension === '.docx') {
    const zip = startsWith(bytes, [0x50, 0x4b, 0x03, 0x04]) || startsWith(bytes, [0x50, 0x4b, 0x05, 0x06]) || startsWith(bytes, [0x50, 0x4b, 0x07, 0x08])
    const sample = Buffer.from(bytes).toString('latin1')
    signatureValid = zip && sample.includes('[Content_Types].xml') && sample.includes('word/')
  }
  if (!signatureValid) return { valid: false as const, reason: 'signature' }
  return { valid: true as const, extension, filename: sanitizeResumeFilename(file.name, extension) }
}
