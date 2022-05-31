import { Subjects, Publisher, PaymentCreatedEvent } from "@racoonrepublic/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}