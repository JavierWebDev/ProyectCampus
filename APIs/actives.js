const URL_API = "http://localhost:3000";

const myHeaders = new Headers({
    "Content-Type": "application/json"
});


const getData = async() => {
    try {
        return await fetch(`${URL_API}/actives`);
		// Si la respuesta es correcta
	} catch(error){
        console.log(error);
	}
    
}
const updateData = async (newData, URL_API, id) => {
    try {
        const response = await fetch(`${URL_API}/${id}`, {
            method: "PATCH",
            headers: myHeaders,
            body: JSON.stringify(newData)
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el dato');
        }

        const data = await response.json();
        return data; // Retorna los datos actualizados si es necesario
    } catch (error) {
        console.error('Error en la solicitud PATCH:', error.message);
        throw error;
    }
}
const postData = async (datos) => {
    try {
        return await fetch(`${URL_API}/actives`, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(datos)
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }
}
const deleteData = async (URL_API, id) => {
    try {
        return await fetch(`${URL_API}/${id}`, {
            method: "DELETE",
            headers: myHeaders,
        });
    } catch (error) {
        console.error('Error en la solicitud Delete:', error.message);
    }
}
export {
    getData as getData,
    updateData as updateData,
    postData as postDatas,
    deleteData as deleteData
};