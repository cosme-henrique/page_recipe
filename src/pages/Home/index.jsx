import { Container } from './styles';

import ImgOmelete from '../../assets/omelete.jpeg'

export function Home() {
    return (
        <Container>
            <img src={ImgOmelete} alt="Imagem de um omelete" />

                <h1>Receita Simples de Omelete</h1>
                <p>
                    Um prato fácil e rápido, perfeito para qualquer refeição. Esta omelete clássica combina ovos batidos cozidos
                    com perfeição, opcionalmente recheado com queijo, vegetais ou carnes de sua escolha.
                </p>

                <section className='time-preparation'>
                    <h2>Tempo de preparação</h2>

                    <ul>
                        <li>
                            <strong>Total:</strong> Aproximadamente 10 minutos 
                        </li>

                        <li>
                            <strong>Preparação:</strong> 5 minutos
                        </li>

                        <li>
                            <strong>Cozinhando:</strong> 5 minutos
                        </li>
                    </ul>
                </section>

                <section className='ingredients'>
                    <h2>Ingredientes</h2>

                    <ul>
                        <li>
                            2-3 ovos grandes
                        </li>

                        <li>
                            Sal, a gosto
                        </li>

                        <li>
                            Pimenta a gosto
                        </li>

                        <li>
                            1 colher de sopa de manteiga ou óleo
                        </li>

                        <li>
                            Recheios opcionais: queijo, legumes em cubos, carnes cozidas, ervas
                        </li>
                    </ul>
                </section>

                <section className='instrucoes'>
                    <h2>Instruções</h2>

                    <ol>
                        <li>
                            Bata os ovos: Numa tigela, bata os ovos com uma pitada de sal e pimenta até ficarem bem misturados.Você pode adicionar uma colher de sopa de água ou leite para obter uma textura mais fofa.
                        </li>

                        <li>
                            Aqueça a panela: Coloque uma frigideira antiaderente em fogo médio e adicione manteiga ou óleo.
                        </li>

                        <li>
                            Cozinhe a omelete: Assim que a manteiga derreter e borbulhar, coloque os ovos. Incline a panela para garantiros ovos cobrem uniformemente a superfície.
                        </li>

                        <li>
                            Adicione recheios (opcional): Quando os ovos começarem a endurecer nas bordas, mas ainda estiverem um pouco escorrendo nono meio, polvilhe os recheios escolhidos sobre metade da omelete.
                        </li>

                        <li>
                            Dobre e sirva: Enquanto a omelete continua cozinhando, levante cuidadosamente uma das pontas e dobre-a sobre orecheios. Deixe cozinhar por mais um minuto e depois coloque-o em um prato.
                        </li>

                        <li>
                            Aproveite: Sirva quente, com mais sal e pimenta se necessário.
                        </li>
                    </ol>
                </section>         
        </Container>
    )
}