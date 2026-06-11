export const roamioReadmeText = `Roamio
Where Adventure Meets Simplicity!


DEVELOPERS

Eric Warren
LinkedIn: https://www.linkedin.com/in/eric-warren-b-s-9074b661/
GitLab: https://gitlab.com/eswarren18

David Iukuridze
LinkedIn: https://www.linkedin.com/in/david-iukuridze/
GitLab: https://gitlab.com/davidiukuridze
Email: david.iukuridze@gmail.com

Gregory Reinis
LinkedIn: https://www.linkedin.com/in/gregoryreinis/
GitLab: https://gitlab.com/GReinis
Email: Reinis.Gregory@gmail.com


PROJECT DESCRIPTION

Roamio is a travel planning application designed to help users organize trips,
explore destinations, and manage itineraries in one place.

The application gives users a simple interface for planning travel details such
as destinations, activities, flights, lodging, and events. Roamio was built to
feel lightweight, intuitive, and useful for both casual travelers and more
experienced trip planners.


KEY FEATURES

• Trip Planning:
  Create and customize detailed trip itineraries, including destinations,
  activities, flights, lodgings, and events.

• Destination Explorer:
  Explore trip locations and destination details through an integrated Google
  Maps experience.

• User Authentication:
  Secure signup and login functionality for protecting user data and
  personalizing the user experience.

• Responsive Design:
  Built to provide a consistent experience across desktop and mobile devices.

• Interactive Map:
  Uses Google Maps APIs to display trip locations and points of interest.


TECHNICAL OVERVIEW

Frontend:
React.js with Vite for fast development, bundling, and optimized performance.
The interface is styled with Tailwind CSS.

Backend:
FastAPI powers the RESTful API endpoints used by the frontend to manage users,
trips, events, flights, and lodgings.

Database:
PostgreSQL is used for reliable relational data storage.

Containerization:
The application is containerized with Docker, allowing consistent development
and deployment environments.


TECH STACK

FastAPI
Vite
Docker
React.js
PostgreSQL
JavaScript
Tailwind CSS
Python
HTML5
CSS


GETTING STARTED

1. Clone the repository:

   git clone https://gitlab.com/man-down/roamio.git

2. Navigate into the project directory:

   cd roamio

3. Obtain a Google API key from Google Cloud Console.

4. Enable the following Google APIs:

   Maps JavaScript API
   Geocoding API
   Places API

5. Create a .env file in the root directory and add:

   GOOGLE_API_KEY="Insert Your Key Here"

6. Make sure Docker Desktop is installed and running.

7. Create the Docker volume:

   docker volume create beta-data

8. Build the Docker containers:

   docker-compose build

9. Start the application:

   docker-compose up

10. Open the application in the browser:

   http://localhost:5173/

11. FastAPI documentation is available at:

   http://localhost:8000/docs


API OVERVIEW

Roamio includes API endpoints for:

• Authentication
  Signup and signin functionality.

• Trips
  Create, read, update, and delete trips.

• Flights
  Add and manage flights connected to trips.

• Events
  Add and manage scheduled events for trips.

• Lodgings
  Add and manage lodging details for trips.


DEVELOPMENT ROADMAP

Planned features include:

• Expanded user account functionality with custom profile pictures.
• Expanded map functionality, including directions, air quality, weather,
  and user location detection.
• Social functionality, including messaging, shared trips, and comments.
• Secure login with OAuth.
• User reviews and ratings for events and locations.
• AI-powered travel assistant to help users plan vacations.


GITLAB

https://gitlab.com/man-down/roamio`;
