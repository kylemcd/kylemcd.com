---
title: Centering literally everything with CSS
date: "2019-07-24T22:40:32.169Z"
bg: "https://images.unsplash.com/photo-1501619521425-4172740edc9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80"
---

I've always noticed a common theme amongst the dev community when it comes to "centering things" and that common theme is that... "it's hard". But the thing is... it's really not. In this article, I'll show you my _go-to_ method when it comes to centering anything. Of course, there are tons of other ways to center things, not denying that, but this is the way I found to consistently work for me.

## Text
In this section I will cover how to center text itself, i.e. not 'text-align: center' as that is more presentational, but actually centering text inside of an element.

### Centering Text Horizontally
Centering text horizontally is super easy. Declare your display rule as flex (display: flex) and then use justify-content to then center it (justify-content: center). The one caveat to this is that if your flex-direction is set to column (flex-direction: column) you will need to use the rule 'align-items: center' instead of 'justify-content: center'.

#### HTML
```html
<div class="center-text">
  The thing I want to center
</div>
```
&nbsp;
#### CSS
```css
.center-text {
  display: flex;
  justify-content: center;
}
```
&nbsp;
#### In Action

<style type="text/css">
  .center-text {
    display: flex;
    justify-content: center;
    border: 2px solid #ccc; /* a border for effect */
  }
</style>

<div class="center-text">The thing I want to center</div>

&nbsp;

### Centering Text Vertically
Centering text vertically is just as simple as the horizontal centering. For this, you will use 'align-items: center'. Again, if your flex-direction is set to column you will substitute 'justify-content: center' for 'align-items: center'. Notice a trend?.. it's always one or the other.

#### HTML
```html
<div class="center-text-vertically">
  The thing I want to center
</div>
```
&nbsp;
#### CSS
```css
.center-text-vertically {
  align-items: center;
  display: flex;
  height: 200px; /* This is a fabricated height, to show the vertical centering. */
}
```
&nbsp;
#### In Action

<style type="text/css">
  .center-text-vertically {
    align-items: center;
    display: flex;
    height: 200px; /* This is a fabricated height, to show the vertical centering. */
    border: 2px solid #ccc; /* a border for effect */
  }
</style>

<div class="center-text-vertically">The thing I want to center</div>

&nbsp;

### Centering Text Vertically and Horizontally
The pinacle of centering text... to accomplish this we just combine the last two examples! 

#### HTML
```html
<div class="center-text-vertically-horizontally">
  The thing I want to center
</div>
```
&nbsp;
#### CSS
```css
.center-text-vertically-horizontally {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 200px; /* This is a fabricated height, to show the vertical centering. */
}
```
&nbsp;
#### In Action

<style type="text/css">
  .center-text-vertically-horizontally {
    align-items: center;
    display: flex;
    height: 200px; /* This is a fabricated height, to show the vertical centering. */
    justify-content: center;
    border: 2px solid #ccc; /* a border for effect */
  }
</style>

<div class="center-text-vertically-horizontally">The thing I want to center</div>

&nbsp;

## Centering Elements
Centering elements is exactly the same as centering text. So if you're noticing a pattern, that's on purpose, one simple way that will always do the trick!

_P.S.: If your text element as any tags inside of it (`<sup>`, `<em>`, etc..) you will want to use this method._

### Centering Element Horizontally
Apply the same rules we used on text and there you go, we have a centered element. Cool.. right?

#### HTML
```html
  <div class="center-element-horizontal-parent">
    <div class="center-element-horizontal-child">
      The stuff we're centering
    </div>
  </div>
```
&nbsp;
#### CSS
```css
  .center-element-horizontal-parent{
    display: flex;
    justify-content: center;
  }

  .center-element-horizontal-child {
    width: 100px; /* This is a fabricated width, this will definitely change for you. */
  }
```
&nbsp;
#### In Action
<style type="text/css">
 .center-element-horizontal-parent{
    display: flex;
    justify-content: center;
    border: 2px solid #ccc; /* a border for effect */
  }

  .center-element-horizontal-child {
    border: 2px solid white; /* a border for effect */
    width: 100px; /* This is a fabricated width, this will definitely change for you. */
  }
</style>

<div class="center-element-horizontal-parent">
  <div class="center-element-horizontal-child">
    The thing I want to center
  </div>
</div>
&nbsp;

### Centering Element Vertically
Apply the same rules we used on text and there you go, we have a centered element. Getting it?

#### HTML
```html
  <div class="center-element-vertical-parent">
    <div class="center-element-vertical-child">
      The stuff we're centering
    </div>
  </div>
```

&nbsp;
#### CSS
```css
  .center-element-vertical-parent{
    align-items: center;
    display: flex;
    height: 200px; /* This is a fabricated height, to show the vertical centering. */
  }

  .center-element-vertical-child {
    width: 100px; /* This is a fabricated width, this will definitely change for you. */
  }
```
&nbsp;
#### In Action
<style type="text/css">
 .center-element-vertical-parent{
    align-items: center;
    display: flex;
    height: 200px; /* This is a fabricated height, this will definitely change for you. */
    border: 2px solid #ccc; /* a border for effect */
  }

  .center-element-vertical-child {
    border: 2px solid white; /* a border for effect */
    width: 100px; /* This is a fabricated width, this will definitely change for you. */
  }
</style>

<div class="center-element-vertical-parent">
  <div class="center-element-vertical-child">
    The thing I want to center
  </div>
</div>
&nbsp;

### Centering Element Vertically and Horizontally
Apply the same rules we used on text and there you go, we have a centered element. Easy peasy!

#### HTML
```html
  <div class="center-element-vertical-horizontal-parent">
    <div class="center-element-vertical-horizontal-child">
      The stuff we're centering
    </div>
  </div>
```
&nbsp;
#### CSS
```css
  .center-element-vertical-horizontal-parent{
    align-items: center;
    display: flex;
    justify-content: center;
    height: 200px; /* This is a fabricated height, to show the vertical centering. */
  }

  .center-element-vertical-horizontal-child {
    width: 100px; /* This is a fabricated width, this will definitely change for you. */
  }
```
&nbsp;
#### In Action
<style type="text/css">
 .center-element-vertical-horizontal-parent{
    align-items: center;
    display: flex;
    justify-content: center;
    height: 200px; /* This is a fabricated height, this will definitely change for you. */
    border: 2px solid #ccc; /* a border for effect */
  }

  .center-element-vertical-horizontal-child {
    border: 2px solid white; /* a border for effect */
    width: 100px; /* This is a fabricated width, this will definitely change for you. */
  }
</style>

<div class="center-element-vertical-horizontal-parent">
  <div class="center-element-vertical-horizontal-child">
    The thing I want to center
  </div>
</div>

&nbsp;
## Conclusion

As you see, centering stuff with CSS really isn't _that_ hard. Of course you'll run into examples that may not fit this mold, but from experience, this will solve 90% of your centering problems. If you *do* run into an instance where this mold doesn't work for you [tweet at me](https://twitter.com/kpmdev), I'd be happy to help.