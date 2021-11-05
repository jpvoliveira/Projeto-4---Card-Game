let numeroCartas = prompt('Digite o numero de cartas: ')
let HTMLTemporario
while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 != 0) {
  numeroCartas = prompt('Digite o numero de cartas: ')
}

const arrayGif = ['gif1', 'gif2', 'gif3', 'gif4', 'gif5', 'gif6', 'gif7']
let arrayPar = arrayGif.slice(0, numeroCartas / 2)

arrayPar = arrayPar.concat(arrayPar)
arrayPar.sort(comparador)

for (let i = 0; i < numeroCartas; i++) {
  let containerCartas = document.querySelector('.container')
  const carta = `<div class="carta" onclick="girarCarta(this)">
  <div class="front-face face"  >
    <img class="imgFront" src="./assets/front.png" alt="" />
  </div>
  <div class="back-face face"  >
    <img class="imgBack" src="./assets/${arrayPar[i]}.gif" alt="" />
  </div>
</div>`
  containerCartas.innerHTML = carta + containerCartas.innerHTML
}

let cont = 1
let clique1 = 0
let clique2 = 0

function girarCarta(botao) {
  /* const girarFront = botao.querySelector('.front-face') */
  const girarBack = botao.querySelector('.back-face')
  /* girarFront.classList.add('girarBack') */
  girarBack.classList.add('girarBack')

  if (cont === 1) {
    clique1 = botao.querySelector('.back-face')
    cont++
  } else if (cont === 2) {
    clique2 = botao.querySelector('.back-face')
    if (clique1.innerHTML === clique2.innerHTML) {
      console.log(clique1)
      clique1.classList.add('girarBack')
      clique2.classList.add('girarBack')
      console.log('teste')
    } else {
      clique1.classList.remove('girarBack')
      clique2.classList.remove('girarBack')
    }
    clique1 = 0
    clique2 = 0
    cont = 1
  }
}

function comparador() {
  return Math.random() - 0.5
}
