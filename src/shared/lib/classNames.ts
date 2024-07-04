type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))// _ is class name
            .map(([className]) => className)
    ]
        .join(' ')
}