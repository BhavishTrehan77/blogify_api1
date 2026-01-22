const express=require('express')
const postsRoutes=require('./routes/post.route.js')
const app=express()

app.get("/",(req,resp)=>{
    resp.status(200).send("welcome to blogify")
})

app.use("/api/v1/posts",postsRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});