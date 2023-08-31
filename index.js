document.addEventListener("DOMContentLoaded", (event) => {
  window.location.href = "./index.html#popup1";
});


// ! utitility functions below
// ! if they are still here
// ! it probably means I forgot to delete them

document.getElementById('behave').addEventListener('click', (event) => {

  const imgs = document.getElementsByClassName('img');

  for( var i=0; i<imgs.length; i++) {

    imgs.item(i).classList.add('remove-border-radius');
  }

  window.alert('After clicking okay, images would not have curved edges!!');
})