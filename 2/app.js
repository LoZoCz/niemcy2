var many = document.querySelectorAll('.active');
var count = document.querySelector('.count');

// console.log(many.length);
count.innerHTML = many.length;

var notfs = document.querySelectorAll('.notf');
var mark = document.querySelector('button');

// console.log(notfs.length);
// console.log(notfs[1].classList[1])

var act = notfs[1].classList[1];

for(let i = 0; i<notfs.length; i++){

    var act = notfs[i].classList[1];

    mark.addEventListener('click', () => {
        if(act == 'active'){
            notfs.classList.remove = 'active';
        }
    })
};

