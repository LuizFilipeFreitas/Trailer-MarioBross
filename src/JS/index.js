
console.log('mostrar o document', document
);
const botaoTrailer = document.querySelector(".botao-trailer");
botaoTrailer.addEventListener("click",() => {
    modal.classList.add("aberto");
console.log(document.querySelector(".botao-trailer"))  

});
const modal= document.querySelector(".modal");

const botaoFecharModal = document.querySelector(".fechar-modal");
botaoFecharModal.addEventListener("click",() => {
    modal.classList.remove("aberto");
console.log(document.querySelector(".fechar-modal"))  
});



