export const SITE_NAME = 'Planos de estudio';
export const AUTHOR = 'Matias Gabriel Cersosimo';
export const CONTACT = 'contacto@matiascersosimo.com';
export const mailto = (asunto: string) => `mailto:${CONTACT}?subject=${encodeURIComponent(asunto)}`;
