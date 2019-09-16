# Backend (dir: backend)

The Backend (Server-Side) was developed using the Laravel Framework (PHP) and MySQL database. 
The database structure was slightly altered to allow for user select. There is in addition a favourite 
movies table that takes in the user id and the imdb id. RESTful APIs for viewing a user's favorite movies, 
adding movies to favourites, and removing movies from favourites are developed. All of these are 
called from the client side. 

# Frontend (dir: frontend)

The Frontend (Client-Side) is developed using Angular 2+ Framework. It is a simple one page solution 
that uses Bootstrap 4 CSS Framework. From the frontend, you can select a user, view the user's favourite movies, 
search for movies from the omdb databse, and add movies to that user's favourites. 
The frontend also calls the omdbapi to get a movies title and other info using the imdb id. 
The omdbapi is also used to search for movies based on their title.

# Limitations

This solution currently does not allow for user authentication and login. Also, it searches 
movies from the omdb API using only the title. Movie posters are also not available 
from omdbapi as this requires a subscription. Lastly, the user interface is very basic with minimal design. 

# Others

Screenshots of the working application can be found in the directory labelled images.
