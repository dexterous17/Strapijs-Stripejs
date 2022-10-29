export function changedata(setData, response) {
    setData({
        Name: response.data.Name,
        MiddleName: response.data.MiddleName,
        LastName: response.data.LastName,
        Address: response.data.Address
    })
}


export function changebox(edit, setEdit) {
    setEdit(!edit)
    console.log(edit)
}

