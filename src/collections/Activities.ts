import type { CollectionConfig } from 'payload'

export const Activities: CollectionConfig = {
    slug: 'activities',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    labels: {
        singular: 'Atividade',
        plural: 'Atividades',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Título',
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'year',
                    type: 'select',
                    required: true,
                    label: 'Ano Escolar',
                    options: [
                        { label: '6º Ano', value: '6ano' },
                        { label: '7º Ano', value: '7ano' },
                        { label: '8º Ano', value: '8ano' },
                        { label: '9º Ano', value: '9ano' },
                    ],
                    defaultValue: '6ano',
                },
                {
                    name: 'unit',
                    type: 'select',
                    required: true,
                    label: 'Unidade',
                    options: [
                        { label: 'Unidade I', value: '1' },
                        { label: 'Unidade II', value: '2' },
                        { label: 'Unidade III', value: '3' },
                    ],
                    defaultValue: '1',
                },
            ]
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Descrição',
        },
        {
            name: 'linkUrl',
            type: 'text',
            required: true,
            label: 'Link da Atividade',
        },
        {
            name: 'imageUrl',
            type: 'text',
            label: 'URL da Imagem',
        }
    ],
}
