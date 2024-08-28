export type VariantEnum = 'primary' | 'secondary' | 'secondary-outlined' | 'tertiary'
export const variantClasses: Record<VariantEnum, string> = {
    primary: 'bg-primary-alt',
    secondary: 'bg-primary border border-solid border-white hover:bg-primary-alt transition',
    'secondary-outlined': 'bg-primary-alt border border-solid border-border',
    tertiary: 'bg-tertiary text-secondary hover:bg-tertiary-alt transition'
}
