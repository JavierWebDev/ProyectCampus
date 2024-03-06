const URL_API = 'http://localhost:3000'

const showData = async (data, endpoint, id) => {
    try {
        return await fetch(`${URL_API}/${endpoint}/${id}`, {
            method: "GET",
            headers: myHeaders,
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.error('Error en la solicitud GET:', error.message);
    }
}
const postData = async (data, endpoint, id) => {
    try {
        return await fetch(`${URL_API}/${endpoint}/${id}`, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }
}
const updateData = async (newdata, endpoint, id) => {
    try {
        return await fetch(`${URL_API}/${endpoint}/${id}`, {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(newdata)
        });
    } catch (error) {
        console.error('Error en la solicitud PUT:', error.message);
    }
}