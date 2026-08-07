# vivekvkashyap.github.io

My personal site. Plain HTML and CSS — no build step, no dependencies.
Edit a file, push it, it's live.

## Files

```
index.html          Intro page — photo, bio, links, interests
blog.html           List of posts
projects.html       List of projects
posts/              One HTML file per blog post
css/style.css       All styling. Colours are variables at the top.
js/theme.js         Dark/light toggle, remembers your choice
images/             Put your photo here
```

## Viewing it locally

Open a terminal in this folder and run:

```
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. Press `Ctrl+C` to stop.

(You can also just double-click `index.html`, but the local server matches
how GitHub Pages will actually serve it.)

## Publishing changes

```
git add .
git commit -m "describe what you changed"
git push
```

GitHub Pages rebuilds within about a minute.

## Adding a blog post

1. Copy an existing file in `posts/` to a new name, e.g. `posts/my-post.html`.
2. Change the `<title>`, the `<h1>`, the two `<time>` values, and the body text.
3. Add a row to `blog.html`, newest at the top:

```html
<a class="row blog-row" href="posts/my-post.html">
  <span class="title">My post title</span>
  <time class="date" datetime="2026-07-18">18 Jul 2026</time>
</a>
```

## Adding a project

Copy a block in `projects.html`, bump the `.ix` number, and point `href`
at the GitHub repo.

## Changing colours

Everything comes from the variables at the top of `css/style.css` —
one block for dark, one for light. Change a hex value there and the
whole site follows.

## Still to fill in

- [x] Photo — `images/vivek.jpg`. Replace that file to change it.
- [ ] Real Twitter and LinkedIn URLs in `index.html`
- [ ] Rewrite the bio and interests in `index.html`
- [ ] Real projects and GitHub links in `projects.html`
- [ ] Replace the two sample posts in `posts/`
