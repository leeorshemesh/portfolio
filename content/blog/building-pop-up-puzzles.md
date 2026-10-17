---
title: "Building Pop Up Puzzles"
description: "How I shipped a nine-game puzzle site with dailies, trophies, and a shop — all as a static frontend."
date: "2026-10-10"
---

Pop Up Puzzles is a static site with nine playable games, daily challenges, trophies, a shop, and a customizable profile. Progress lives in the browser via `localStorage`, so there is no backend to maintain.

## What I built

The home screen uses flip cards for each puzzle. Opening a card shows today’s daily (when available) and a new-game option. From there you can jump into Sudoku, Wordle, Minesweeper, 2048, Hangman, Lights Out, Solitaire, Sliding Puzzle, or Memory Match.

Supporting screens include:

- **Profile** — avatar, trophy count, and per-game stats
- **Shop** — spend trophies on themes, backgrounds, outfits, and card backs
- **Inventory** — equip owned cosmetics

## Technical approach

Everything is plain HTML, CSS, and JavaScript modules. A shared puzzle registry keeps game metadata in one place; each game owns its own module. Daily trophies are awarded once per date and award key so “Reveal Solution” or free practice runs do not inflate progress.

## Try it

- Live site: [leeorshemesh.github.io/pop-up-puzzles](https://leeorshemesh.github.io/pop-up-puzzles/)
- Source: [github.com/leeorshemesh/pop-up-puzzles](https://github.com/leeorshemesh/pop-up-puzzles)
