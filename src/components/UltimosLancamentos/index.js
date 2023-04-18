import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo'
import CardRecomendacao from '../CardRecomendacao'
import imagemLivro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
background-color: #EBECEE;
padding-bottom: 20px;
display: flex;
flex-direction: column;
`

const NovosLivrosContainer = styled.div`
margin-top: 30px;
display:flex;
width 100%;
justify-content: center;
cursor: pointer;
`



function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px">
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}
            </NovosLivrosContainer>
            <CardRecomendacao
            titulo="Talvez você se interesse por: "
            subtitulo='Angular 11'
            descricao='Construindo uma aplicação integrada com a plataforma Google'
            imagem={imagemLivro}
            
            />
            
            
        </UltimosLancamentosContainer>


    )
}
export default UltimosLancamentos