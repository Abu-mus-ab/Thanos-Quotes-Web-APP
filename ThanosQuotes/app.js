document.querySelector('.btn-quotes').addEventListener('click', getQuotes);
const displayQuotes = document.querySelector('.quote-content');

function getQuotes(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://thanosapi.herokuapp.com/random/', true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);

            let output = `<blockquote><p class="p-quote">${response.quote}</p></blockquote>`;

            document.querySelector('.quote-content').innerHTML = output;
    
        }
    }
    xhr.send();
}