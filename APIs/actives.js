const myHeaders = new Headers({
    "Content-Type": "application/json"
});

const showData = async (data, URL_API) => {
    try {
        return await fetch(`${URL_API}`, {
            method: "GET",
            headers: myHeaders,
            body: JSON.stringify(data)
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
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(newdata)
        });
    } catch (error) {
        console.error('Error en la solicitud PUT:', error.message);
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