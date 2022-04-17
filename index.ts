// U+FFF9 ANCHOR, U+FFFA SEPARATOR, U+FFFB TERMINATOR

const anchor = "\\ufff9";
const separator = "\\ufffa";
const terminator = "\\ufffb";

const nonControlCharRange = `[^${anchor}-${terminator}]+`;

const pattern = `${anchor}(?<rb>${nonControlCharRange})${separator}(?<rt>${nonControlCharRange})${terminator}`;

const re = new RegExp(pattern, "ugm");

/**
 * Converts Unicode Interlinear Annotation characters to HTML ruby tags.
 * @param s A string that may contain Unicode interlinear annotation characters.
 * @returns A copy of the input string with the Unicode interlinear annotation characters replaced with HTML ruby tags.
 */
export function interlinearAnnotatonToRuby(s: string): string { 
    const rubyReplacementString = "<ruby><rb>$<rb></rb><rp>(</rp><rt>$<rt></rt><rp>)</rp></ruby>";
    return s.replace(re, rubyReplacementString); 
}

/**
 * Converts Unicode Interlinear Annotation characters within an {@link Element} to HTML ruby tags.
 * @param element A string that may contain Unicode interlinear annotation characters.
 * @returns A copy of the input string with the Unicode interlinear annotation characters replaced with HTML ruby tags.
 */
export function replaceInterlinearAnnotationWithRubyTags(element: Element): Element {
    element.outerHTML = interlinearAnnotatonToRuby(element.outerHTML);
    return element;
}