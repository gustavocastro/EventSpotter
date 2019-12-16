const imageFilter = (images, ratio, width) => {
    let image = ''
    image = images.filter(img => {
        return img.ratio === ratio && img.width === width
    })

    return image[0]
}

export default imageFilter