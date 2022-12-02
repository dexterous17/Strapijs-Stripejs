const URL = "https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.preview.app.github.dev"

export const authget = ({ url, token }) => {
    let headersList = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    let reqOptions = {
        url: `${URL}${url}`,
        method: "POST",
        headers: headersList,
    }
    return reqOptions
}

export const authreceive = ({ url, data, token }) => {
    let headersList = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    let reqOptions = {
        url: `${URL + url}`,
        method: "POST",
        headers: headersList,
        data: data
    }
    return reqOptions
}

export const auth = ({ url, data }) => {
    let headersList = {
        "Content-Type": "application/json",
    }
    let reqOptions = {
        url: `${URL}${url}`,
        method: "POST",
        headers: headersList,
        data: data
    }
    return reqOptions
}
