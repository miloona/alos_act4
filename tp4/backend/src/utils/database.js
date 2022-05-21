import {
    writeFileSync
} from 'fs'
import podcasts from '../../database/podcasts.json'
import hosts from '../../database/hosts.json'



/**
 * PODCASTS
 */

export function get_podcasts() {
    return podcasts
}

export const get_podcast = id => {
    const podcast = podcasts.find(podcast => podcast.id == id)

    return podcast
}


export function add_podcast(podcast) {
    let new_podcasts = [
        ...podcasts,
        {
            ...podcast,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_podcasts)

    writeFileSync("database/podcasts.json", new_data)

    return new_podcasts
}


export function update_podcast(id, data) {
    let index = podcasts.findIndex(podcast => podcast.id == id)
    Object.entries(data).map(([key, value]) => {
        podcasts[index][key] = value
    });

    const new_data = JSON.stringify(podcasts)

    writeFileSync("database/podcasts.json", new_data)

    return podcasts
}
export function delete_podcast(id) {
    let index = podcasts.findIndex(podcast => podcast.id == id)

    podcasts.splice(index, 1)
    delete_hosts(id)
    const new_data = JSON.stringify(podcasts)

    writeFileSync("database/podcasts.json", new_data)

    return podcasts
}




/**
 * HOSTS
 */

export function get_hosts() {
    return hosts
}

export const get_podcast_hosts = podcast_id => {

    return hosts.filter(host => host.podcast_id == podcast_id)
}

export function add_host(host) {
    let new_hosts = [
        ...hosts,
        {
            ...host,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_hosts)

    writeFileSync("database/hosts.json", new_data)

    return new_hosts
}

export function delete_hosts(podcast_id) {
    let new_hosts = hosts.filter(host => host.podcast_id != podcast_id)

    const new_data = JSON.stringify(new_hosts)

    writeFileSync("database/hosts.json", new_data)

    return new_hosts
}