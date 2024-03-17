function trocaDeTema() {
    const body = document.body;
    const cabecalio = document.querySelector('.cabecalio');
    const iconemodosite = document.querySelector('.iconemodosite');
    const itenscabecalio = document.querySelectorAll('.itenscabecalio a');

    if (body.classList.contains('temaclaro')) {
        body.classList.remove('temaclaro');
        cabecalio.classList.remove('temaclaro');
        iconemodosite.style.backgroundColor = 'rgb(4, 6, 15)';
        itenscabecalio.forEach(link => {
            link.style.color = 'beige';
        });
    } else {
        body.classList.add('temaclaro');
        cabecalio.classList.add('temaclaro');
        iconemodosite.style.backgroundColor = 'beige';
        itenscabecalio.forEach(link => {
            link.style.color = 'rgb(4, 6, 15)';
        });
    }
}

document.getElementById('mododeexib').addEventListener('click', trocaDeTema);
