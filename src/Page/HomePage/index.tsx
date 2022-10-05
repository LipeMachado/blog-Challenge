import React from 'react';

import {
    NabBarContainerDiv,
    NavBarTitlesNav,
    NavBarSearchDiv,
    NavBarSearchInput,
    MainContainerDiv
} from './style';

import { MagnifyingGlass } from 'phosphor-react';
import Posts from '../../Components/Posts';

const HomePage: React.FC = () => {
    return (
        <>
            <NabBarContainerDiv>
                <NavBarTitlesNav>
                    <h2>LipeCode</h2>
                    <h2>Blog</h2>
                </NavBarTitlesNav>
                <NavBarSearchDiv>
                    <MagnifyingGlass size={20} />
                    <NavBarSearchInput type="text" placeholder="Search in blog" />
                </NavBarSearchDiv>
            </NabBarContainerDiv>
            <MainContainerDiv>
                <Posts />
            </MainContainerDiv>
        </>
    );
}

export default HomePage;