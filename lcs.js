function lcsm(...strings) {
    if (strings.length === 0) return '';

    let fs = strings[0];
    let lcss = '';

    for (let i = 0; i < fs.length; i++) {
        for (let j = i + 1; j <= fs.length; j++) {
            let substr = fs.slice(i, j);
            if (strings.every(str => str.includes(substr))) {
                if (substr.length > lcss.length) {
                    lcss = substr;
                }
            }
        }
    }
    return lcss;
}
let [, , ...strings] = process.argv;
if (strings.length) {
    console.log(lcsm(...strings));
}
