# HUGO Titi

## _Keep it simple, but not simpler_

**Titi** is a Hugo theme written by [Datasketch](https://datasketch.co)

Originally forked https://github.com/yihui/hugo-xmin.

Give it a try, clone this repository and type the following command on your terminal:

```sh
# You must have hugo installed
$ hugo server -s exampleSite
```

## Site Configuration
### Navbar
Configure the navbar aspect and items.

If the `logo` option is not set, it will be placed the site name instead.

```toml
# config.toml
...
[params]
  [params.nav]
    # navbar background color
    bg = ""
    # navbar text color
    color = ""
    # navbar logo
    logo = "path/to/image"
    # navbar logo width
    logoWidth = "150px"
    # override fixed navbar behavior (optional)
    fixed = false
```
This theme has two kind of menus enabled.
1. Burger menu

```toml
# config.toml
...
[menu]
  [[menu.burger]]
    # name to be displayed
    name = ""
    url = ""
    # position of the link inside the burger menu
    weight = 1
  [[menu.burger]]
    name = ""
    url = ""
    weight = 2
```
2. Navbar menu: place the links directly in the navbar

```toml
# config.toml
...
[menu]
  [[menu.nav]]
    name = ""
    url = ""
    weight = 1
```

### Social icons
Icons are pulled from [Font Awesome 4.7](https://fontawesome.com/v4.7.0/icons/). This way, you can use any icon listed on their page. These icons are placed in the right side of the navbar.

By default the links are opened in a new tab. If you wish them to be opened in the same tab, then use `external = false`.

```toml
# config.toml
...
[params]
  [[params.social]]
    # font awesome icon name
    icon = "twitter"
    url = "https://twitter.com/username"
    # external link management (optional)
    external = false
  [[params.social]]
    icon = "facebook"
    url = "https://www.facebook.com/username/"
  [[params.social]]
    icon = "instagram"
    url = "https://www.instagram.com/username/"
```

### Footer
Configure the footer content.

```toml
# config.toml
...
[params]
  [params.footer]
    # footer text
    text = ""
    # footer background color
    bg = ""
    # footer text color
    color = ""
```
## Shortcodes
## anchor
The anchor shortcode changes the color of the `<a>` tag returned by the markdown parser. It works along with the `higlight` color parameter, if available, in the front matter configuration of your posts.

```md
---
title: "Sample post"
highlight: "red"
---

{{< anchor url="http://example.com/" >}} Anchor text {{< /anchor >}}
```

## quote
Same as [anchor](#anchor)

```md
---
title: "Sample post"
highlight: "red"
---

{{< quote >}} Quote text {{< /quote >}}
```

## banner
Render a banner and can be used with the following parameters

:bookmark:: Accepts markdown syntax

+ h - height of the banner in percentage **(required)**
+ image - background image
+ bg - background color
+ color - text color
+ title - banner title :bookmark:
+ subtitle - banner subtitle :bookmark:

Also, a description (:bookmark:) can be given inside the body of the shortcode. For example, in order to achieving a banner like the following is possible with the code shown.

![](./static/images/banner.png)

```md
{{< banner
  h = "60"
  title = "Lorem ipsum"
  subtitle = "dolor sit amet"
  image = "https://images.unsplash.com/photo-1543536481-bf91777453de?ixlib=rb-0.3.5&s=0ffde0e2185104506c349126c687951c&auto=format&fit=crop&w=889&q=80"
  color = "white"
  bg = "aliceblue"
>}}
  consectetur adipiscing elit. Etiam vel tincidunt lacus. Aliquam ex erat, venenatis in vehicula nec, aliquam ut turpis. Nam lobortis gravida ipsum, quis convallis nisi tempus vel. Donec interdum orci velit, at convallis neque venenatis id.
{{< /banner >}}
```
