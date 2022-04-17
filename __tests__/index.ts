import { replaceInterlinearAnnotationWithRubyTags } from "../src/index"; 

const htmlMarkup = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unicode Iterlinear Annotation Demo</title>
</head>
<body>
    <p>&#xfff9;北&#xfffa;ほく&#xfffb;&#xfff9;斗&#xfffa;と&#xfffb;の&#xfff9;拳&#xfffa;けん&#xfffb;</p>
    
    <p><q>おまえもまさしく&#xfff9;強敵&#xfffa;とも&#xfffb;だった!!</q></p>
    <script type="module">
        import { replaceInterlinearAnnotationWithRubyTags } from "./index.js";

        replaceInterlinearAnnotationWithRubyTags(document.body);
    </script>
</body>
</html>`

test("unicode interlinear annotation to ruby test", () => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlMarkup, "text/html");
    replaceInterlinearAnnotationWithRubyTags(html.body);
    const rubies = Array.from(html.querySelectorAll("ruby"))
    expect(rubies.length).toEqual(4);
});