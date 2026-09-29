# ITZFIZZ — Scroll Experience

A creative scroll-based hero experience built as part of my frontend development assignment.

The main idea was to create a website that feels interactive from the first moment instead of having a normal static hero section. As the user scrolls, the visual, headline, progress indicator and different sections respond to the scroll position.

## Live Demo

Coming soon.

## GitHub Repository

This repository contains the complete source code for the project.

## What I Built

The main focus of this project is the hero section.

When the website opens, the content appears with a small introduction animation. After that, scrolling controls the main visual experience.

The page is divided into three stages:

- **01 — INTRO**
- **02 — MOTION**
- **03 — EXPERIENCE**

The central visual rotates, scales and changes position while the headline also transforms during the scroll.

I also added a scroll progress indicator so the user can see how far they have moved through the experience.

## Features

- Scroll-driven animations
- GSAP ScrollTrigger animations
- Smooth intro/stagger animations
- Interactive central visual
- Animated orbit elements
- Scroll progress percentage
- Section progress indicator
- Cursor-following atmosphere effect
- Responsive layout
- Mobile-friendly design
- Custom ITZFIZZ color palette
- Second section to continue the visual story

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS

### Animation

- GSAP
- GSAP ScrollTrigger

### Fonts

- Space Grotesk
- DM Mono

## How the Animation Works

The hero animation is controlled using GSAP and ScrollTrigger.

Instead of triggering separate animations after clicking buttons or links, the animation progress is connected directly to the user's scroll position.

The experience is divided into three phases:

```text
INTRO
  ↓
MOTION
  ↓
EXPERIENCE
