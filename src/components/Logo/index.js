import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoImage = styled.img`
margin-right:10px
`
const LogoContainer= styled.div`
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage 
            src={logo} 
            alt='logo'/>
            <p className='logo'><strong>Alura </strong>    Books</p>
        </LogoContainer>)
}

export default Logo