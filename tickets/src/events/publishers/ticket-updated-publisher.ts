import { Publisher, Subjects, TicketUpdatedEvent } from "@racoonrepublic/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}