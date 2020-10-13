import React from 'react';
import Helmet from 'react-helmet';

import {
    Navigation,
    Footer
} from '../../../components';

const Default = props => {
    const { children, location } = props;
    const url = location.href ? location.href : '';

    return (
        <div>
            <Helmet>
                <html lang="en" />
                <meta charset="UTF-8" />
                <meta property="og:title" content="Kyle McDonald"/>
                <meta property="og:description" content="Personal site for the Chicago-based Software Engineer"/>
                <meta property="og:image" content="https://kylemcd.com/avatar.jpg"/>
                <meta property="og:url" content={url}/>

                <meta name="twitter:title" content="Kyle McDonald"/>
                <meta name="twitter:description" content="Personal site for the Chicago-based Software Engineer"/>"/>
                <meta name="twitter:image" content="https://kylemcd.com/avatar.jpg"/>
                <meta name="twitter:card" content="summary"/>
            </Helmet>
            <Navigation/>
            {children}
            <Footer/>
        </div>
    );
}

export default Default;
