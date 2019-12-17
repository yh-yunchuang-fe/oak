//@ts-nocheck

const Https = require('https')
const fs = require('fs-extra')
const Config = require('./wechatapp.config.js')
const Path = require('path')
const Fetch = require('node-fetch')

function getToken() {
    return Fetch(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${Config.APPID}&secret=${Config.APPSECRET}`).then(res => res.json())
}


function getCode(access_token) {
    const _path = process.argv.slice(2)[0]

    const body = JSON.stringify({
        path: _path,
        width: 5000,
    })

    return Fetch(`https://api.weixin.qq.com/wxa/getwxacode?access_token=${access_token}`, {
        method: 'post',
        body,
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.buffer())
        .then(buf => {
            const fileName = _path.replace(/\//g, '_')
            const tmpImage_path = Path.join(__dirname, '../static/images', `${fileName}.png`)
            fs.createWriteStream(tmpImage_path).write(buf, (err) => {
                if (err) {
                    console.error(err)
                }

                console.log('\033[32m', `【Success】Code path: ${tmpImage_path}! \r\n`)
            })
        })
}

getToken()
    .then(data => {
        getCode(data.access_token)
    })