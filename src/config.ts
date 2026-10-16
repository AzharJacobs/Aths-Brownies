// Update these with the real business details. Empty values are hidden on the site.
export const business = {
  name: "Ath's Brownies",
  email: '', // e.g. hello@yourdomain.co.za
  whatsapp: '', // digits only, with country code, e.g. 27821234567
  instagram: 'aths.brownies',
  area: '', // e.g. Cape Town, Western Cape
  hours: 'Orders open daily. Baked fresh to order.',
  leadTime: 'Please order at least 48 hours ahead.',
  deliveryFee: 30,
  bulkMinimum: 20,
};

// Box sizes offered on the menu. Box price = price per brownie x size.
export const boxSizes = [4, 6, 12];

// Bulk tiers. Discounts are placeholders: set the real percentages.
export const bulkTiers = [
  { qty: 20, discount: 5, label: 'Starter', note: 'Small events and office treats' },
  { qty: 50, discount: 10, label: 'Event', note: 'Parties, weddings and functions', popular: true },
  { qty: 100, discount: 15, label: 'Corporate', note: 'Large events, gifting and resale' },
];

export const instagramUrl = `https://www.instagram.com/${business.instagram}/`;

// Opens WhatsApp (or email) with the order text pre-filled. No payment details are collected on the site.
export function sendUrl(subject: string, body: string): string | null {
  if (business.whatsapp) {
    return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`;
  }
  if (business.email) {
    return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return null;
}
