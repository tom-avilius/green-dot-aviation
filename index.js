
window.addEventListener('unload', (event) => {

    localStorage.setItem('hello', "false")
})

function showToast() {

    document.addEventListener("DOMContentLoaded", (event) => {
        window.location.href = "./#popup1";
    });
}

if (localStorage.getItem('hello') == "true") { } else {

    showToast();
    // this is done to know if the user is visiting the website for the first time 
    localStorage.setItem("hello", "true");
}

// ! utitility functions below
// ! if they are still here
// ! it probably means I forgot to delete them
// ! but it does not matter

// document.getElementById('behave').addEventListener('click', (event) => {

//   const imgs = document.getElementsByClassName('img');

//   for( var i=0; i<imgs.length; i++) {

//     imgs.item(i).classList.add('remove-border-radius');
//   }

//   window.alert('After clicking okay, images would not have curved edges!!');
// })

// ! End of utility functions 


// th-01
document.getElementById('th-01-tx').addEventListener('mouseover', event => {

    document.getElementById('th-01').style.filter = "blur(3px) brightness(0.7)";
})

document.getElementById('th-01').addEventListener('mouseleave', event => {

    document.getElementById('th-01').style.filter = "blur(0px) brightness(1)";
})

document.getElementById('th-01').addEventListener('mouseover', event => {

    document.getElementById('th-01').style.filter = "blur(3px) brightness(0.7)";
})

// th-02
document.getElementById('th-02-tx').addEventListener('mouseover', event => {

    document.getElementById('th-02').style.filter = "blur(3px) brightness(0.7)";
})

document.getElementById('th-02').addEventListener('mouseleave', event => {

    document.getElementById('th-02').style.filter = "blur(0px) brightness(1)";
})

document.getElementById('th-02').addEventListener('mouseover', event => {

    document.getElementById('th-02').style.filter = "blur(3px) brightness(0.7)";
})

// th-03
document.getElementById('th-03-tx').addEventListener('mouseover', event => {

    document.getElementById('th-03').style.filter = "blur(3px) brightness(0.7)";
})

document.getElementById('th-03').addEventListener('mouseleave', event => {

    document.getElementById('th-03').style.filter = "blur(0px) brightness(1)";
})

document.getElementById('th-03').addEventListener('mouseover', event => {

    document.getElementById('th-03').style.filter = "blur(3px) brightness(0.7)";
})

// th-04
document.getElementById('th-04-tx').addEventListener('mouseover', event => {

    document.getElementById('th-04').style.filter = "blur(3px) brightness(0.7)";
})

document.getElementById('th-04').addEventListener('mouseleave', event => {

    document.getElementById('th-04').style.filter = "blur(0px) brightness(1)";
})

document.getElementById('th-04').addEventListener('mouseover', event => {

    document.getElementById('th-04').style.filter = "blur(3px) brightness(0.7)";
})

// th-05
document.getElementById('th-05-tx').addEventListener('mouseover', event => {

    document.getElementById('th-05').style.filter = "blur(3px) brightness(0.7)";
})

document.getElementById('th-05').addEventListener('mouseleave', event => {

    document.getElementById('th-05').style.filter = "blur(0px) brightness(1)";
})

document.getElementById('th-05').addEventListener('mouseover', event => {

    document.getElementById('th-05').style.filter = "blur(3px) brightness(0.7)";
})


// th-06
document.getElementById('th-06-tx').addEventListener('mouseover', event => {

    document.getElementById('th-06').style.filter = "blur(3px) brightness(0.7)";
})

document.getElementById('th-06').addEventListener('mouseleave', event => {

    document.getElementById('th-06').style.filter = "blur(0px) brightness(1)";
})

document.getElementById('th-06').addEventListener('mouseover', event => {

    document.getElementById('th-06').style.filter = "blur(3px) brightness(0.7)";
})