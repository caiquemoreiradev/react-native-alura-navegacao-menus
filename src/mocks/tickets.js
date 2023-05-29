import fastFurious from '../../assets/movies/fast-furious.jpg';
import guardians from '../../assets/movies/guardians.jpg';
import johnWick from '../../assets/movies/john-wick.jpg';

export const tickets = [
    {
        id: 1,
        name: 'Guardiões da Galáxia: Volume 3',
        price: 19.90,
        description: 'Peter Quill, que ainda está a recuperar da perda de Gamora, tem que reunir a sua equipa para defender o universo e proteger um dos seus. Uma missão que, se não for concluída com sucesso, pode levar ao fim dos Guardiões como os conhecemos.',
        time: '18:30',
        poster: guardians,
        quantity: 1,
        available: 15
    },
    {
        id: 2,
        name: 'Velozes & Furiosos 10',
        price: 19.90,
        description: 'Ao longo de muitas missões e contra probabilidades impossíveis, Dom Toretto e sua família foram mais espertos, mais nervosos e superaram todos os inimigos em seu caminho. Agora, eles enfrentam o oponente mais letal que já enfrentaram: uma ameaça terrível emergindo das sombras do passado, alimentada por vingança de sangue e determinada a destruir esta família e destruir tudo - e todos - que Dom ama, para sempre.',
        time: '20:30',
        poster: fastFurious,
        quantity: 1,
        available: 15
    },
    {
        id: 3,
        name: 'John Wick 4: Baba Yaga',
        price: 19.90,
        description: 'Com o preço por sua cabeça cada vez maior, John Wick leva sua luta contra a alta mesa global enquanto procura os jogadores mais poderosos do submundo, de Nova York a Paris, de Osaka a Berlim.',
        time: '20:30',
        poster: johnWick,
        quantity: 1,
        available: 15
    },
]