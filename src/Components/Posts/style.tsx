import styled from 'styled-components'

export const PostsContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    border-radius: 5px;
    background: var(--white);
    padding: 2%;
    margin: 2% 0;
`;

export const PostsLikeAndDateDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: var(--grayText);

    svg {
       path {
            stroke: var(--purple);
       } 
    }
`;

export const PostTitleH3 = styled.h3`
    padding: 2% 0 1% 0;
    color: var(--blackText);
`;

export const PostParagraphP = styled.p`
    color: var(--grayText);
`;