export const SITE_NAME = 'Planos de estudio';
export const CONTACT = 'contacto@tudominio.com'; // cambiar por el mail real
export const mailto = (asunto: string) => `mailto:${CONTACT}?subject=${encodeURIComponent(asunto)}`;
