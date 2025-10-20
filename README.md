# forRest, Emotion-Based Illustrated Diary

forRest is a service that analyzes emotional states through facial recognition and voice recording to create personalized illustrated diaries.  
It’s an AI-powered journal designed to help users reflect on their emotions and promote emotional wellness.

<div align="center">
  <img width="563" height="543" alt="Image" src="https://github.com/user-attachments/assets/5d2e15b8-e817-466b-aad5-d33c54f4e260" />
</div>



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
- Figma : [Link](https://www.figma.com/design/pQj9iQaxzfDRhJzi4PQJCB/Untitled?node-id=0-1&t=iPdVHsCdsR4vQglu-1)


## Architecture
```
SPARK-CLIENT
│
├── src/
│ ├── app/
│ │ ├── config/
│ │ │ ├── redux/ # Redux state management configuration
│ │ │ ├── providers/ # Global context and state management
│ │ │ └── routes/ # Routing setup
│ │ ├── styles/ # Global style configuration
│ │ ├── App.tsx
│ │ └── index.tsx
│ │
│ ├── entities/ # Domain entities
│ ├── features/ # Main feature modules
│ │ ├── auth/ # Authentication features
│ │ ├── diary-entry/ # Diary writing feature
│ │ ├── diary-history/ # Diary history viewing
│ │ └── diary-result/ # Analyzed diary results
│ │
│ ├── pages/ # Page components
│ │ ├── face-capture/ # Face capture feature
│ │ ├── face-result/ # Face analysis result page
│ │ ├── first/ # First-time setup screen
│ │ ├── home/ # Home page
│ │ └── photo-guide/ # Photo capture guide
│ │
│ ├── shared/ # Shared modules and utilities
│ │ ├── api/ # API request modules
│ │ ├── assets/ # Static assets
│ │ ├── fonts/
│ │ ├── images/
│ │ ├── lib/ # Utility functions
│ │ ├── types/ # TypeScript type definitions
│ │ └── ui/ # Shared UI components
│ │
│ ├── index.css
│ └── main.tsx
```



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

<img width="899" height="512" alt="Image" src="https://github.com/user-attachments/assets/0a85e2e4-2d0a-4dd2-9255-5a93b1df5547" />

### Diary Management

<img width="880" height="494" alt="Image" src="https://github.com/user-attachments/assets/1c608c1e-21d6-492b-b8ed-28a8fab8d492" />

### Emotion Analysis

<img width="883" height="505" alt="Image" src="https://github.com/user-attachments/assets/83910cf0-7bc5-4bfd-bf52-29af72e2869e" />

### Juksuni’s Emotion Variations

<img width="865" height="499" alt="Image" src="https://github.com/user-attachments/assets/b51aec8d-dcbd-4c3c-9020-42844673039d" />



## Contributions

### Frontend Development
- Designed and implemented a scalable, modular UI/UX architecture  
- Built reusable component-based interfaces  
- Managed complex global states (emotion data, user input, API responses) using Redux  

### Project Management
- Planned and defined the service concept focused on self-care and emotional recovery  
- Designed the overall user flow and feature structure  
- Collaborated with backend developers and designers, handled scheduling, API documentation, and final presentation  

