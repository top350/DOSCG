var cache = require('memory-cache');
const findBC = (req, res) => {
    
    var A =21
    var B;
    var C;
    var BCCache = cache.get('BC')
    if(BCCache==null){
    try {
        B= 23-A
        C=-21-A
        var result = {B:B,C:C}
        res.send(result)
        cache.put('BC',result,3600000)
        
    } catch (error) {
        console.log(error)
    }
}else{
    console.log('cache has already been stored')
    res.send(BCCache);
    
}
};



module.exports = {
    findBC,
};