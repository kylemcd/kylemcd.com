import React from 'react';

import {
    Container,
    Copyright,
    SocialList,
    SocialListItem,
    SocialListLink
} from './styled';

const Footer = () => {
    return (
        <Container>
            <Copyright>
                &copy; 2011-{new Date().getFullYear()} &mdash; Kyle McDonald 
            </Copyright>
            <SocialList>
                <SocialListItem>
                    <SocialListLink 
                        href="https://twitter.com/kpmdev"
                        target="_blank"
                        rel="noopener"
                    >
                        Twitter
                    </SocialListLink>
                </SocialListItem>
                <SocialListItem>
                    <SocialListLink 
                        href="https://github.com/kylemcd"
                        target="_blank"
                        rel="noopener"
                    >
                        GitHub
                    </SocialListLink>
                </SocialListItem>
                <SocialListItem>
                    <SocialListLink 
                        href="https://linkedin.com/in/kylemcd1/"
                        target="_blank"
                        rel="noopener"
                    >
                        LinkedIn
                    </SocialListLink>
                </SocialListItem>
            </SocialList>
        </Container>
    );
}

export default Footer;
