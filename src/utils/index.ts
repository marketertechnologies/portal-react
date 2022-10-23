export const formatPrice = (str: string | number): string => str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export const getInitialsFromName = (str: string | null): string => (str || '').toString().split(' ').map(s => s.substring(0, 1).toUpperCase()).join('');