import React from 'react';
import {
    PostsContainerDiv,
    PostsLikeAndDateDiv,
    PostTitleH3,
    PostParagraphP
} from './style';

import { Heart } from 'phosphor-react'

const Posts: React.FC = () => {
    return (
        <>
            <PostsContainerDiv>
                <PostsLikeAndDateDiv>
                    <span>17 de jan, 2022</span>
                    <Heart size={23} />
                </PostsLikeAndDateDiv>
                <PostTitleH3>Lorem ipsum</PostTitleH3>
                <PostParagraphP>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis earum at illo repudiandae dolorem rerum laborum, fugiat totam ea commodi, magnam impedit soluta? Recusandae reprehenderit quidem aspernatur odio qui nobis?</PostParagraphP>
            </PostsContainerDiv>
        </>
    );
}

export default Posts;