import styled from "styled-components";

export const NavBox = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
`
export const ListMenu = styled.a`
    text-decoration: none;
    color:  inherit;
`
export const Logo = styled.a`
    margin-right: 50px;
`
export const LogoList = styled.ul`
    list-style: none;
    display: flex;
    gap: 25px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
`
export const LogoInput = styled.input`
    display: none;

    @media screen and (max-width: 600px) {
        :checked{
            max-height: 100%;
        }
    }
`
export const LogoLabel = styled.label`
    display: none;

    @media screen and (max-width: 600px) {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
    }
`
export const Menu = styled.div`
    @media screen and (max-width: 600px) {
        width: 100%;
        max-height: 0;
        overflow: hidden;
        :checked{
            max-height: 100%;
        }
    }
`