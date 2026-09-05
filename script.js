function enterCarVerse() {
    window.location.href = "home.html";
}


function showCarDetails(carName) {

    alert(
        carName +
        "\n\nDetailed photography and specifications coming soon!"
    );

}
```javascript
/* =========================
   GALLERY FILTER
========================= */

function filterGallery(category) {

    const cards = document.querySelectorAll(".photo-card");
    const buttons = document.querySelectorAll(".filter-btn");


    buttons.forEach(button => {

        button.classList.remove("active");

    });


    event.target.classList.add("active");


    cards.forEach(card => {

        if (category === "all") {

            card.style.display = "block";

        }

        else if (card.classList.contains(category)) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

}



/* =========================
   OPEN PHOTO
========================= */

function openPhoto(button) {

    const card = button.closest(".photo-card");

    const image = card.querySelector("img");

    const modal = document.getElementById("photoModal");

    const modalImage = document.getElementById("modalImage");


    modalImage.src = image.src;

    modal.classList.add("show");

}



/* =========================
   CLOSE PHOTO
========================= */

function closePhoto() {

    const modal = document.getElementById("photoModal");

    modal.classList.remove("show");

}



/* CLOSE MODAL WHEN CLICKING
   OUTSIDE IMAGE */

document.addEventListener("click", function(event) {

    const modal =
        document.getElementById("photoModal");


    if (
        event.target === modal
    ) {

        closePhoto();

    }

});
```
