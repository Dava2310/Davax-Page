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

    let infoS = document.getElementById('infoS');
    infoS.innerHTML = 'Historial de Estudios';

    let descS = document.getElementById('descS');
    descS.innerHTML = 'Mis estudios empezaron en una escuela llamada: "UEP Morichal" y desde la edad de 13 a 16 años, estaba en una secundaria llamada: "CELAM". Después, empecé a estudiar Ingeniería en Informática en enero del 2019 cuando tenía 17 años, y en octubre del mismo año empecé a estudair Ingeniería en Sistemas en una diferente universidad. Si quieres saber más de ellas, ¡Haz click aquí!';

    let descH = document.getElementById('descH');
    descH.innerHTML = 'Además de estudiar, me gusta jugar videojuegos como Minecraft, Osu! y League of Legends. Me gusta hacer vídeos de YouTube en mi canal. Y me gusta salir de vez en cuando con mi novia y otras personas incluyendo a mi familia';

    let headerProjects = document.getElementById('headerProjects');
    headerProjects.innerHTML = 'PROYECTOS';

    let recentProjects =  document.getElementById('recentProjects');
    recentProjects.innerHTML = 'Mis importantes proyectos recientes';

    let descProjects = document.getElementById('descProjects');
    descProjects.innerHTML = 'Aquí podrás encontrar algunos de los proyectos que he desarrollado (la mayoría de ellos en un grupo de personas) para comunidades y otros proyectos personales de mi propiedad que están relacionados a mi carrera. Los proyectos que están programados en código tendrán su respectivo link a mi repositorio de GitHub así si quieres verlos en más detalles, ¡eres libre de hacerlo!';

    let headerContact = document.getElementById('headerContact');
    headerContact.innerHTML = 'CONTACTO';

    let headerContact2 = document.getElementById('headerContact2');
    headerContact2.innerHTML = 'Ponerse en contacto';

    let descContact = document.getElementById('descContact');
    descContact.innerHTML = 'Eres libre de contactarme a través de este formulario. Asegúarete de colocar tu correo y teléfono para que así pueda responderte tan pronto como sea posible.'
}

// Give an event to a button
let buttonT = document.getElementById('translateB');
buttonT.addEventListener('click', translateF);



