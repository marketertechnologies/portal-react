export const formatPrice = (str: string | number): string => str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export const getInitialsFromName = (str: string | null): string => (str || '').toString().split(' ').map(s => s.substring(0, 1).toUpperCase()).join('');

export const TEST_PROJECTS = [
    {
        uuid: '707c2a7f-a048-4d9e-8186-53f3e21b88dc',
        image: 'https://d2ou9824qr5ucu.cloudfront.net/e9cde66f50f962313c280e82c0ae1d65.webp',
        city: 'Aurdal',
        slug: 'lauvtjernveien',
        title: 'Lauvtjernveien',
        price_from: 4812510,
        price_to: 5562510,
        size_from: 50,
        size_to: 75,
        units_available: 7,
        liked: false,
    },
    {
        uuid: '594456d4-54f7-4f22-a658-4f8ba60df077',
        image: 'https://d2ou9824qr5ucu.cloudfront.net/0e91e8830545743770944a6a755c483a.webp',
        city: 'Oslo',
        slug: 'bakkebygrenda',
        title: 'Bakkebygrenda',
        price_from: 9000000,
        price_to: 11500000,
        size_from: 85,
        size_to: 120,
        units_available: 15,
        liked: true,
    },
    {
        uuid: '594456d4-54f7-4f22-a658-4f8ba60kjlkjdf077',
        city: 'Oslo',
        slug: 'bakkbygrenda-noimage',
        title: 'BakkbygrendaNoImage',
        price_from: 9000000,
        price_to: 11500000,
        size_from: 85,
        size_to: 120,
        units_available: 15,
        liked: true,
    },
    {
        uuid: '253aa18a-1267-4723-8b93-edf5037b14cf',
        image: 'https://d2ou9824qr5ucu.cloudfront.net/7ada5b9cc9536d1cc295bb2d537ff6b3.webp',
        city: 'Flekkfjord',
        slug: 'sveaasen',
        title: 'Sveåsen',
        price_from: 4812510,
        price_to: 5562510,
        size_from: 50,
        size_to: 75,
        units_available: 7,
        liked: true,
    },

];