package src.targets









data class MutationCreateAnimalArgs(
    val species: String,
    val favoriteFood: String
) {
  constructor(args: Map<String, Any>) : this(
      args["species"] as String,
      args["favoriteFood"] as String
  )
}
data class MutationUpdateAnimalArgs(
    val id: Any,
    val species: String,
    val favoriteFood: String
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any,
      args["species"] as String,
      args["favoriteFood"] as String
  )
}
data class MutationDeleteAnimalArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}
data class MutationCreateBlogAuthorArgs(
    val name: String
) {
  constructor(args: Map<String, Any>) : this(
      args["name"] as String
  )
}
data class MutationUpdateBlogAuthorArgs(
    val id: Any,
    val name: String
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any,
      args["name"] as String
  )
}
data class MutationDeleteBlogAuthorArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}
data class MutationCreateBlogPostArgs(
    val title: String,
    val content: String,
    val blogAuthorId: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["title"] as String,
      args["content"] as String,
      args["blogAuthorId"] as Any
  )
}
data class MutationUpdateBlogPostArgs(
    val id: Any,
    val title: String,
    val content: String,
    val blogAuthorId: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any,
      args["title"] as String,
      args["content"] as String,
      args["blogAuthorId"] as Any
  )
}
data class MutationDeleteBlogPostArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}
data class MutationCreateBlogCommentArgs(
    val content: String,
    val blogAuthorId: Any,
    val blogPostId: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["content"] as String,
      args["blogAuthorId"] as Any,
      args["blogPostId"] as Any
  )
}
data class MutationUpdateBlogCommentArgs(
    val id: Any,
    val content: String,
    val blogAuthorId: Any,
    val blogPostId: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any,
      args["content"] as String,
      args["blogAuthorId"] as Any,
      args["blogPostId"] as Any
  )
}
data class MutationDeleteBlogCommentArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}

data class QueryAnimalArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}
data class QueryBlogAuthorArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}
data class QueryBlogPostArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}
data class QueryBlogCommentArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}