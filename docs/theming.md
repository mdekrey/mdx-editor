---
title: Theming
slug: theming
position: 0.999
---

# Theming

There are a few ways to update the theme for MDXEditor: changing colors, tweaking styles, or custom override styles.

For information for changing content styling, see [./content-styling.md].

## Changing colors

The editor UI (toolbar, dialogs, etc) colors and fonts are defined as CSS variables attached to the editor root element.
The color variables follow the [Radix semantic aliasing](https://www.radix-ui.com/colors/docs/overview/aliasing#semantic-aliases) convention.

The example below swaps the editor gray/blue colors with tomato/mauve. In addition, assigning the `dark-theme` class to the editor also flips it to dark mode (this is a feature of the Radix colors). 

```css
@import url('@radix-ui/colors/tomato-dark.css');
@import url('@radix-ui/colors/mauve-dark.css');

.dark-editor {
  --accentBase: var(--tomato-1);
  --accentBgSubtle: var(--tomato-2);
  --accentBg: var(--tomato-3);
  --accentBgHover: var(--tomato-4);
  --accentBgActive: var(--tomato-5);
  --accentLine: var(--tomato-6);
  --accentBorder: var(--tomato-7);
  --accentBorderHover: var(--tomato-8);
  --accentSolid: var(--tomato-9);
  --accentSolidHover: var(--tomato-10);
  --accentText: var(--tomato-11);
  --accentTextContrast: var(--tomato-12);

  --baseBase: var(--mauve-1);
  --baseBgSubtle: var(--mauve-2);
  --baseBg: var(--mauve-3);
  --baseBgHover: var(--mauve-4);
  --baseBgActive: var(--mauve-5);
  --baseLine: var(--mauve-6);
  --baseBorder: var(--mauve-7);
  --baseBorderHover: var(--mauve-8);
  --baseSolid: var(--mauve-9);
  --baseSolidHover: var(--mauve-10);
  --baseText: var(--mauve-11);
  --baseTextContrast: var(--mauve-12);

  --admonitionTipBg: var(--cyan4);
  --admonitionTipBorder: var(--cyan8);
  
  --admonitionInfoBg: var(--grass4);
  --admonitionInfoBorder: var(--grass8);

  --admonitionCautionBg: var(--amber4);
  --admonitionCautionBorder: var(--amber8);

  --admonitionDangerBg: var(--red4);
  --admonitionDangerBorder: var(--red8);

  --admonitionNoteBg: var(--mauve-4);
  --admonitionNoteBorder: var(--mauve-8);

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  color: var(--baseText);
  --basePageBg: black;
  background: var(--basePageBg);
}
```

```tsx
export function CustomTheming() {
  return (
    <MDXEditor 
      className="dark-theme dark-editor" 
      markdown={kitchenSinkMarkdown} 
      plugins={[
        toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
        listsPlugin(),
        quotePlugin(),
        headingsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin(),
        tablePlugin(),
        thematicBreakPlugin(),
        frontmatterPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
        sandpackPlugin({ sandpackConfig: virtuosoSampleSandpackConfig }),
        codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text', tsx: 'TypeScript' } }),
        directivesPlugin({ directiveDescriptors: [YoutubeDirectiveDescriptor, AdmonitionDirectiveDescriptor] }),
        diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
        markdownShortcutPlugin()
      ]} 
    />
  )
}
```

## Tweaking Styles

A few additional classes may be specified to the MDXEditor component. They include:

- `className` - merged in with the classes on the root element of the editor, this property is intended primarily for overriding CSS variables for re-coloring.
- `contentEditableClassName` - merged in with the classes for the editable region, this property may be used to tweak styles for elements in the content editable area, such as lists and blockquotes. See [./content-styling.md] for a

## Custom override styles

For an even more flexible editor experience, the root styles can be entirely replaced. This places MDXEditor into as near-as-possible headless state; your app will be responsible for styling every component, including the editors for official plugins.

[lexical-theming]: https://lexical.dev/docs/getting-started/theming
