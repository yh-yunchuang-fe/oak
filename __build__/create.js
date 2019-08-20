#!/usr/bin/env node

// $ npm run new -- --c test --d componentes/cms // 创建组件
// $ npm run new -- --p test --d componentes/cms // 创建页面

const fs = require('fs-extra');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

if (!args.c && !args.p) return console.log('\033[31m', '【ERROR】Please Input the Component/Page Name! \r\n');

if ((args.c && args.p)) return console.log('\033[31m', '【ERROR】Only can create a Component/Page at once! \r\n');

const isComponent = args.c;
let target = args.c || args.p;
target = target.split(',');
// const isPage = args.p;

const defaultDir = isComponent ? `${process.cwd()}/src/` : `${process.cwd()}/demo/src/pages/`;
const creatDir = args.d ? `${process.cwd()}/src/${args.d}/` : defaultDir;
const templateDir = isComponent ? `${process.cwd()}/__build__/template/component` : `${process.cwd()}/__build__/template/page`;

async function doCreat(t) {

    const targeDir = `${creatDir}${t}`;

    if (fs.pathExistsSync(targeDir)) return console.log('\x1b[33m%s\x1b[0m', `【WARNING】${t} in ${creatDir} has existed! \r\n`);

    await fs.readdir(templateDir, (err, files) => {
        if (err) {
            return console.log('\033[31m', '【ERROR】', err, ' \r\n');
        }
        files.length && files.map(async file => {
            await fs.readFile(`${templateDir}/${file}`, 'utf8', async function (err, data) {
                if (err) {
                    return console.log('\033[31m', '【ERROR】', err, ' \r\n');
                }

                if (!fs.pathExistsSync(targeDir)) {
                    await fs.mkdirSync(targeDir);
                }

                let fileName = t;
                if (isComponent) {
                    fileName = t.replace(/\B([A-Z])/g,"-$1").toLowerCase();
                }

                let result = data.replace(/__component_name__/g, t).replace(/__component__/g, fileName);

                const _file = file.replace('index', fileName);
                await fs.writeFile(`${targeDir}/${_file}`, result, 'utf8', function (err) {
                    if (err) return console.log(err);
                });
            });
        })
    });

    console.log('\033[32m', `【SUCCESS】${target} create success in ${targeDir} ! \r\n`);
}

target.map(doCreat);
