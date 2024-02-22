### Tome-Cat Project - Backend

## Team Members
- Erick Valencia
- Taz Campbell
- Jason Kulak
- Christian Alexander
- Haley Zitzmann 

## App Description 
- Users can use the app to keep track of the books they've read/collected as well as books on their To Be Read lists using a highlight method (books that have been read will be highlighted in green and books that have not been read in brown)
- Users will be able to add, edit, and delete from the list

# Trello Board Link - https://trello.com/b/YpwXyCm7/project-3
# APIs (may not be complete list) - https://developers.google.com/books/docs/v1/getting_started?csw=1

## ERD
![Schema](https://i.imgur.com/ObybYXo.jpg)

# Dependencies - 
- express
- mongoDB
- mongoose
- dotenv
- cors
- morgan

# Route Map - 
| Route Name  | Endpoint | Method | Description                 |
| ----------- | -------- | ------ | --------------------------- |
| router.get |  /   | GET    | Renders all books on a page |
| router.get | /:id | GET | Renders an indivual book |
| router.post |  /   | POST    | Renders a created book on the Index Page |
| router.put | /:id   | PUT    | Updates data to a book on the books Index by id |
| router.delete | /:id   | DELETE   | Removes a book from the data array |

# ERD -  

