const metaFilter = document.querySelector('.tags-block1');
const filter = document.querySelector('.filter')
const player = document.querySelector('.player')
const tags = document.querySelector('.tags')
const meta = document.querySelector('.meta')

const tagsHeight = tags.getBoundingClientRect().bottom;
const playerHeight = player.getBoundingClientRect().height;
const filterHeight = filter.getBoundingClientRect().top;

console.log(tagsHeight);
console.log(playerHeight);
console.log(filterHeight);


//check scrolled position based on elements height 
function checkPosition() {
  var yPos = window.scrollY;
  console.log(yPos);
  //if scrolled number is greater than or equal to bottom position of an element
  if (yPos >= tagsHeight) {
    filter.classList.add('active')
  } else {
    filter.classList.remove('active')
  }

  if(yPos >= filterHeight) {
    filter.setAttribute('style', `
    position: fixed;
    left:0;
    right:0;
    top: ${playerHeight}px;
    `)
  } else {
    filter.removeAttribute('style')
  }
};

//set margin based on players height - because of position fixed
function setMargin() {
    meta.style.marginTop = `${playerHeight}px`;
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('load', setMargin)









