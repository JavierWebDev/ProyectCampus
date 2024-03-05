const URL_API = 'http://localhost:3000'

const postData = async (data, endpoint) => {
    try {
        return await fetch(`${URL_API}/${endpoint}`, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }
}