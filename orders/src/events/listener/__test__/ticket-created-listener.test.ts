import { ticketCreatedListner } from "../ticket-created-listener"
import { natsWrapper } from "../../../nats-wrapper";
import { TicketCreatedEvent } from "@racoonrepublic/common";
import mongoose from "mongoose";
import { Message } from 'node-nats-streaming';
import { Ticket } from '../../../models/ticket';
 const setup = async ()=>{
    const listener = new ticketCreatedListner(natsWrapper.client);
    const data: TicketCreatedEvent['data'] = {
        version: 0,
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'concert',
        price: 10,
        userId: new mongoose.Types.ObjectId().toHexString(),
    };

    //@ts-ignore
    const msg: Message = {
        ack: jest.fn()
    };

    return {listener, data, msg};
};

it('create and save a ticket', async () =>{
    const { listener , data, msg } = await setup();

    await listener.onMessage(data,msg);

    const ticket = await Ticket.findById(data.id);

    expect(ticket).toBeDefined();
    expect(ticket!.title).toEqual(data.title);
    expect(ticket! .price).toEqual(data.price);

    
})

it('acks the message', async ()=>{
     const { data, listener, msg} = await setup();

     await listener.onMessage(data,msg);

     expect(msg.ack).toHaveBeenCalled();
})