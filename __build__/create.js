const fs = require('fs-extra');

async function create() {
    const dirName = process.argv[2];
    if (!dirName) {
        return console.log('\033[31m', '【ERROR】Please Input the Component Name! \r\n');
    }

    const pageDir = `${process.cwd()}/src/packages/${dirName}`;
    const entries = fs.pathExistsSync(pageDir);

    if (entries) {
        return console.log('\x1b[33m%s\x1b[0m', `【WARNING】${dirName} has existed! \r\n`);
    } else {

        fs.readdir(`${process.cwd()}/__build__/template`, (err, files)=> {
            if (err) {
                return console.log('\033[31m', '【ERROR】', err, ' \r\n');
            }
            files.length && files.map(file => {
                fs.readFile(`${process.cwd()}/__build__/template/${file}`, 'utf8', function (err,data) {
                    if (err) {
                      return console.log('\033[31m', '【ERROR】', err, ' \r\n');
                    }

                    const fileName = dirName.replace(/\B([A-Z])/g,"-$1").toLowerCase();
                    let result = data.replace(/__component__/g, fileName);

                    if (!fs.pathExistsSync(pageDir)) {
                        fs.mkdirSync(pageDir);
                    }

                    fs.writeFile(`${pageDir}/${fileName}`, result, 'utf8', function (err) {
                       if (err) return console.log(err);
                    });
                  });
            })

            console.log('\033[32m', `【SUCCESS】${dirName} create success! \r\n`);
        });
    }
}

create();