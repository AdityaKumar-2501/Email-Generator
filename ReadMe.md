# Email Reply Generator Web App

This project is a web application designed to generate email replies with various tones using generative AI, specifically the Gemini API. It consists of a Spring Boot backend and a React Vite frontend.

## Table of Contents

- [Email Reply Generator Web App](#email-reply-generator-web-app)
  - [Table of Contents](#table-of-contents)
  - [Project Description](#project-description)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
    - [Configuration](#configuration)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Project Description

The Email Reply Generator Web App simplifies the process of crafting email replies by leveraging the power of generative AI. Users can input the original email content and select a desired tone (e.g., professional, friendly, formal, etc.), and the application will generate a tailored reply using the Gemini API.

## Features

-   **AI-Powered Reply Generation:** Utilizes the Gemini API to generate contextually relevant email replies.
-   **Tone Selection:** Allows users to choose from various tones to match the desired communication style.
-   **User-Friendly Interface:** Built with React Vite for a smooth and responsive user experience.
-   **Scalable Backend:** Implemented with Spring Boot for robust and scalable API services.
-   **API Key Integration:** Securely integrates with the Gemini API using API keys.

## Technologies Used

-   **Backend:**
    -   Spring Boot
    -   Java
    -   Spring Web
    -   Gemini API (via Google Cloud Java client library)
-   **Frontend:**
    -   React
    -   Vite
    -   JavaScript/TypeScript (depending on implementation)
    -   Axios (for API requests)
    -   CSS/Tailwind CSS/Material UI (depending on implementation)
-   **Other:**
    -   Git (for version control)
    -   npm/yarn (for frontend package management)
    -   Maven/Gradle (for backend dependency management)

## Setup Instructions

### Prerequisites

-   Java Development Kit (JDK) 17 or higher
-   Node.js and npm/yarn
-   Git
-   Google Cloud Project with Gemini API enabled
-   Gemini API Key

### Backend Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/AdityaKumar-2501/Email-Generator.git
    cd email-writer
    ```

2.  **Install dependencies:**

    -   If using Maven:

        ```bash
        mvn clean install
        ```

    -   If using Gradle:

        ```bash
        gradle clean build
        ```

3.  **Configure API key (see Configuration section below).**

4.  **Run the Spring Boot application:**

    -   Using Maven:

        ```bash
        mvn spring-boot:run
        ```

    -   Using Gradle:

        ```bash
        gradle bootRun
        ```

### Frontend Setup

1.  **Navigate to the frontend directory:**

    ```bash
    cd ../Email-Writer-frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure API endpoint (see Configuration section below).**

4.  **Run the React application:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

### Configuration

1.  **Backend (Spring Boot):**

    -   Create an `application.properties` or `application.yml` file in `src/main/resources`.
    -   Add your Gemini API key:

        ```properties
        gemini.api.key=<your_gemini_api_key>
        ```
    -   If needed, configure the port the backend runs on:
        ```properties
        server.port=8080
        ```


## Usage

1.  Start both the backend and frontend applications.
2.  Open the frontend application in your browser (usually `http://localhost:5173`).
3.  Enter the email content you want to reply to.
4.  Select the desired tone from the dropdown menu.
5.  Click the "Generate Reply" button.
6.  The generated reply will be displayed in the output area.

## API Endpoints

-   **POST /api/generate-reply:** Generates an email reply based on the provided email content and tone.
    -   Request body:

        ```json
        {
          "emailContent": "...",
          "tone": "..."
        }
        ```

    -   Response body:

        ```json
        {
          "generatedReply": "..."
        }
        ```

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE) (or specify your license).

## Contact

For any questions or issues, please contact:

-   [Your Name/Organization]
-   [Your Email/Website]
