function letter(write){
    const comprimento = write.innerHTML.split('')
    write.innerHTML= "";
    comprimento.forEach((letra,value) => {
        setTimeout(() => {
            write.innerHTML +=letra
            
        }, 80*value);
    });
}

const h1 = document.querySelector("h1")
letter(h1)