import type { CollectionConfig } from 'payload'

export const Links: CollectionConfig = {
    slug: 'links',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    labels: {
        singular: 'Link da Hora',
        plural: 'Links da Hora',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Título do Link',
        },
        {
            name: 'url',
            type: 'text',
            required: true,
            label: 'URL (https://...)',
        },
        {
            name: 'icon',
            type: 'text',
            required: true,
            label: 'Ícone (Digite um Emoji)',
            defaultValue: '🔗',
        }
    ],
}
