# forRest — Emotion-Based Illustrated Diary

forRest is a service that analyzes emotional states through facial recognition and voice recording to create personalized illustrated diaries.  
It’s an AI-powered journal designed to help users reflect on their emotions and promote emotional wellness.

![forRest](./images/hero.png)



## Overview

**Period:** February 9 – 28, 2025  
**Role:** Frontend Developer, Project Manager  

I designed and built the entire frontend from scratch, covering architecture, state management, UI development, and deployment.  
As the sole frontend developer working under a tight timeline with multiple API integrations, my top priorities were minimizing errors and maintaining stability throughout the project.



## Tech Stack

- **Framework / Bundler:** Vite, React, TypeScript  
- **Styling:** TailwindCSS, DaisyUI  
- **Code Quality:** SWC, ESLint, Prettier  
- **State Management:** Redux  
- **Deployment:** Vercel  

**Other Libraries**  
- Icons: lucide-react, react-icons  
- Animations: Framer Motion  
- UI Components: react-datepicker, react-swipeable  



## Architecture

![Project Structure](./images/structure.png)



### Design Principles

**Feature-based structure**  
Each feature is organized in its own folder to improve modularity and scalability.

**Separation of concerns**  
Business logic, API calls, and UI components are clearly separated within each feature.

**Scalability**  
- `pages/` defines route-level pages  
- Shared utilities and components are stored under `shared/`

**Barrel exports**  
Each directory has an `index.ts` for cleaner and more consistent imports.

**Redux state management**  
Global states are managed with Redux, and each feature maintains its own slice under `features/[feature]/model`.



## Challenges & Solutions

### 1. 400 Error when sending face coordinates and voice file

**Problem**  
Although the API specification defined `faceBox` as an array, every request resulted in a 400 error with no clear message.

**Solution**  
After extensive testing with Postman, I discovered inconsistencies between the API specification and the server’s parameter parsing.  
Wrapping JSON data in a Blob and explicitly setting the MIME type resolved the parsing issue.

### 2. Premature UI rendering during delayed API responses

**Problem**  
The UI was rendered too early when the model’s response was delayed or uncertain because it only relied on a simple loading/success/failure state.

**Solution**  
I refined the logic into three separate states:  
1. Response received  
2. Confidence threshold met  
3. Ready to render  

This prevented unreliable data from being displayed and made the UI more stable.

Additional notes and learnings are documented here:  
[Emotion-Based Illustrated Diary (Notion)](https://www.notion.so/1955b55d898080dc899bfb7c534324a4?pvs=21)



## Key Features

- Kakao social login  
- Emotion-based “Juksuni” character  
- Real-time face recognition and emotion analysis via webcam  
- Voice-to-text transcription  
- AI-generated illustrated diary entries  
- Personal diary history management  



### Diary Creation Flow

![Diary Creation Flow](./images/flow.png)

### Diary Management

![Diary Management](./images/manage.png)

### Emotion Analysis

![Emotion Analysis](./images/analysis.png)

### Juksuni’s Emotion Variations

![Character Emotion Variations](./images/character.png)



## Contributions

### Frontend Development
- Designed and implemented a scalable, modular UI/UX architecture  
- Built reusable component-based interfaces  
- Managed complex global states (emotion data, user input, API responses) using Redux  

### Project Management
- Planned and defined the service concept focused on self-care and emotional recovery  
- Designed the overall user flow and feature structure  
- Collaborated with backend developers and designers, handled scheduling, API documentation, and final presentation  

