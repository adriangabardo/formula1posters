import axios from 'axios'

function parsePosts(response) {
    let posts = [];
    for (const child of response) {
        const data = child.data;
        const obj = {};
        obj['id'] = data.id;
        obj['title'] = data.title;
        obj['url'] = data.permalink;
        obj['upvotes'] = data.ups;
        obj['description'] = data.selftext || '';
        obj['author'] = data.author || '';
        obj['image'] = data.url;

        if (data.post_hint === "image") posts.push(obj);
    }

    return posts;
}

/**
 * This module GETs post data from reddit and returns to the views for displaying.
 */
function getPosts(endpoint) {
    return new Promise((resolve, reject) => {
        // Makes a request to specific endpoint.
        axios.get(`https://www.reddit.com/r/Formula1posters/${endpoint}.json`)
        .then(async response => {
            // handle success
            // console.log(response);
            let parsed;
            if (endpoint === 'random') parsed = await parsePosts(response.data[0].data.children)
            else parsed = await parsePosts(response.data.data.children);
            resolve(parsed);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            reject(new Error('Failed to GET.'));
        })
    })
}

export default getPosts;