function consultar() {

    event.preventDefault()

    var split = new XMLHttpRequest();

    split.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var change = JSON.parse(this.responseText);
            console.log(change)
            if (change.erro) {
                document.getElementById("id").value = "";
                document.getElementById("nome").value = "";
                document.getElementById("telefone").value = "";
                document.getElementById("email").value = "";
                document.getElementById("logradouro").value = "";
                document.getElementById("bairro").value = "";
                document.getElementById("localidade").value = "";
                document.getElementById("uf").value = "";
                alert("Preencha os Campos corretamente")
            } else {
                document.getElementById("id").value = change[0].id;
                document.getElementById("nome").value = change[0].nome;
                document.getElementById("telefone").value = change[0].telefone;
                document.getElementById("email").value = change[0].email;
                document.getElementById("logradouro").value = change[0].logradouro;
                document.getElementById("complemento").value = change[0].complemento;
                document.getElementById("bairro").value = change[0].bairro;
                document.getElementById("localidade").value = change[0].cidade;
                document.getElementById("uf").value = change[0].uf;
            }
        }
    };  
    let id = document.getElementById("id").value
    let email = document.getElementById("email").value
    console.log(id, email)
    split.open("GET", 'http://localhost:3000//cliente/:chave/:valor')
    split.send();
}


    function fazPost(url, body){
        console.log("body=",body)
        let request = new XMLHttpRequest ()
        request.open("POST", url, true)
        request.setRequestHeader("Content-type","application/json")
        request.send(JSON.stringify(body))
    
        request.onload = function(){
            console.log(this.responseText)
            alert("Cliente cadastrado com sucesso!")
        }
        return request.responseText
    }
    
    function cadastra(){
        event.preventDefault()
        let url = "http://localhost:3000/cliente/gravar"
        let id = document.getElementById("ID").value 
        let nome = document.getElementById("nome").value 
        let email = document.getElementById("email").value 
        let telefone = document.getElementById("telefone").value 
        let cep = document.getElementById("cep").value 
        let logradouro = document.getElementById("logradouro").value 
        let complemento = document.getElementById("complemento").value 
        let numero = document.getElementById("numero").value 
        let bairro = document.getElementById("bairro").value 
        let cidade = document.getElementById("localidade").value 
        let uf = document.getElementById("uf").value 
        let id_tipo = document.getElementById("tipo").value
    
    body = {
        "id" : id,
        "nome" : nome,
        "email" : email,
        "telefone": telefone,
        "cep": cep,
        "logradouro": logradouro,
        "numero": numero,
        "bairro": bairro,
        "cidade": cidade,
        "uf": uf,
        "tipo": parseInt(tipo),
        "complemento": complemento,
    }
    
    fazPost(url, body)
    
    }
    
    function tipos() {
    
        var server = new XMLHttpRequest();
    
        server.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var change = JSON.parse(this.responseText);
    
                document.getElementById("tipoa").innerText = change[0].tipo;
                document.getElementById("tipob").innerText = change[1].tipo;
                document.getElementById("tipoc").innerText = change[2].tipo;
    
            }
        };
    
        server.open("GET", "http://localhost:3000/cliente/tipo", false)
        server.send();
    }
    
    
