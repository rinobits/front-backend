jQuery(($)=>{
    // carga de datos en el form
    loadData = async(data, names) => {
        let htmlDrop = '';
        let name = '';
        switch(names){
            case 'tipoMasa':
                name = 'Tipo de masa';
                break;
            case 'saborMasa':
                name = 'Tipo de masa';
                break;
            case 'tamano':
                name = 'Tamaño de masa';
                break;
            case 'cobertura':
                name = 'Cobertura';
                break;
            case 'horaDrop':
                name = 'Hora';
                break;
        }
        htmlDrop += '<option value="">' + name + '</option>';
        $.each(await data, (key, value) => {
            htmlDrop += '<option value="' + value.id + '">' + value.name + '</option>';
        });
        $("#" + names).html(htmlDrop);
    }
    // Listar tipo de masa
    listarTipoMasa =  async() => {
        const res = await fetch(`http://localhost:3000/api/tipoMasa/`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonRetorno = await res.json();
        return jsonRetorno;
    }
    data = listarTipoMasa()
    loadData(data, 'tipoMasa');
    // Listar sabor de masa
    listarSaborMasa =  async() => {
        const res = await fetch(`http://localhost:3000/api/saborMasa/`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonRetorno = await res.json();
        return jsonRetorno;
    }
    data = listarSaborMasa()
    loadData(data, 'saborMasa');
    // Listar cobertura de masa
    listarCoberturaMasa =  async() => {
        const res = await fetch(`http://localhost:3000/api/cobertura/`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonRetorno = await res.json();
        return jsonRetorno;
    }
    data = listarCoberturaMasa()
    loadData(data, 'cobertura');
    //Listar tamaños
    listarTamanoMasa =  async() => {
        const res = await fetch(`http://localhost:3000/api/cobertura/`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonRetorno = await res.json();
        return jsonRetorno;
    }
    data = listarTamanoMasa()
    loadData(data, 'tamano');
    // Listar hora de entrega
    listarHora =  async() => {
        const res = await fetch(`http://localhost:3000/api/tipoMasa/`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonRetorno = await res.json();
        return jsonRetorno;
    }
    data = listarHora()
    loadData(data, 'horaDrop');
});