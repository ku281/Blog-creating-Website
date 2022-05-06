import mongoose from 'mongoose';
const Connection=async ()=>{

    try{ 
        //const URL ='mongodb://kuncha:965038@blogweb-shard-00-00.l8exf.mongodb.net:27017,blogweb-shard-00-01.l8exf.mongodb.net:27017,blogweb-shard-00-02.l8exf.mongodb.net:27017/BlogWeb?ssl=true&replicaSet=atlas-1f1snt-shard-0&authSource=admin&retryWrites=true&w=majority'
        const URL='mongodb://kuncha:965038@blogweb-shard-00-00.l8exf.mongodb.net:27017,blogweb-shard-00-01.l8exf.mongodb.net:27017,blogweb-shard-00-02.l8exf.mongodb.net:27017/BlogWeb?ssl=true&replicaSet=atlas-1f1snt-shard-0&authSource=admin&retryWrites=true&w=majority'
        await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true});
     console.log("database coonect successfullygnbbnbhnhhbhbhbbhhbhbhhbb");
}catch(error)
{
    console.log("error while connecting",error)}
}
/*const Connection = async () => {
    const URL = 'mongodb://kuncha:965038@blogweb-shard-00-00.l8exf.mongodb.net:27017,blogweb-shard-00-01.l8exf.mongodb.net:27017,blogweb-shard-00-02.l8exf.mongodb.net:27017/PROJECT 0?ssl=true&replicaSet=atlas-1f1snt-shard-0&authSource=admin&retryWrites=true&w=majority'
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};*/


export default Connection;