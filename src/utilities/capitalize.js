const capitalize = (string) => {
    return string.replace(/(?:^|\s)\S/g, a => a.toUpperCase())
}

export default capitalize