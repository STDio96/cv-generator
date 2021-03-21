export const isEmpty = (object) => {
    return Object.values(object).some(el => el === '')
}