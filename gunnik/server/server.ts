import GUN, { GunOptions } from 'gun';
import http from 'http';

// const GUN = require('gun');

const server = http.createServer().listen(8765);
const gun = GUN({ web: server });

gun.on('hi', peer => {
    console.log(`Nový klient se připojil s ID ${peer.id} a adresou ${peer.url}`)
})

let opts: GunOptions = {

}
// const gun = GUN({
//     web: server,
//     multicast: true, // Povolení multicastu
//     multicastAddress: "147.230.255.255",
//     multicastPort: 8080 // Nastavení multicast portu
// });

server.on('connect', () => {
    console.log("client connected");

})
console.log("started");
