(function() {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://iili.io/H8VmnNs.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  })();
  function faviconIn(){
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';link.rel = 'shortcut icon';
    link.href = 'https://iili.io/H8VmnNs.png';
    document.getElementsByTagName('head')[0].appendChild(link)
  };
  
  setTimeout(faviconIn,1000);

let footer = document.getElementsByClassName('nav-tools-footer')[0]
let marcas = document.getElementsByClassName('marcas-section')[0]
let titulos = document.getElementsByClassName('div-h3')
let edades = document.getElementsByClassName('edades-section')[0]
let componentes = document.getElementsByClassName('component-wrapper')

setTimeout(function() {
    
    footer.parentNode.insertBefore(componentes[6], footer);
    
    componentes[1].parentNode.insertBefore(titulos[0], componentes[1]);
    
    componentes[1].parentNode.insertBefore(marcas, componentes[1]);

    // document.getElementsByClassName('section-header__title')[0].innerText = 'PRODUCTOS DE DEPORTE Y FITNESS'

    // document.getElementsByClassName('section-header__title')[1].innerText = 'PRODUCTOS JUGUETES'

}, 500);


const URLActual = window.location.pathname
let pagos = document.getElementsByClassName('pagos-section')[0]

if(URLActual !== '/'){
    titulos[0].classList.add('invisible')
    titulos[1].classList.add('invisible')
    marcas.classList.add('invisible')
    edades.classList.add('invisible')
    pagos.classList.add('invisible')
}

let categoriasMobile = document.querySelectorAll('.categorias-mobile a')
let subcategoriasMobile = document.getElementsByClassName('subcategorias-mobile')
let arrowMobile =  document.getElementsByClassName('arrow-mobile')

arrowMobile[0].addEventListener('click', (e) => {

    e.target.classList.toggle('rotated')

    categoriasMobile[0].classList.toggle('fondo-azul2')

    subcategoriasMobile[0].classList.toggle('invisible')
    subcategoriasMobile[1].classList.toggle('invisible')
    subcategoriasMobile[2].classList.toggle('invisible')
    subcategoriasMobile[3].classList.toggle('invisible')
})
arrowMobile[1].addEventListener('click', (e) => {

    e.target.classList.toggle('rotated')

    categoriasMobile[1].classList.toggle('fondo-amarillo2')

    subcategoriasMobile[4].classList.toggle('invisible')
    subcategoriasMobile[5].classList.toggle('invisible')
    subcategoriasMobile[6].classList.toggle('invisible')
    subcategoriasMobile[7].classList.toggle('invisible')
    subcategoriasMobile[8].classList.toggle('invisible')
})
arrowMobile[2].addEventListener('click', (e) => {

    e.target.classList.toggle('rotated')

    categoriasMobile[2].classList.toggle('fondo-verde2')

    subcategoriasMobile[9].classList.toggle('invisible')
    subcategoriasMobile[10].classList.toggle('invisible')
    subcategoriasMobile[11].classList.toggle('invisible')
})
arrowMobile[3].addEventListener('click', (e) => {

    e.target.classList.toggle('rotated')

    categoriasMobile[3].classList.toggle('fondo-rosa2')

    subcategoriasMobile[12].classList.toggle('invisible')
    subcategoriasMobile[13].classList.toggle('invisible')
    subcategoriasMobile[14].classList.toggle('invisible')
    subcategoriasMobile[15].classList.toggle('invisible')
})
