const amigos = [];

function limparListaRenderizada() {
  lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
}

function renderizarListaDoAmigo() {
  const listaAmigos = document.getElementById("listaAmigos");
  
  limparListaRenderizada();

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = amigos[i];
    listaAmigos.append(li);
  }
}

function renderizarNomeSorteado(nomeSorteado) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = nomeSorteado;
}

function limparCampoDeEntrada() {
  const elementoEntrada = document.getElementById("amigo");
  elementoEntrada.value = "";
}

function adicionarAmigo() {
  const { value: entrada } = document.getElementById("amigo");

  if(!entrada.trim()) {
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(entrada);

  renderizarListaDoAmigo();
  limparCampoDeEntrada();
}

function sortearAmigo() {
  if (!amigos.length) {
    alert('Por favor, insira um nome.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indiceAleatorio];

  renderizarNomeSorteado(nomeSorteado);
}