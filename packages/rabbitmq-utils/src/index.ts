import { connect, Replies} from "amqplib"
export async function connectToServer()  {
    try {
        const connection = await connect("amqp://localhost:5672");
        return  await connection.createChannel();
    } catch (err) {
        console.log(err)
    }
}
export async function createQueue(queueName:string){
    try{
        let channel = await connectToServer();
        const queueDetail = await channel.assertQueue(queueName)
        return {channel , queueDetail}
    }catch (err){
        console.log(err)
    }
}
export async function pushToQueue(queueName, data):Promise<boolean>  {
    try {
        const channel = await connectToServer()
        await channel.assertQueue(queueName);
        return channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)), {persistent: true})
    } catch (error) {
        console.log(error.message);
    }
}
export async function consumeQueue(queueName, data):Promise<Replies.Consume>  {
    try {
        const channel = await connectToServer()
        await channel.assertQueue(queueName);
        return channel.consume(queueName , msg => {
            return msg
        })
    } catch (error) {
        console.log(error.message);
    }
}