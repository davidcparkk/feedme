# Feedme
[Live Demo](https://feedme-fsp.herokuapp.com/#/)

### Background and Overview

Inspired by the application [Feedly](https://feedly.com/i/welcome), Feedme is a personalized news and media aggregator clone that gives users easy access to their favorite news articles and sources all in one place. Create a feed for your specific interest (i.e., technology, important people, sports, etc.), customize it by adding all your relevant sources, and navigate through all of its articles with a friendly feed interface and a couple clicks of a button.


## Technologies and Challenges

### Technologies Used

Feedme is built with a Rails backend, React/Redux frontend, and a customized database using PostgreSQL. RESTful API routes used. Some notable libraries used are Jbuidler, BCrypt, and SecureRandom. Jbduilder is used to render JSON data from backend to frontend, whereas BCcrypt and SecureRandom are used to hash passwords and generate session tokens, respectively, for user user authentication.

### UI/UX 

Single page application that begins with the splash page and a navigation bar on top which navigates to a protected main browser page with a navigation sidebar on the left. Protected main browser page alternates between the articles index, sources index, and individual feed show pages. 

Creating a feed will add a feed container item to the feed index which is located within the navigation sidebar. In order to populate the feed show page with desired articles, user will need to add relevant sources. User will do that first by clicking 'Add Content' button at the bottom of the navigation sidebar, then select the desired source (to the source show page), and finally, click the green '+' sign next to the feed you would like to populate. Next time you want to see those articles from your favorite sources, navigate to your feed show page at any time.

### Challenges




### Bonus Features for the Future
