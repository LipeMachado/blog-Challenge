import styled from 'styled-components'

export const NabBarContainerDiv = styled.div`
    background: var(--gradientDefault);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 24vh;
    padding: 2.5% 20%;

    @media screen and (min-width: 768px) and (max-width: 1023px){
        width: 100%;
        height: 20vh;
        padding: 2% 5%;
    }

    @media screen and (max-width: 767px){
        width: 100%;
        height: 18vh;
        padding: 4% 5%;
    }
`;

export const NavBarTitlesNav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;

    h2 {
        font-weight: 400;
        font-size: 1.5rem;
    }
`;

export const NavBarSearchDiv = styled.div`
    height: 6vh;
    border-radius: 5px;
    background: var(--grayTransparent);
    width: 100%;
    display: flex;
    align-items: center;

    svg {
        margin: 2%;
    }
`;

export const NavBarSearchInput = styled.input`
    border: none;
    width: 100%;
    background: none;
    border-radius: 5px;
    padding: 0 1%;
    outline: none;
    color: var(--white);
    font-weight: 400;
    font-size: 1.4rem;

    &::placeholder {
        color: var(--white);
    }
`;

export const MainContainerDiv = styled.div`
    padding: 2.5% 20%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) and (max-width: 1023px){
        padding: 2% 5%;
    }

    @media screen and (max-width: 767px){
        padding: 2% 5%;
    }
`;