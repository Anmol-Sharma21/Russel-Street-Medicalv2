// Date-time

var date = new Date();
var tdate = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (tdate < 10) {
    tdate = "0" + tdate;
}
if (month < 10) {
    month = "0" + month;
}

var minDate = year + "-" + month + "-" + tdate;

document.getElementById("demo").setAttribute('min', minDate);

var Appoint = document.querySelectorAll('.Appoint');
Appoint.forEach(Ap => {
    Ap.addEventListener('click', () => {
        // alert("Option clicked");
        Ap.classList.toggle('Background')
    })
})

// Patient ID

function upperCaseF(a) {
    setTimeout(function () {
        a.value = a.value.toUpperCase();
    }, 1);
}

document.addEventListener("DOMContentLoaded", function () {
    var patientID = document.querySelector('#exampleInputEmail1');
    var invalidPara = document.querySelector('.Invalid');

    patientID.addEventListener('keyup', function handleChange(event) {
        let value = event.target.value;

        let pattern = /^[A-Z]{2}\d+[A-Z]$/;

        if (pattern.test(value)) {
            invalidPara.classList.remove('display-block');
        } else {
            invalidPara.classList.add('display-block');
        }
    });
});

// Select-option

document.addEventListener("DOMContentLoaded", function () {
    var select = document.querySelector('.form-select');
    var adviceBlocks = document.querySelectorAll('.Advice');

    select.addEventListener('change', function handleChange(event) {
        let value = event.target.value;

        adviceBlocks.forEach(block => {
            let blockValue = block.getAttribute('data-value');
            if (blockValue === value) {
                block.classList.add('display-block');
            } else {
                block.classList.remove('display-block');
            }
        });
    });
});
