import nats, {Message, Stan} from 'node-nats-streaming'
import { randomBytes} from 'crypto'
import {TicketCreatedListener} from './events/ticket-created-listener'
console.clear();

const stan = nats.connect('ticketing',randomBytes(4).toString('hex'),{
    url: 'http://localhost:4222'
})

stan.on('connect', () => {
    console.log('Listener connected to NATS');

    stan.on('close',()=>{
        console.log('NATS connection closed!');
        process.exit();
    });

    // const options = stan.subscriptionOptions()
    // .setManualAckMode(true)
    // .setDeliverAllAvailable()
    // .setDurableName('accounting-service');
    // const subscription = stan.subscribe('ticket:created',
    // 'queue-group-name',
    // options);

    // subscription.on('message',(msg: Message)=>{
    //     const data = msg.getData();
    //     const data2 = msg.getRawData();
    //     const data3 = msg.getSubject();

    //     if (typeof data === 'string'){
    //         console.log(`there is the data ${data}, ${data2}, ${data3}`);
    //     }

    //     msg.ack();
    // })

    new TicketCreatedListener(stan).listen();
})

process.on('SIGINT',()=>stan.close());
process.on('SIGTERM', ()=> stan.close());


