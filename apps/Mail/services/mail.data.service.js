import { utilService } from '../../../services/util-service.js';



const gMails = [
    {
        id: utilService.makeId(),
        subject: 'Wassap?',
        from: 'alex207@gmail.com',
        to: 'moshe123@gmail.com',
        body: 'Pick up!',
        isReceived: true,
        isRead: false,
        isFavorite: false,
        sentAt: Date.now(),
        reply: {
            from: 'moshe123@gmail.com',
            body: 'Pick up!',
            sentAt: Date.now(),
        }
    },
    {
        id: utilService.makeId(),
        subject: 'asdasda?',
        from: 'alex207@gmail.com',
        to: 'moshe123@gmail.com',
        body: 'Pick up!',
        isReceived: true,
        isRead: false,
        isFavorite: false,
        sentAt: Date.now(),
        reply: {
            from: 'moshe123@gmail.com',
            body: 'Pick up!',
            sentAt: Date.now(),
        }
    },
];


export const mailDataService = {
    gMails,
}

