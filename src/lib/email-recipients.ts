export const primaryInquiryEmail = "bionicsenvirotech@gmail.com";
export const digitalInquiryEmail = "bionicsdigital@gmail.com";
export const careersInquiryEmail = "bionicshr@gmail.com";

export const defaultInquiryRecipients = [
  primaryInquiryEmail,
  digitalInquiryEmail,
] as const;

export function internalInquiryRecipients(primary?: string | null) {
  const configuredRecipients = (primary ?? "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  return Array.from(
    new Set([...configuredRecipients, ...defaultInquiryRecipients]),
  );
}

export function careerInquiryRecipients(primary?: string | null) {
  return Array.from(
    new Set([...internalInquiryRecipients(primary), careersInquiryEmail]),
  );
}
