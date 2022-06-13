import { NavBox, Logo, LogoInput, LogoLabel, LogoList, Menu, ListMenu } from "./style"
import { GrMenu } from "react-icons/gr"

const Header = () => {
    return (
        <header>
            <NavBox>
                <Logo>Dev Jerlysson</Logo>
                <LogoInput type="checkbox" id="toggler" />
                <LogoLabel for="toggler"><GrMenu/></LogoLabel>
                <Menu>
                    <LogoList>
                        <li><ListMenu href="">Quem Sou</ListMenu></li>
                        <li><ListMenu href="">Projetos</ListMenu></li>
                        <li><ListMenu href="">Serviços</ListMenu></li>
                        <li><ListMenu href="">Conhecimento</ListMenu></li>
                    </LogoList>
                </Menu>
            </NavBox>
        </header>
    )
}

export default Header