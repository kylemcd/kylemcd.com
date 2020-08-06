import React from 'react';

import {
    HomeNewsletter
} from '../../../components';

import {
    Container,
    Avatar,
    Heading,
    Paragraph
} from './styled';

const HomeHero = () => {
    return (
        <Container>
            <Avatar src="/avatar.jpg" alt="Picture of Kyle McDonald"/>
            <Heading>
                Hey there!
            </Heading>
            <Paragraph>
                I'm Kyle McDonald, a Senior Software Engineer based in Chicago, where I am currently pushing code at <a href="https://foxtrotco.com" target="_blank" rel="noopener">Foxtrot</a>. My main focus is the front-end, where I love to write beautiful applications in React. 
                <br/><br/>
                This is where I write my long-form thoughts about development, business, and whatever else piques my interest. For my day-to-day ramblings, be sure to follow me over on <a href="https://twitter.com/designbykyle" target="_blank" rel="noopener">Twitter</a>.
            </Paragraph>

            <HomeNewsletter/>
        </Container>
    );
}

export default HomeHero;
