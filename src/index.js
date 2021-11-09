const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let myValue = e.target.searchByID.value;
        // console.log(e.target.searchByID.value);
        // console.log(e.target.children[1].value);
        // console.log(document.querySelector('input#searchByID').value);
        inputForm.reset();

        fetch(`http://localhost:3000/movies/${myValue}`)
            .then(resp => resp.json())
            .then(json => {
                let title = document.querySelector('section#movieDetails h4');
                let summary = document.querySelector('section#movieDetails p');
                title.textContent = json.title;
                title.style.color = "blue";
                title.style.textDecoration = "underline";
                summary.textContent = json.summary;
            })
    });
}

document.addEventListener('DOMContentLoaded', init);