// run your proxy server on port 80
const proxy = require('redbird')({port: 80})
// if someone visits ur ip address directly, reroute to the server running on 8000
proxy.register("138.197.71.93", "http://localhost:8000")
// if someone visits pizza.com also reroute that to port 8000
proxy.register("ilai.link", "http://localhost:8000")
// also helps to match the www subdomain as well
proxy.register("www.ilai.link", "http://localhost:8000")
//trying to enable 11ai.link
proxy.register("11ai.link", "http://localhost:8000")
proxy.register("www.11ai.link", "http://localhost:8000")
// if someone visits poop.com reroute that to port 8001
proxy.register("netjam.studio", "http://localhost:8001")
proxy.register("www.netjam.studio", "http://localhost:8001")
// etc...
proxy.register("capt.live", "http://localhost:8002")
proxy.register("www.capt.live", "http://localhost:8002")
