# Unicode Interlinear Annotation tests

<!-- markdownlint-disable-file MD024 -->
## What is Interlinear Annotation

It is a not-widely supported part of Unicode for displaying things like [furigana].

From [Wikipedia Unicode Control Characters > Interlinear annotation]

> Three formatting characters provide support for [interlinear annotation] (U+FFF9 ANCHOR, U+FFFA SEPARATOR, U+FFFB TERMINATOR). This may be used for providing notes that would typically be displayed between the lines of other text. Unicode considers such annotation to be rich text and recommends using other protocols for such annotation. The W3C Ruby markup recommendation is an example of an alternate protocol supporting more advanced interlinear annotation.

## Using Ruby HTML tags

The [`<ruby>` tag][ruby] should be supported by modern web browsers.

[ruby]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby

<!-- markdownlint-disable MD033 -->
<ruby>北<rp>(</rp><rt>ほく</rt><rp>)</rp></ruby>
<ruby>斗<rp>(</rp><rt>と</rt><rp>)</rp></ruby>
の
<ruby>拳<rp>(</rp><rt>けん</rt><rp>)</rp></ruby>
<!-- markdownlint-enable MD033 -->
### Source

```html
<ruby>北<rp>(</rp><rt>ほく</rt><rp>)</rp></ruby>
<ruby>斗<rp>(</rp><rt>と</rt><rp>)</rp></ruby>
の
<ruby>拳<rp>(</rp><rt>けん</rt><rp>)</rp></ruby>
```

## Using entities

This ususally will not work and will display incorrectly.

&#xfff9;北&#xfffa;ほく&#xfffb;斗の拳

### Source

```html
&#xfff9;北&#xfffa;ほく&#xfffb;斗の拳
```

[Wikipedia Unicode Control Characters > Interlinear annotation]:https://en.wikipedia.org/wiki/Unicode_control_characters#Interlinear_annotation

[furigana]:https://en.wikipedia.org/wiki/Furigana
[interlinear annotation]:https://en.wikipedia.org/wiki/Ruby_text
