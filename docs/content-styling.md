---
title: Content styling
slug: content-styling
position: 1
---

# Content styling

The MDXEditor component exposes a property called `contentEditableClassName` that you can use to style the content of the editor. This is useful if you want to use a different font family, or change the contents of the various blocks inside.

For best results, ensure that you style the editor using the same CSS classes that you use in your application. 

```css
.prose {
  font-family: "Inter", sans-serif;
}

.prose strong {
  font-weight: 600;
}
```

```tsx
<MDXEditor 
markdown="Hello **world**!" 
contentEditableClassName="prose"
/>
```

## Avoiding collisions with the editor UI

In addition to the content itself, the content editable editor area can include editor elements like the table editor dialog cells and buttons, the frontmatter editor, and the code block editor.
To avoid breaking the look of those, ensure that your selectors are conservative and don't target generic elements like `div`, for example.

## Customizing the Lexical class names

Lexical is used for creating the content; for more fine-grained control, see [Lexical's theming documentation][lexical-theming].

The exmple below demonstrates a set of styles that could work with Tailwind without the use of the typography plugin.

```tsx
const lexicalTheme = {
  text: {
    bold: 'bold',
    italic: 'italic',
    underline: 'underline',
    code: 'font-mono text-sm inline-block border border-gray-600 bg-gray-800 p-px',
    strikethrough: 'line-through',
    subscript: '-b-px align-sub',
    superscript: 't-px align-super'
  },

  list: {
    listitem: '',
    listitemChecked: '',
    listitemUnchecked: '',
    nested: {
      listitem: ''
    }
  }
}

export function CustomTheming() {
  return (
    <MDXEditor
      lexicalTheme={lexicalTheme}
      markdown="Hello **world**!"
    />
  )
}
```
