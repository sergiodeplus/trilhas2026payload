import type { CollectionConfig } from 'payload'

export const Students: CollectionConfig = {
    slug: 'students',
    admin: {
        useAsTitle: 'name',
    },
    access: {
        read: () => true,
    },
    labels: {
        singular: 'Aluno',
        plural: 'Alunos',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'Nome do Aluno',
        },
        {
            name: 'avatar',
            type: 'text',
            required: true,
            label: 'URL do Avatar',
        },
        {
            name: 'badges',
            type: 'select',
            hasMany: true,
            label: 'Conquistas',
            options: [
                { label: 'Historiador', value: 'historiador' },
                { label: 'Viajante', value: 'viajante' },
                { label: 'Debate', value: 'debate' },
                { label: 'Conexões', value: 'conexoes' },
                { label: 'Leitor', value: 'leitor' },
                { label: 'Crítico', value: 'critico' },
                { label: 'Poeta', value: 'poeta' },
                { label: 'Arquiteto', value: 'arquiteto' },
                { label: 'Palavras', value: 'palavras' },
                { label: 'Revisor', value: 'revisor' },
                { label: 'Contador', value: 'contador' },
                { label: 'Argumento', value: 'argumento' },
                { label: 'Colaborador', value: 'colaborador' },
                { label: 'Persistência', value: 'persistencia' },
                { label: 'Digital', value: 'digital' }
            ],
        }
    ],
}
