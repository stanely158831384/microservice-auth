import {
    Subjects,
    Publisher,
    ExpirationCompleteEvent,
} from '@racoonrepublic/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}