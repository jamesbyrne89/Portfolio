import React from "react";
import { Global, css } from "@emotion/core";

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "AvenirBlack";
        font-display: swap;
        src: url("fonts/AvenirLTStd-Black.WOFF") format("woff");
      }

      @font-face {
        font-family: "AvenirBook";
        font-display: swap;
        src: url("fonts/AvenirLTStd-Book.WOFF") format("woff");
      }

      @font-face {
        font-family: "Avenir-Next";
        font-display: swap;
        src: url("fonts/AvenirNextLTRegular.woff") format("woff"),
          url("fonts/AvenirNextLTRegular.woff2") format("woff2"),
          url("fonts/AvenirNextLTRegular.ttf") format("ttf"),
          url("fonts/AvenirNextLTRegular.svg") format("svg");
      }

      html {
        font-family: sans-serif;
      }
      body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      * {
        margin: 0;
        padding: 0;
      }
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      main,
      menu,
      nav,
      section,
      summary {
        display: block;
      }
      audio,
      canvas,
      progress,
      video {
        display: inline-block;
      }
      audio:not([controls]) {
        display: none;
        height: 0;
      }
      progress {
        vertical-align: baseline;
      }
      [hidden],
      template {
        display: none;
      }
      a {
        color: inherit;
        background-color: transparent;
        text-decoration: none;
        -webkit-text-decoration-skip: objects;
      }
      a:active,
      a:hover {
        outline-width: 0;
      }
      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
      }
      b,
      strong {
        font-weight: inherit;
        font-weight: bolder;
      }
      dfn {
        font-style: italic;
      }
      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      mark {
        background-color: #ff0;
        color: #000;
      }
      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }
      sub {
        bottom: -0.25em;
      }
      sup {
        top: -0.5em;
      }
      img {
        border-style: none;
      }
      svg:not(:root) {
        overflow: hidden;
      }
      code,
      kbd,
      pre,
      samp {
        font-family: monospace, monospace;
        font-size: 1em;
      }
      figure {
        margin: 1em 40px;
      }
      hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }
      button,
      input,
      optgroup,
      select,
      textarea {
        font: inherit;
        margin: 0;
      }
      optgroup {
        font-weight: 700;
      }
      button,
      input {
        overflow: visible;
      }
      button,
      select {
        text-transform: none;
      }
      [type="reset"],
      [type="submit"],
      button,
      html [type="button"] {
        -webkit-appearance: button;
      }
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner,
      button::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }
      [type="button"]:-moz-focusring,
      [type="reset"]:-moz-focusring,
      [type="submit"]:-moz-focusring,
      button:-moz-focusring {
        outline: 1px dotted ButtonText;
      }
      fieldset {
        border: 1px solid silver;
        margin: 0 2px;
        padding: 0.35em 0.625em 0.75em;
      }
      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }
      textarea {
        overflow: auto;
      }
      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }
      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        height: auto;
      }
      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }
      [type="search"]::-webkit-search-cancel-button,
      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      ::-webkit-input-placeholder {
        color: inherit;
        opacity: 0.54;
      }
      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }
      html {
        box-sizing: border-box;
      }
      * {
        box-sizing: inherit;
        &:before,
        &:after {
          box-sizing: inherit;
        }
      }
      body {
        font-weight: normal;
        word-wrap: break-word;
        font-kerning: normal;
        -moz-font-feature-settings: "kern", "liga", "clig", "calt";
        -ms-font-feature-settings: "kern", "liga", "clig", "calt";
        -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
        font-feature-settings: "kern", "liga", "clig", "calt";
      }
      img {
        max-width: 100%;
        margin-bottom: 1.45rem;
      }
      hgroup {
        margin-bottom: 1.45rem;
      }
      ul {
        list-style-position: inside;
        list-style-image: none;
        list-style-type: none;
      }
      ol {
        margin-left: 1.45rem;
        margin-bottom: 1.45rem;
        list-style-position: outside;
        list-style-image: none;
      }
      dl {
        margin-bottom: 1.45rem;
      }
      dd {
        margin-bottom: 1.45rem;
      }
      p {
        margin-bottom: 1.45rem;
      }
      figure {
        margin-bottom: 1.45rem;
      }
      pre {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        margin-bottom: 1.45rem;
        font-size: 0.85rem;
        line-height: 1.42;
        background: hsla(0, 0%, 0%, 0.04);
        border-radius: 3px;
        overflow: auto;
        word-wrap: normal;
        padding: 1.45rem;
      }
      table {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        font-size: 1rem;
        line-height: 1.45rem;
        border-collapse: collapse;
        width: 100%;
      }
      fieldset {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      blockquote {
        margin-left: 1.45rem;
        margin-right: 1.45rem;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      form {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      noscript {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      iframe {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      hr {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: calc(1.45rem - 1px);
        background: hsla(0, 0%, 0%, 0.2);
        border: none;
        height: 1px;
      }
      address {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      b {
        font-weight: bold;
      }
      strong {
        font-weight: bold;
      }
      dt {
        font-weight: bold;
      }
      th {
        font-weight: bold;
      }
      blockquote *:last-of-type {
        margin-bottom: 0;
      }
      li *:last-of-type {
        margin-bottom: 0;
      }
      p *:last-of-type {
        margin-bottom: 0;
      }
      code {
        font-size: 0.85rem;
        line-height: 1.45rem;
      }
      kbd {
        font-size: 0.85rem;
        line-height: 1.45rem;
      }
      samp {
        font-size: 0.85rem;
        line-height: 1.45rem;
      }
      abbr {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
      }
      acronym {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
      }
      abbr[title] {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
        text-decoration: none;
      }
      thead {
        text-align: left;
      }
      td,
      th {
        text-align: left;
        border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
        font-feature-settings: "tnum";
        -moz-font-feature-settings: "tnum";
        -ms-font-feature-settings: "tnum";
        -webkit-font-feature-settings: "tnum";
        padding-left: 0.96667rem;
        padding-right: 0.96667rem;
        padding-top: 0.725rem;
        padding-bottom: calc(0.725rem - 1px);
      }
      th:first-of-type,
      td:first-of-type {
        padding-left: 0;
      }
      th:last-of-type,
      td:last-of-type {
        padding-right: 0;
      }
      tt,
      code {
        background-color: hsla(0, 0%, 0%, 0.04);
        border-radius: 3px;
        font-family: "SFMono-Regular", Consolas, "Roboto Mono",
          "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace;
        padding: 0;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
      }
      pre code {
        background: none;
        line-height: 1.42;
      }
      code:before,
      code:after,
      tt:before,
      tt:after {
        letter-spacing: -0.2em;
        content: " ";
      }
      pre code:before,
      pre code:after,
      pre tt:before,
      pre tt:after {
        content: "";
      }
      @media only screen and (max-width: 480px) {
        html {
          font-size: 100%;
        }
      }
    `}
  />
);

export default GlobalStyles;
