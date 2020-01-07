export const ISODateForAPIParams = date => {
    if (date)
        return date.toISOString().substring(0,19)+'Z'

    return ''
}