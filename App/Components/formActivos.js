import {postData} from '../../APIs/actives.js'

const activo = {
    "nombre" : "juan"
}

let endpoint = "Actives"

postData(activo, endpoint)