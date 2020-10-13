import React, { useEffect, useState, useRef } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import {
    TwitterShareButton,
    TwitterIcon,
    LinkedinIcon,
    LinkedinShareButton,
    RedditShareButton,
    RedditIcon
} from 'react-share';

import {
    Default,
    TwitterPromo,
    RecommendedArticles
} from '../../components';

import  {
    Container,
    PostContainer,
    NavigationContainer,
    NewsletterContainer,
    QuickNavigationContainer,
    NavigationHeading,
    NavigationLink,
    ShareButtons,
    Info,
    Title,
    Date,
    Post,
    // Newsletter stuff
    Heading,
    Paragraph,
    Label,
    Field,
    FieldContainer,
    Button
} from '../../components/PageStyles/BlogStyles';

const BlogPost = ({ data, location }) => {

    const url = location.href ? location.href : '';

    const {
        markdownRemark: {
            frontmatter: {
                title,
                date
            },
            fields : {
                slug,
                readingTime : {
                    text
                }
            },
            excerpt,
            html
        }
    } = data;

    const post = useRef(null);

    const [ headings, setHeadings ] = useState(null);

    useEffect(() => {
        const postDiv = post.current;

        const headingsRaw = postDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const headings = [...headingsRaw].map(heading => {
            let indentLevel = 0;
            const tagName = heading.tagName;

            if(tagName === 'H3'){
                indentLevel = 1
            } else if(tagName === 'H4'){
                indentLevel = 2
            } else if(tagName === 'H5'){
                indentLevel = 3
            } else if(tagName === 'H6'){
                indentLevel = 4
            }

            return {
                text: heading.innerText, 
                heading,
                indentLevel
            }
        });

        setHeadings(headings)
    }, [])

    const handleNavigationClick = element => {
        element.scrollIntoView({behavior: "smooth", block: "start"});
    }

    const getOgSlug = slug => {
        const slugSplit = slug.split('/')
        const ogSlug = slugSplit[slugSplit.length - 2]

        return ogSlug;
    }
    
    return (
        <Default
            location={location}
        >
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={excerpt}/>
                <meta name="author" content="Kyle McDonald" />

                <meta property="og:title" content={title}/>
                <meta property="og:description" content={excerpt}/>
                <meta property="og:url" content={`https://kylemcd.com/posts/${getOgSlug(slug)}`}/>
                <meta property="og:image" content={`https://kylemcd.com/og-images/blog/${getOgSlug(slug)}.png`}/>

                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={excerpt}/>
                <meta name="twitter:image" content={`https://kylemcd.com/og-images/blog/${getOgSlug(slug)}.png`}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Helmet>
            <Container>
                <NavigationContainer>
                    <QuickNavigationContainer>
                        <NavigationHeading>
                            Quick Navigate
                        </NavigationHeading>
                        {headings && headings.map((heading, index) => (
                            <NavigationLink
                                onClick={() => handleNavigationClick(heading.heading)}
                                indentLevel={heading.indentLevel}
                                key={index}
                            >
                                {heading.text}
                            </NavigationLink>
                        ))}
                    </QuickNavigationContainer>
                </NavigationContainer>
                <PostContainer>
                    <Info>
                        <Date>
                            {date} &nbsp;&middot;&nbsp; {text}
                        </Date>
                        <Title>
                            {title}
                        </Title>
                    </Info>
                    <Post 
                        dangerouslySetInnerHTML={{ __html: `<div>${html}</div>` }}
                        as="div"
                        ref={post}
                    />
                    <ShareButtons>
                        <TwitterShareButton
                            url={`https://kylemcd.com/posts/${getOgSlug(slug)}`}
                            title={title}
                        >
                            <TwitterIcon size={24} round={true}/>
                        </TwitterShareButton>
                        <LinkedinShareButton
                            url={`https://kylemcd.com/posts/${getOgSlug(slug)}`}
                            title={title}
                        >
                            <LinkedinIcon size={24} round={true}/>
                        </LinkedinShareButton>
                        <RedditShareButton
                            url={`https://kylemcd.com/posts/${getOgSlug(slug)}`}
                            title={title}
                        >
                            <RedditIcon size={24} round={true}/>
                        </RedditShareButton>
                    </ShareButtons>
                    <TwitterPromo/>
                    <RecommendedArticles slug={slug}/>
                    {/* <NewsletterContainer>
                        <Heading>
                            Well if you made it this far...
                        </Heading>
                        <form action="https://kylemcd.us19.list-manage.com/subscribe/post?u=5f38c3d669ea51ac7ac7d8d39&amp;id=99fc8e7822" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                            <Paragraph>
                                You should probably subscribe to my newsletter
                            </Paragraph>
                            <Label htmlFor="mce-EMAIL">Email</Label>
                            <FieldContainer>
                                <Field name="EMAIL" id="mce-EMAIL" required/>
                                <Button type="submit">Go!</Button>
                            </FieldContainer>
                        </form>
                    </NewsletterContainer> */}
                </PostContainer>
            </Container>
        </Default>
    );
}

export default BlogPost;


export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      fields {
          slug
          readingTime {
              text
          }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        bg
      }
    }
  }
`;
