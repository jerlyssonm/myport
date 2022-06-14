/* import { NavBox, Logo, LogoInput, LogoLabel, LogoList, Menu, ListMenu } from "./style" */
import { GrMenu } from "react-icons/gr"
import "./style.css"

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <a href="#" className="logo">Dev Jerlysson</a>
                <input type="checkbox" id="toggler"/>
                <label htmlFor="toggler"><GrMenu/></label>
                <div className="menu">
                    <ul className="list">
                        <li><a href="#">Quem Sou</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Conhecimentos</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
/* <NavBox>
<Logo>Dev Jerlysson</Logo>
<LogoInput type="checkbox" id="toggler"/>
<LogoLabel htmlFor="toggler"><GrMenu/></LogoLabel>
<Menu>
    <LogoList>
        <li><ListMenu href="">Quem Sou</ListMenu></li>
        <li><ListMenu href="">Projetos</ListMenu></li>
        <li><ListMenu href="">Serviços</ListMenu></li>
        <li><ListMenu href="">Conhecimento</ListMenu></li>
    </LogoList>
</Menu>
</NavBox> 
*/