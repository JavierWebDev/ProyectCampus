import { updateData  } from '/../../../APIs/actives.js';

export class addActives extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.addActive();
    }
    render() {
        this.innerHTML = /* html */ `
        <div id="javierchupapene"></div>
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
                        let aux = "0" 

                        if (newId < 10) {
                            let newIds = `0${newId}`
                        } else {
                            let newIds = `${newId}`
                        }

                        const data = {
                            "id": `A-${newIds}`,
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