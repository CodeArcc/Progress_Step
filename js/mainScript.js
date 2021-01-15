const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const addCircle = document.getElementById('add');
const removeCircle = document.getElementById('remove');

var progress = document.getElementById('progress');
var progressCtn = document.getElementsByClassName('progress-container');
var circles = document.querySelectorAll('.circle');

var currentActive = 1;

//next button logic
btnNext.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

//prev button logic
btnPrev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});

addCircle.addEventListener('click', () => {
    if (circles.length >= 10) {
        alert('can add max 10 steps.')
    } else {
        var newCircle = document.createElement('div');
        newCircle.className = 'circle';
        newCircle.innerText = circles.length + 1;
        progressCtn[0].appendChild(newCircle);
        reset();
    }
});

removeCircle.addEventListener('click', () => {
    if (circles.length > 3) {
        circles[circles.length - 1].remove();
    } else {
        alert('min 3 steps needed.')
    }

    reset();

});

function update() {
    //logic for prev and next button active and disable
    if (currentActive === 1) {
        btnPrev.disabled = true;
    } else if (currentActive === circles.length) {
        btnNext.disabled = true;
    } else {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }

    //logic for adding active class to circles
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }

    });
    const activeCircles = document.querySelectorAll('.active');

    progress.style.width = (activeCircles.length - 1) / (circles.length - 1) * 100 + '%';
}

function updateVariables() {
    progress = document.getElementById('progress');
    progressCtn = document.getElementsByClassName('progress-container');
    circles = document.querySelectorAll('.circle');
}

function reset() {
    currentActive = 1;
    btnPrev.disabled = true;
    btnNext.disabled = false;
    progress.style.width = '0%'
    updateVariables();
    circles.forEach((circle, index) => {
        if (index === 0) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }

    });
}