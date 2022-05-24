import { Publisher, OrderCreatedEvent, Subjects} from '@racoonrepublic/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
