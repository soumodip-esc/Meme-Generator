# Meme Generator

A meme generator built with React. Pulls random meme templates from a live API and lets you overlay your own top and bottom text, just like a classic meme format. Built as a learning project to practice fetching data from an API, controlled forms, and dynamic state updates.

## Tech Stack

- **React** (via Vite)
- **Plain CSS**
- **Imgflip API** — source of meme template images
- **Google Fonts** — Karla (body text), Impact (meme text)

## Features

- **Header** — app branding with a troll face icon and title
- **Main**:
  - Fetches a list of meme templates from the Imgflip API when the app loads
  - "Get a new meme image" button picks a random template from that list
  - Two text inputs (top text, bottom text) that update the meme in real time as you type
  - Text is rendered directly over the image with a bold, outlined "meme font" style (white text, black outline), matching the classic meme look

## Project Structure

```
src/
├── App.jsx
├── index.css
├── Index.jsx
├── index.html
├── assets/
│   └── troll-face.png
└── components/
    ├── Header.jsx
    └── Main.jsx
```

## What This Project Practices

- **Fetching data from an external API** — using `fetch` inside `useEffect` to load meme templates once when the component mounts
- **Controlled form inputs** — the top and bottom text inputs are tied to state (`meme.topText`, `meme.bottomText`) via `value` and `onChange`
- **Updating one field in an object state** — using the spread operator and computed property names (`[name]: value`) to update just the field that changed, without overwriting the rest of the `meme` object
- **Random selection from fetched data** — using `Math.random()` to pick a random meme template from the array returned by the API
- **Positioning text over an image with CSS** — using `position: relative` on the container and `position: absolute` on the text spans to place text on top of the image, with `text-shadow` used to fake a stroke/outline effect

## Status

Actively being built as part of a structured React learning path — more features and refinements to come.