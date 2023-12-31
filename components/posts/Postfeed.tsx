import usePosts from "@/hooks/usePosts";
import PostItem from "./PostItem";

interface PostfeedProps{
    userId? : string;
}
const Postfeed:React.FC<PostfeedProps> = ({userId
}) =>{
    const {data:posts} = usePosts(userId as string);

    return(
        <>
        {posts?.posts?.map((post: Record<string,any>)=>{
            return(
            <PostItem data={post} userId={userId}/>
        )})}
     
        </>
    )
}
export default Postfeed;