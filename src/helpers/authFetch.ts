
const baseUrl = process.env.REACT_APP_API_URL_AUTH;

interface DataProps { email: string, password: string,name?:string }

const fetchSinToken = (endpoint: string, data: DataProps, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

const fetchConToken = (endpoint: string, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    return fetch(url, {
        method,
        headers: {
            'x-token': token
        }
    });
}


export {
    fetchSinToken, fetchConToken
}