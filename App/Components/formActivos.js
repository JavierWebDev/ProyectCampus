import { postData ,deleteData  } from '/../../APIs/actives.js';

export class addActives extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.addActive();
    }
    render() {
        this.innerHTML = /* html */ `
        <form id="activesForm"> 
            <div>
                <h3>codigo de la transacción: </h3>
                <input id="codigoTransaccion" placeholder:" digita el codigo de la transaccion ">
            </div>
            <div>
                <h3>Nro. de formulario: </h3>
                <input id="nroFormulario" placeholder:" digita el codigo de la transaccion ">
            </div>
            <div>
                <h3>Marca: </h3>
                <select id="marcaActivo">
                </select>
            </div>
            <div>
                <h3>Categoria del activo: </h3>
                <select id="categoriaActivo">
                </select>
            </div>
            <div>
                <h3>Tipo de activo: </h3>
                <select id="tipoActivo">
                </select>
            </div>
            <div>
                <h3>Valor del producto: </h3>
                <input id="valorActivo" placeholder:" digita el codigo de la transaccion ">
            </div>
            <div>
                <h3>Proveedor</h3>
                <input id="proveedorActivo" placeholder:" digita el codigo de la transaccion ">
            </div>
            <div>
                <h3>serial: </h3>
                <input id="serialActivo" placeholder:" digita el codigo de la transaccion ">
            </div> 
            <div>
                <h3>Empresa responsable: </h3>
                <input id="empresaResponsable" placeholder:" digita el codigo de la transaccion ">
            </div>   
            <div>
                <h3>Estado: </h3>
                    <select id="estadoActivo">
                    </select>
            </div>  
            <br>
            <input type="submit" value="añadir"> 
        </form>
        `
    }
    
    addActive= ()=> {
        document.addEventListener('DOMContentLoaded', function(){
            const URL_API = 'http://localhost:3000/actives'
            const activeForm = document.querySelector('#activesForm')

            activeForm.addEventListener('submit', (e) => {
                e.preventDefault();
        
                const codTransaccion = activeForm.querySelector('#codigoTransaccion').value;
                const nroFormulario = activeForm.querySelector('#nroFormulario').value;
                const marcaId = activeForm.querySelector('#marcaActivo').value;
                const categoriaId = activeForm.querySelector('#categoriaActivo').value;
                const tipoId = activeForm.querySelector('#tipoActivo').value;
                const valorUnitario = activeForm.querySelector('#valorActivo').value;
                const proveedorId = activeForm.querySelector('#proveedorActivo').value;
                const nroSerial = activeForm.querySelector('#serialActivo').value;
                const empresaResponsable = activeForm.querySelector('#empresaResponsable').value;
                const estadoActivo = activeForm.querySelector('#estadoActivo').value;
                let newId = 0

                fetch(`${URL_API}`)
                    .then(response => response.json())
                    .then(activesData =>{
                        newId = activesData.length + 1;
                        const data = {
                            "id": `A-${newId}`,
                            "CodTransaccion": codTransaccion,
                            "nroFormulario": nroFormulario,
                            "marcaId": marcaId,
                            "categoriaId": categoriaId,
                            "tipoId": tipoId,
                            "valorUnitario": valorUnitario,
                            "proveedorId": proveedorId,
                            "nroSerial": nroSerial,
                            "empresaResponsableId": empresaResponsable,
                            "estadoId": estadoActivo
                        }  
                        postData( data,URL_API )
                    })
                
            });
              
            
        })
    }
}
customElements.define("add-actives",addActives)

