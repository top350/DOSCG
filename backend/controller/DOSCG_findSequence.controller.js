var cache = require('memory-cache');


function findA(a, b, c, d) {


    var result;
    var dif1 = b - a;
    var dif2 = c - b;
    var dif3 = d - c;
    var x = dif2 - dif1
    var y = dif3 - dif2



    if (x = y) {
        var result = x / 2;
        return result
    } else {
        console.log('cannot use this equation')
        return;
    }

}

function findB(resultA, a, b, c, d) {
    var n = [1, 2, 3, 4, 5, 6, 7];
    var result = []
    for (let i = 0; i < n.length; i++) {
        result.push(resultA * Math.pow(n[i], 2))
    }
    var diff = a - result[2];
    var diff2 = b - result[3];
    var diff3 = c - result[4];
    var diff4 = d - result[5];
    var x = diff2 - diff;
    var y = diff3 - diff2;
    var z = diff4 - diff3
    if (x = y = z) {
        return (diff2 - diff)
    } else {
        console.log('cannot use this equation to solve')
        return;
    }
}

function findC(resultA, resultB, num3) {
    var c = -resultA * Math.pow(3, 2) - resultB * 3 + num3
    return c;
}

const findXYZ = (req, res) => {
    var xyzCache = cache.get('XYZ')
    var X, Y, Z;
    var numSet = [X, Y, 5, 9, 15, 23, Z]
    //quandrantic equation f(n)=an^2+bn+c
    //Solve find a,b,c
    if(xyzCache==null){

    try {
        var a = findA(numSet[2], numSet[3], numSet[4], numSet[5])
        var b = findB(a, numSet[2], numSet[3], numSet[4], numSet[5])
        var c = findC(a, b, numSet[2])
       
        var X = a * 1 + b * 1 + c
        //f(1)
        var Y = a * 4 + b * 2 + c
        //f(2)
        var Z = a * 49 + b * 7 + c
        //f(7)
        var result ={
            X: X,
            Y: Y,
            Z: Z
        }

        res.send(result)
        cache.put('XYZ',result,3600000)
    } catch (error) {
        console.log(error)
    }
}else{
    console.log('cache has already been stored')
    res.send(xyzCache)
}
};


module.exports = {
    findXYZ,
    
};