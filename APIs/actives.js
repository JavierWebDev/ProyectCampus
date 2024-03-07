const myHeaders = new Headers({
    "Content-Type": "application/json"
});

export const setId = async (URL_API, endpoint) => {
    console.log(showData(URL_API, endpoint))
}

const showData = async (URL_API, id) => {
    try {
        return await fetch(`${URL_API}/${id}`, {
            method: "GET",
            headers: myHeaders
        });
    } catch (error) {
        console.error('Error en la solicitud GET:', error.message);
    }
}
export const postData = async (data, URL_API) => {
    try {
        return await fetch(`${URL_API}`, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }
}
const updateData = async (newdata, URL_API) => {
    try {
        return await fetch(`${URL_API}`, {
            method: "PATCH",
            headers: myHeaders,
            body: JSON.stringify(newdata)
        });
    } catch (error) {
        console.error('Error en la solicitud PATCH:', error.message);
    }
}
export const deleteData = async (data, URL_API) => {
    try {
        return await fetch(`${URL_API}`, {
            method: "DELETE",
            headers: myHeaders,
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }
}