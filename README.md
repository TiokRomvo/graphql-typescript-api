I - Install and run the source
1. Install dependencies: `npm i`
2. Create a Postgres database and set your credentials on a `.env` file, similar to `.env.example` (you can start a Postgres db with Docker by running `npm run get:pg` followed by `npm run start:pg`)
3. Copy the .env.example and rename it to .env then set up the connection data
3. Run the application: `npm start`
4. On another terminal run `npm run gen`
5. Navigate to `http://localhost:8080/api`

II - Example Use Case
1. Create an author
mutation {
  createBlogAuthor
  (name:"Paul Hung"){
  id, name
  }
}
2. Create a blog post
mutation {
  createBlogPost
  (title:"Paul Hung Is The Best Software Engineer", 
  content:"He is the best, I dont understand what you are talking about",
  <!-- blogAuthorId: user input -->
  )
  {
  title, content, blogAuthorId
  }
}
3. Get all posts and authors of the posts
query{
  blogPosts{
    id
    title
    blogAuthor { id, name }
  }
}
4. Get all authors and posts of the authors
query{
  blogAuthors{
    id
    name
    blogPosts {
      id
      title
    }
  }
}
5. Get an targeted author
query{
  blogAuthor(
    <!-- id: user input -->
    ){
    id
    name
    blogPosts {
      id
      title
    }
  }
}
6. Update an targeted post
mutation {
  updateBlogPost
  (
     <!-- id: user input -->
    ,
    title:"Paul Hung Is The Better", 
  content:"He is the best, the good, and the better",
  <!-- blogAuthorId: user input -->
  )
}
