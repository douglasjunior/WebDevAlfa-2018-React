import _ from 'lodash';
import './style.css';
import paisagem from './paisagem.jpg';

function component() {
    var element = document.createElement('div');
    // Lodash é utilizado como variável global por meio da 
    // declaração do <script> no index.html
    element.innerHTML = _.join(['Olá', 'webpack', '!'], ' ');
    element.classList.add('hello');
    
    var image = document.createElement('img');
    image.src = paisagem;
    image.height = 100;

    element.appendChild(image)

    return element;
}

document.body.appendChild(component());
