// Functions that lets me translate the whole page
const translateF = () => {

    // Nav items
    let nav1 = document.getElementById('nav1');
    let nav2 = document.getElementById('nav2');
    let nav3 = document.getElementById('nav3');
    let nav4 = document.getElementById('nav4');

    // Translation of 
    nav1.innerHTML = 'Home / Sobre mí';
    nav2.innerHTML = 'Habilidades';
    nav3.innerHTML = 'Universidades';
    nav4.innerHTML = 'Herramientas';

    // Header Title
    let title = document.getElementById('title');
    title.innerHTML = 'Aprende más sobre mí y mi carrera de desarrollador';

    let homeDesc = document.getElementById('homeDesc');
    homeDesc.innerHTML = 'En esta página, encontrarás muchas secciones en donde podrás aprender sobre mi personalmente y profesionalmente. Revisa la página principal y otros ítems de la barra de navegación. <br><br> Por último, no olvides darle clic a estos botones de debajo para revisar mi repositorio de GitHub y algunas herramientas de prueba desarrolladas en JS para esta página. ¡Que disfrutes!';
    
    // Buttons of header / hero section
    let heroBt1 = document.getElementById('heroBt1');
    heroBt1.innerHTML = '¡Revisa mi portafolio!';

    let heroBt2 = document.getElementById('heroBt2');
    heroBt2.innerHTML = '¡Revisa algunas de las herramientas hechas en JS en mi página!';

    let pregunta = document.getElementById('pregunta');
    pregunta.innerHTML = '¿Quién soy?';

    let introP = document.getElementById('introP');
    introP.innerHTML = 'Hola, mi nombre es Daniel Vetencourt, también conocido como Davax por mi canal de YouTube. Actualmente soy un TSU en Informática en proceso de convertirme en ingeniero en esa carrera y también en la carrera de Ingeniería en Sistemas. Me gustaría que conozcas más sobre mí, ¡Así que revisa estas 3 cosas importantes que he seleccionado para ti!';

    let infoP = document.getElementById('infoP');
    infoP.innerHTML = 'Información personal';

    let descP = document.getElementById('descP');
    descP.innerHTML = 'Yo nací en Venezuela y aún vivo allí. Tengo 20 años ya que mi nacimiento fue el 23 de Octubre del 2001. Soy el último hijo de 2 en mi casa. Desde que era un niño amaba las computadoras, y a la edad de 13 años tuve mi primera computadora personal para jugar videojuegos. Allí fue cuando mi pasión por las computadoras verdaderamente empezó.'

}

// Give an event to a button
let buttonT = document.getElementById('translateB');
buttonT.addEventListener('click', translateF);



