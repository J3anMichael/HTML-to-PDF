'use strict';

const pesquisarCep = () => {
    const cep = document.getElementById('cep').value;
    alert('Hello Hello');
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);