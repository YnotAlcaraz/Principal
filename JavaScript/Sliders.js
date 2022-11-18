//Slider películas
//--------------------------------------------------------------------------------------------------------------------------------//
let peliculas = [];
    peliculas[0] = 'img/Peliculas/imagen1.png';
    peliculas[1] = 'img/Peliculas/imagen2.png';
    peliculas[2] = 'img/Peliculas/imagen3.png';
    peliculas[3] = 'img/Peliculas/imagen4.jpg';
    peliculas[4] = 'img/Peliculas/imagen5.jpg';
let texto1 = [];
    texto1[0] = '<a href="https://www.youtube.com/watch?v=P2tfZksgEy4&ab_channel=4KHDRMedia">Inception</a>';
    texto1[1] = '<a href="https://www.youtube.com/watch?v=jnDjdrfilzI&ab_channel=Michael">Interstellar</a>';
    texto1[2] = '<a href="https://www.youtube.com/watch?v=lCqLoH4NmiU&ab_channel=JoeHisaishi-Topic">Spirited Away</a>';
    texto1[3] = '<a href="https://www.youtube.com/watch?v=ZYLTYZlZymM&ab_channel=BechirTrabelsi">Dunkirk</a>';
    texto1[4] = '<a href="https://www.youtube.com/watch?v=c2LuRgzvgtI&ab_channel=HaSanMDD">Star Wars: The Revenge of The Sith</a>';
let indexPeliculas = 0;

//Slider Anime
//--------------------------------------------------------------------------------------------------------------------------------//
let Anime = [];
    Anime[0] = 'img/Anime/imagen1.jpg';
    Anime[1] = 'img/Anime/imagen2.png';
    Anime[2] = 'img/Anime/imagen3.png';
    Anime[3] = 'img/Anime/imagen4.png';
    Anime[4] = 'img/Anime/imagen5.png';
let texto2 = [];
    texto2[0] = '<a href="https://www.youtube.com/watch?v=Ky0YYa_kpl4&ab_channel=Magesztika">Girls Last Tour</a>';
    texto2[1] = '<a href="https://www.youtube.com/watch?v=7AeayGwmk2c&ab_channel=FictionAdinfinitum">Neon Genesis Evangelion</a>';
    texto2[2] = '<a href="https://www.youtube.com/watch?v=vci9YwpFFcA&ab_channel=CrunchyrollCollection">Overlord</a>';
    texto2[3] = '<a href="https://www.youtube.com/watch?v=OCc8LKU-hwg&ab_channel=AmarTiwi">Violet Evergarden</a>';
    texto2[4] = '<a href="https://www.youtube.com/watch?v=XG9XCndxT8E&ab_channel=CrunchyrollCollection">Hitori Bocchi</a>';
let indexAnime = 0;

//Slider Videojuegos
//--------------------------------------------------------------------------------------------------------------------------------//
let Videojuego = [];
    Videojuego[0] = 'img/Videojuego/imagen1.jpg';
    Videojuego[1] = 'img/Videojuego/imagen2.png';
    Videojuego[2] = 'img/Videojuego/imagen3.png';
    Videojuego[3] = 'img/Videojuego/imagen4.png';
    Videojuego[4] = 'img/Videojuego/imagen5.jpg';
let indexVideojuego = 0;

let texto3 = [];
    texto3[0] = '<a href="https://www.youtube.com/watch?v=u3UiwJE8UH0&ab_channel=SOSmartini">Portal 2</a>';
    texto3[1] = '<a href="https://www.youtube.com/watch?v=V8kdtxPvCCE&ab_channel=YoloSOLO">Call of Duty: World at War</a>';
    texto3[2] = '<a href="https://www.youtube.com/watch?v=Nsps0I58yUM&ab_channel=allaboutVGmusic">Dark Souls</a>';
    texto3[3] = '<a href="https://www.youtube.com/watch?v=dcpQQsxoy5w&ab_channel=LewieG">Stardew Valley</a>';
    texto3[4] = '<a href="https://www.youtube.com/watch?v=h-rj8HVW3PQ&ab_channel=Crimson">Metal Gear Rising: Revengeance</a>';

//Slider Renders
//--------------------------------------------------------------------------------------------------------------------------------//
let Render = [];
    Render[0] = 'img/Render/imagen1.png';
    Render[1] = 'img/Render/imagen2.png';
    Render[2] = 'img/Render/imagen3.png';
    Render[3] = 'img/Render/imagen4.png';
    Render[4] = 'img/Render/imagen5.png';
let indexRender = 0;

//--------------------------------------------------------------------------------------------------------------------------------//

function siguientePelicula(){
    if (indexPeliculas < 4) {
        indexPeliculas++;
    } else {
        indexPeliculas = 0;
    }
    document.PeliculaImagen.src=peliculas[indexPeliculas];
    document.getElementById("NombrePelicula").innerHTML = texto1[indexPeliculas];
}

function anteriorPelicula(){
    if (indexPeliculas > 0) {
        indexPeliculas--;
    } else {
        indexPeliculas = 4;
    }
    document.PeliculaImagen.src=peliculas[indexPeliculas];
    document.getElementById("NombrePelicula").innerHTML = texto1[indexPeliculas];
}

//--------------------------------------------------------------------------------------------------------------------------------//

function siguienteAnime(){
    if (indexAnime < 4) {
        indexAnime++;
    } else {
        indexAnime = 0;
    }
    document.AnimeImagen.src=Anime[indexAnime];
    document.getElementById("NombreAnime").innerHTML = texto2[indexAnime];
}

function anteriorAnime(){
    if (indexAnime > 0) {
        indexAnime--;
    } else {
        indexAnime = 4;
    }
    document.AnimeImagen.src=Anime[indexAnime];
    document.getElementById("NombreAnime").innerHTML = texto2[indexAnime];
}

//--------------------------------------------------------------------------------------------------------------------------------//

function siguienteVideojuego(){
    if (indexVideojuego < 4) {
        indexVideojuego++;
    } else {
        indexVideojuego = 0;
    }
    document.VideojuegoImagen.src=Videojuego[indexVideojuego];
    document.getElementById("NombreVideojuego").innerHTML = texto3[indexVideojuego];
}

function anteriorVideojuego(){
    if (indexVideojuego > 0) {
        indexVideojuego--;
    } else {
        indexVideojuego = 4;
    }
    document.VideojuegoImagen.src=Videojuego[indexVideojuego];
    document.getElementById("NombreVideojuego").innerHTML = texto3[indexVideojuego];
}

//--------------------------------------------------------------------------------------------------------------------------------//

function siguienteRender(){
    if (indexRender < 4) {
        indexRender++;
    } else {
        indexRender = 0;
    }
    document.RenderImagen.src=Render[indexRender]; 
}

function anteriorRender(){
    if (indexRender > 0) {
        indexRender--;
    } else {
        indexRender = 4;
    }
    document.RenderImagen.src=Render[indexRender];
}

//--------------------------------------------------------------------------------------------------------------------------------//

setInterval(siguientePelicula, 3000);
setInterval(siguienteAnime, 3000);
setInterval(siguienteVideojuego, 3000);
setInterval(siguienteRender, 3000);