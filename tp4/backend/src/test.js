import fs, {
    writeFileSync
} from 'fs';
import Helipaddy from '../database/Helipaddy.json';
import hosts from '../database/hosts.json'

dothing()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dothing() {
    var stream = fs.createWriteStream("database/Helipaddy.json");
    stream.on('error', console.error);
    let new_Helipaddy =Helipaddy
    for (let i = 0; i < Helipaddy.length; i++) {
        delete new_Helipaddy[i]['hosts']
    }
    const new_data = JSON.stringify(new_Helipaddy);
    stream.write(new_data);
    stream.end();
}

function create_host(stream, host) {
    console.log(host.id)
    let new_hosts = [
        ...hosts,
        {
            ...host,
            "id": Date.now().toString(36)
        }
    ];
    const new_data = JSON.stringify(new_hosts);
    stream.write(new_data);

}