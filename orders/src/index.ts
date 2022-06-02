import mongoose from 'mongoose';
import {app} from './app'
import { natsWrapper } from './nats-wrapper';
import { ticketCreatedListner } from './events/listener/ticket-created-listener';
import { TicketUpdatedListener } from './events/listener/ticket-updated-listner';
import { ExpirationCompleteListener } from './events/listener/expiration-complete-listener';
import { PaymentCreatedListener } from './events/listener/payment-created-listener';
const start = async () =>{
  console.log("starting payment.");
  if(!process.env.JWT_KEY){
    throw new Error('JWT_KEY must be defined');
  }

  if(!process.env.MONGO_URI){
    throw new Error('MONGO_URI must be defined');
  }

  if(!process.env.NATS_CLIENT_ID){
    throw new Error('MONGO_URI must be defined');
  }

  if(!process.env.NATS_URL){
    throw new Error('MONGO_URI must be defined');
  }

  if(!process.env.NATS_CLUSTER_ID){
    throw new Error('MONGO_URI must be defined');
  }

  try{
       //first parameter will be the last parameter in the nats-depl.yaml
  await natsWrapper.connect(process.env.NATS_CLUSTER_ID,process.env.NATS_CLIENT_ID,process.env.NATS_URL)
  natsWrapper.client.on('close',()=>{
      console.log('NATS connection closed!');
      process.exit();
  })
  process.on('SIGINT',()=>natsWrapper.client.close());
  process.on('SIGTERM', ()=> natsWrapper.client.close());

  new ticketCreatedListner(natsWrapper.client).listen();
  new TicketUpdatedListener(natsWrapper.client).listen();
  new ExpirationCompleteListener(natsWrapper.client).listen();
  new PaymentCreatedListener(natsWrapper.client).listen();

  await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDb');
  }catch(err){
    console.error(err);
  }
  app.listen(3000,()=>{
    console.log('Listening on port 3000!!!!!!!!');
  }); 
}

start();

