const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCx_mWQuQkXZUqomFVemsTSHrmV63tqKCw'
  });

  var cache = require('memory-cache');
  const findBestRoute = (req, res) => {
    var mapRouteCache = cache.get('mapRoute')
    if(mapRouteCache==null){
    try {
        googleMapsClient.directions({
            origin:'SCG+Bangsue+Thailand',
            destination:'Central+World+Thailand',
            
        },
        function(err, response) {
            if (!err) {
              res.send(response.json.routes[0].legs[0].steps);
              cache.put('mapRoute',response.json.routes[0].legs[0].steps,3600000)

            }
        })
    } catch (error) {
        console.log(error)
    }
}else{
    console.log('cache has already been stored')
    res.send(mapRouteCache)
}
};
module.exports = {
    
    findBestRoute,
    
};