export const rusDate = (date: string) => {
    const createDate = new Date(date);
    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }
    return createDate.toLocaleString("ru", options as {});
}

export const splitString = (str: string, maxLength: number) => {
    const strLength = str.length
    const isMax = strLength > maxLength
    if (isMax) return `${str.slice(0, maxLength).trim()}...`
    return str
}
