import token from './Token'

export const authget = (url) => {
    let headersList = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    let reqOptions = {
        url: `https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev${url}`,
        method: "POST",
        headers: headersList,
    }
    return reqOptions
}

export const authreceive = ({ url, data }) => {
    let headersList = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    let reqOptions = {
        url: `https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev${url}`,
        method: "POST",
        headers: headersList,
        data:data
    }
    console.log(data)
    return reqOptions
}

