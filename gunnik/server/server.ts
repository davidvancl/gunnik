import GUN, { GunOptions } from 'gun';
import http from 'http';

const server = http.createServer().listen(8765);
const gun = GUN({ web: server });

gun.on('hi', peer => {
    console.log(`Nový klient se připojil s ID ${peer.id} a adresou ${peer.url}`)
})

server.on('connect', () => {
    console.log("client connected");

})
console.log("started");
