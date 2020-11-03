---
title: Easy SEO Wins
date: "2020-02-14T22:40:32.169Z"
---

Over the last year, I've been putting a lot of time into learning the ins-and-outs of SEO. I see it as the best way to generate organic traffic and also one of the easiest. All it takes is a little behind the scenes work, and you're off to the races.

##Meta Tags
When you think of SEO implementation, meta tags are usually the first thing that comes to mind. While they're not the essential factor in your SEO ranking, they're still crucial to have on your site. Depending on your site's content, you can implement a large number of different types of meta tags; see the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta). The two I focus on the most, though, are the title and description. These are the two tags that will show up first on Google and will be the most significant factor in if the user chooses to click on your site.

![Example search result](/article-images/seo-article-1.png)

I like to format titles like this: "[Name of page] | [Name of site]" so that way all relevant information is in the title. As for descriptions, this depends a lot on your site content. For e-commerce, I've put product descriptions, regional information, etc. into the description tag. See this recent example: 

![Example product image](/article-images/seo-article-2.png)

So it's safe to say that the description tag is more contextual, and you might have to get creative with the content for it.

An important note to point out about the title and description tags are that you should give your best effort to make these tags unique for each page. Google will flag duplicate tags as duplicate content, which will hurt your SEO performance. 

##Open Graph
Open Graph tags allow your site content to become "rich" when referenced on a social media site or the likes. The useful thing about Open Graph tags is there is an overlap between Meta Tags. The title and description content you used previously can also be used on Open Graph tags; see the [Open Graph Docs](https://ogp.me/) for implementation details. The last tag I'd deem necessary for Open Graph is an image tag. This image needs to be super clicky so that it stands out amongst other content on a social media site. I generate these images dynamically so that they don't become stale every time I post a new article. So depending on the site you're building, dynamic images could be a good investment for you.

![Example open graph image](/article-images/seo-article-3.png)

##Document structuring
Structuring your document correctly to optimize for SEO is very important, yet one of the big misses by people building a site. This structuring can become complicated depending on the size of the site, but if you set out rules beforehand, you will succeed. 

Rules I follow are, one "H1" tag per page, any other headings need to be proceeded by a parent, i.e., an "H3" tag should only exist if it's underneath and "H2" tag in the document. Make sure paragraphs are in "p" tags and not a "div". For you React folk, a link should be an "a" tag, not a "button" or "span". Use aria-labels for buttons or links that don't contain copy.

Using these rules will set you up for success, and as you build out more structure, you will discover new best practices to follow.

##Schema Structures
Schema structures are less common and depend on if your site content makes sense to put into one. Here's a concise list from schema.org about different data types you can put into a schema: https://schema.org/docs/schemas.html. 

One schema type I've used and had success with is product data. I'm able to feed Google pricing, stock, ratings, and more, which helps users get "richer" content in their search results. So, if you have content that fits into a schema type, use it, it will pay off immensely. 

##Finishing up
While these are some "easy wins" you can implement to increase your organic search traffic, at the end of the day, content is king. If you'd like to read more about this, I'd suggest checkout out [Harry Dry's SEO Articles](https://marketingexamples.com/seo), the one about [long tail keywords](https://marketingexamples.com/seo/dominate-long-tail-keywords) being the one I find the most revealing. 

If you find yourself still struggling to gain organic search traffic, reach out to me on [Twitter](https://twitter.com/kpmdev), where I'd be more than happy to help you out!