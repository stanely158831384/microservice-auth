import { Publisher, Subjects, TicketCreatedEvent } from "@racoonrepublic/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}