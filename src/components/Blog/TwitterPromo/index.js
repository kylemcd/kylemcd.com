import React from 'react';
import { TwitterFollowButton } from 'react-twitter-embed';

import {
    Container,
    Avatar,
    Content,
    Heading,
    Paragraph
} from './styled';

const TwitterPromo = () => {
    return (
        <Container>
            <Avatar src="/avatar.jpg" alt="Picture of Kyle McDonald"/>
            <Content>
                <Heading>
                    Thanks for reading!
                </Heading>
                <Paragraph>
                    Follow me on Twitter to stay up to date on my latest posts
                </Paragraph>
                <TwitterFollowButton
                    screenName={'kpmdev'}
                />
            </Content>
        </Container>
    );
}

export default TwitterPromo;
