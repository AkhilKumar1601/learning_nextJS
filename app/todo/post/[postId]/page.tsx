import axios from "axios"

export default async function ({params}:{params:{postId:string;}}) {
  const { postId } = await params;
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  return (
      <div>
           <h1>{response.data.title}</h1>
           <h2>{response.data.body}</h2>
      </div>
 )
}
