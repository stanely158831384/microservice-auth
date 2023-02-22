import { Publisher, OrderCancelledEvent, Subjects} from '@racoonrepublic/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}