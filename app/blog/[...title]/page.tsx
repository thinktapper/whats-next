const getData = async (title) => {
  const post = await getDataFromCMS(title)
  return post
}

export default async function BlogPost({ params }) {
  const { title } = params
  // use this slug to fetch post data
  const post = await getData(title)

  return <div>{post.content}</div>
}
