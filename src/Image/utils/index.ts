const _getExt = (): string => {
    return 'webp'
}

var hasUnit = (size: any , unit: any): boolean => {
    if (!size) return false
    // if (!size.match("[a-z|A-Z]+", "g") && unit === "px") return true
    if (!size.match(/[a-z|A-Z]/g) && unit === 'px') return true


    // return getRegExp("^\d+" + unit + "+$", 'g').test(size.toLowerCase())
    return unit.indexOf(size.toLowerCase()) > -1
}


// var getSrc = (src: string, useWebp: boolean, width: string, pixelRatio: number, quality: number, imgRadius: string): string => {
var getSrc = (src: string, width: string, pixelRatio: number, quality: number, imgRadius: string): string => {
    if (src.indexOf('/service') > -1 || src.indexOf('/server') > -1) return src

    width = width ? width + '' : width

    var baseUrl = src
        .replace('http://image.yonghuivip.com', 'https://image.yonghuivip.com')
        .replace('image.yonghuivip.com//', 'image.yonghuivip.com/')
        .split('?')[0] + '?'

    // var thumbnail = width.match("\d+", "g") || ""
    // @ts-ignore
    var thumbnail = (width && width.match(/\d+/g)[0]) || ''
        // , format = _getExt(src, useWebp)
        , format = _getExt()
        // , serviceW = (src.match("w=(\d+)") || [])[1] || ''
        , serviceW = (src.match(/w=(\d+)/) || [])[1] || ''
        , widthScript = 'imageMogr2/auto-orient'
        , qualityScript = '/interlace/1/quality/' + quality + '/size-limit/300k!'
        , radiusScript = '|roundPic/radius/'
        , formatScript = '|imageMogr2/format/' + format


    if (hasUnit(width.toLowerCase(), 'px')) {
        thumbnail = (pixelRatio >= 2 ? Number(thumbnail) * 2 : Number(thumbnail) * pixelRatio) + ''
        thumbnail = (serviceW && serviceW < thumbnail) ? serviceW : thumbnail
    }
    if ('http://image.yonghuivip.com/yh-image-library/90c00b96-0fbb-4cf6-b429-c611afbf9044.jpg'.indexOf(src) > -1) {
        console.error(width, serviceW, 'width????')
    }

    if (width || serviceW) {
        widthScript += '/thumbnail/' + (width ? thumbnail : serviceW) + 'x'
    }
    if ('http://image.yonghuivip.com/product/R-1144342/1653029983679d94a1d0d95e1a6e27b7423a44412fc5bba80fae8.jpg?w=800&h=800'.indexOf(src) > -1) {
        console.error(imgRadius, 'radius 是什么情况----====000')
    }

    if (!imgRadius || imgRadius.split(' ').length !== 1) {
        return baseUrl + widthScript + qualityScript + formatScript
    }

    // var radius = imgRadius.match("\d+", "g")
    var radius = 0
    if (imgRadius != null) {
        // @ts-ignore
        radius = Number((imgRadius.match(/\d+/g)[0]))
    }

    if ('http://image.yonghuivip.com/product/R-1144342/1653029983679d94a1d0d95e1a6e27b7423a44412fc5bba80fae8.jpg?w=800&h=800'.indexOf(src) > -1) {
        console.error(radius, 'radius 是什么情况 0.50.5')
    }
    if (hasUnit(imgRadius.toLowerCase(), 'rpx')) radius = radius / 2

    radius = pixelRatio >= 2 ? radius * 2 : radius * pixelRatio
    if ('http://image.yonghuivip.com/product/R-1144342/1653029983679d94a1d0d95e1a6e27b7423a44412fc5bba80fae8.jpg?w=800&h=800'.indexOf(src) > -1) {
        console.error(radius, pixelRatio, 'radius 是什么情况 0.80.8')
    }
    radiusScript += radius

    return baseUrl + 'imageMogr2/format/png|'
        + widthScript
        + qualityScript
        + radiusScript
        + formatScript
}

export default getSrc