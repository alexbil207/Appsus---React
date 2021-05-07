import { utilService } from '../../../services/util-service.js';



const gMails = [
    {
        id: utilService.makeId(),
        subject: 'test1',
        from: 'alex207@gmail.com',
        to: 'moshe123@gmail.com',
        body: 'Pick up!',
        isSend: false,
        isRead: true,
        isFavorite: false,
        sentAt: Date.now(),
        replies: [{
            id: utilService.makeId(),
            from: 'moshe123@gmail.com',
            body: 'Reply!',
            sentAt: Date.now(),
        },
        ]
    },
    {
        id: utilService.makeId(),
        subject: 'test2',
        from: 'alex207@gmail.com',
        to: 'moshe123@gmail.com',
        body: 'Pick up!',
        isSend: false,
        isRead: false,
        isFavorite: true,
        sentAt: Date.now(),
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'test3',
        from: 'alex207@gmail.com',
        to: 'moshe123@gmail.com',
        body: 'Pick up!',
        isSend: false,
        isRead: false,
        isFavorite: false,
        sentAt: Date.now(),
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'test4',
        from: 'alex207@gmail.com',
        to: 'moshe123@gmail.com',
        body: 'Pick up!',
        isSend: false,
        isRead: false,
        isFavorite: false,
        sentAt: Date.now(),
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'test5',
        from: 'alex207@gmail.com',
        to: 'moshe123@gmail.com',
        body: 'Pick up!',
        isSend: false,
        isRead: false,
        isFavorite: true,
        sentAt: Date.now(),
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'test6',
        from: 'alex207@gmail.com',
        to: 'moshe123@gmail.com',
        body: 'Pick up!',
        isSend: false,
        isRead: false,
        isFavorite: false,
        sentAt: Date.now(),
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'test7',
        from: 'alex207@gmail.com',
        to: 'moshe123@gmail.com',
        body: 'Pick up!',
        isSend: false,
        isRead: true,
        isFavorite: false,
        sentAt: Date.now(),
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'test8',
        from: 'alex207@gmail.com',
        to: 'moshe123@gmail.com',
        body: 'Pick up!',
        isSend: false,
        isRead: false,
        isFavorite: false,
        sentAt: Date.now(),
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'test9',
        from: 'alex207@gmail.com',
        to: 'moshe123@gmail.com',
        body: 'Pick up!',
        isSend: false,
        isRead: true,
        isFavorite: false,
        sentAt: Date.now(),
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'test10',
        from: 'alex207@gmail.com',
        to: 'moshe123@gmail.com',
        body: 'Pick up!',
        isSend: false,
        isRead: false,
        isFavorite: false,
        sentAt: Date.now(),
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'test11',
        from: 'alex207@gmail.com',
        to: 'moshe123@gmail.com',
        body: 'Pick up!',
        isSend: false,
        isRead: false,
        isFavorite: false,
        sentAt: Date.now(),
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'loremlorem',
        from: 'alex207@gmail.com',
        to: 'moshe123@gmail.com',
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nostrum ex ipsa sequi dignissimos nulla ut placeat accusantium natus vitae nobis, consequuntur omnis iure, totam, perspiciatis voluptatibus neque eos exercitationem.
Eum fugiat cupiditate, eveniet, temporibus nulla a ipsa quasi, quibusdam optio blanditiis non inventore porro.Hic ut dolore natus, excepturi deserunt saepe asperiores minima sint consequatur obcaecati at sapiente aliquid?
Facilis nobis, esse, sit quia, animi minima iste excepturi fugit vitae ducimus non! Pariatur sint quia nostrum ex quod a cum, eaque distinctio minus nesciunt quo dolore dolor, modi commodi.
Odit, possimus eos quisquam corporis rerum, reprehenderit voluptas facilis tempora excepturi cumque nisi quia natus maiores magni nostrum blanditiis est libero.Aperiam, explicabo ipsum.Vel porro aliquam voluptate esse laboriosam!
Eaque veritatis, assumenda amet maxime iure quos illum ad voluptates necessitatibus totam ipsum, sint, numquam fugiat! Voluptatibus nemo, nulla ipsam illum in vel, alias beatae dolorum sint ratione similique pariatur!`,
        isSend: false,
        isRead: false,
        isFavorite: false,
        sentAt: Date.now(),
        replies: []
    },

];


export const mailDataService = {
    gMails,
}

