const getAllPosts=(req,resp)=>{
    resp.status(200).json({message:"route handeled by posts"})
}

module.exports={getAllPosts}