const postData = async (url, data) => {
    let res = await fetch(url, { 
        method: 'POST',
        body: data
    });

    return await res.text();
};

const getResorse = async (url) => {
    let res = await fetch(url);

    if(!res.ok) { 
        throw new Error(`coud not fetch ${url} status ${res.status}`);
    }

    return await res.json();
};

async function getResourceData(url) { 
    const res = await fetch(url)
    const data = await res.json();
    return data;
}

export {postData, getResorse, getResourceData};