//Our Classes//

document.getElementById("yoga").addEventListener("click", function() {
    showContent("yogaContent");
});

document.getElementById("group").addEventListener("click", function() {
    showContent("groupContent");
});

document.getElementById("solo").addEventListener("click", function() {
    showContent("soloContent");
});

document.getElementById("stretching").addEventListener("click", function() {
    showContent("stretchingContent");
});

function showContent(contentId) {
    
    var contents = document.querySelectorAll(".class-text");
    contents.forEach(function(content) {
        content.style.display = "none";
    });
    
    document.getElementById(contentId).style.display = "block";
}

document.querySelectorAll('.class-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        // Tüm butonlardan 'active' sınıfını kaldır
        document.querySelectorAll('.class-buttons button').forEach(btn => btn.classList.remove('active'));
        // Tıklanılan butona 'active' sınıfını ekle
        this.classList.add('active');
    });
});

//BMI CALCULATOR//

function calculateBMI() {
    var height = document.getElementById('height').value / 100; // cm'yi metreye çeviriyoruz
    var weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) {
        var bmi = weight / (height * height);
        moveArrow(bmi);
    } else {
        alert('Please enter valid height and weight values!');
    }
}

function moveArrow(bmi) {
    var arrow = document.getElementById('bmi-arrow');
    let position;

    if (bmi >= 0 && bmi <= 18.5) {
      position = 14;
    } else if (bmi > 18.5 && bmi <= 24.9) {
      position = 31;
    } else if (bmi >= 25 && bmi <= 29.9) {
      position = 47;
    } else if (bmi >= 30 && bmi <= 34.9) {
      position = 63;
    } else if (bmi >= 35) {
      position = 80;
    } 

    arrow.style.left = position + '%';
    arrow.classList.add('visible');
}


//Navbar efect//

window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});