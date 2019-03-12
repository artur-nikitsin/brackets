module.exports = function check(str, bracketsConfig) {

    let openingStack = {};
    let closingStack = {};
    let repeat = {};

    if (bracketsConfig[1]) {
        bracketsConfig.forEach(function (item, i) {

            if (item[0] === item[1]) {
                repeat[item[0]] = 0;
            } else {
                openingStack[item[0]] = 0;
                closingStack[item[1]] = 0;
            }
        });

    } else {
        openingStack[bracketsConfig[0][0]] = 0;
        closingStack[bracketsConfig[0][1]] = 0;
    }

    for (let i = 0; i < str.length; i++) {
        let sym = str[i];


        if (repeat[sym] >= 0 || sym === "|") {

            if (repeat[sym]) {
                repeat[sym] += 1;

            } else {
                repeat[sym] = 1;
            }


        } else if (openingStack[sym] >= 0) {

            if (openingStack[sym]) {
                openingStack[sym] += 1;

            } else {
                openingStack[sym] = 1;
            }

        } else if (closingStack[sym] >= 0) {
            if (closingStack[sym]) {
                closingStack[sym] += 1;

            } else {
                closingStack[sym] = 1;
            }
        }
    }


    let flag = [];

    bracketsConfig.forEach(function (item, i) {
        if (openingStack[item[0]] === 0 && repeat[item[0]] === undefined) {
            flag.push(false);
        }
        if (openingStack[item[0]] === closingStack[item[1]]) {
            flag.push(true);
        } else {
            flag.push(false);
        }
    });

    if (!repeat === {}) {
        bracketsConfig.forEach(function (item, i) {
            if (repeat[item[0]] % 2 === 0) {
                flag.push(true);
            } else {
                flag.push(false);
            }
        });
    }


    if (flag.includes(false)) {
        return false
    } else {

        return true;
    }


};
