import React from 'react'
import { MDXEditor } from '../'
import kitchenSinkMarkdown from './assets/kitchen-sink.md?raw'
import { ALL_PLUGINS } from './_boilerplate'
import styles from './content-styling.lexical-theme.module.css'
import { EditorThemeClasses } from 'lexical/LexicalEditor'

const lexicalTheme: EditorThemeClasses = {
  heading: {
    h1: styles.h1,
    h2: styles.h2,
    h3: styles.h3,
    h4: styles.h4
  },

  text: {
    bold: styles.bold,
    italic: styles.italic,
    underline: styles.underline,
    code: styles.code,
    strikethrough: styles.strikethrough,
    underlineStrikethrough: styles.underlineStrikethrough
  },

  list: {
    listitem: styles.listitem,
    listitemChecked: styles.listItemChecked,
    listitemUnchecked: styles.listItemUnchecked,
    nested: {
      listitem: styles.nestedListItem
    }
  },

  admonition: {
    danger: styles.admonitionDanger,
    info: styles.admonitionInfo,
    note: styles.admonitionNote,
    tip: styles.admonitionTip,
    caution: styles.admonitionCaution
  }
}
export const LexicalCustomization = () => {
  return <MDXEditor lexicalTheme={lexicalTheme} markdown={kitchenSinkMarkdown} plugins={ALL_PLUGINS} />
}
