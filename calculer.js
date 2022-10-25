const touches = [...document.querySelectorAll('.bouton')];
const listekeycode = touches.map(element => element.dataset.key);
const affich = document.querySelector ('.affiche')

document.addEventListener('keydown', (el) => {
    const valeur = el.keyCode.toString();
    //console.log(valeur, typeof(valeur))
   
})

document.addEventListener('click', (el)=> {
    const valeur = el.target.dataset.key;
    calcul(valeur)
})

const calcul = (valeur) =>{
    if (listekeycode.includes(valeur)) {
        switch (valeur){
            case '8':
                affich.textContent="";
                break;
            case '13' :
                const calu= eval(affich.textContent);
                affich.textContent= calu;
                break;
            default:
                const indexleycode = listekeycode.indexOf(valeur);
                const touche = touches[indexleycode];
                affich.textContent += touche.innerHTML;
        }

    }

}