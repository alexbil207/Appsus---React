import { utilService } from '../../../services/util-service.js';



const gMails = [
    {
        id: utilService.makeId(),
        subject: 'Don’t forget your 30 days FREE Access to Udacity',
        from: 'support@udacity.com',
        to: 'alex207@gmail.com',
        body: 'Ti‍me is running out on this special offer. Act n‍ow to get 3‍0 da‍ys Free Access to the Udacity Nanodegree program of your choice. Choose from 60+ programs that can help you increase your earning potential and take your tech career to the next level.Our graduates’ success speaks for itself. In fact, 73% of our graduates reported a favorable career change in the first 1‍2 mon‍ths after completing their Nanodegree program. And they report an average raise of 24%! Our stellar ratings show just how valuable Udacity can be if you’re trying to land a successful tech job or upskill. See below and explore our ratings across the board. Then check out our catalog and see which of our 60+ programs you’d like 3‍0 da‍ys Free Access to. There is no obligation to continue so you have nothing to lose and everything to gain. Get started tod‍ay!',
        isSend: false,
        isRead: true,
        isFavorite: false,
        sentAt: 1620318859000,
        replies: [{
            id: utilService.makeId(),
            from: 'alex207@gmail.com',
            body: 'Stop sending me spam e-mails! I dont have the time for you!!',
            sentAt: 1620318860000,
        },
        ]
    },
    {
        id: utilService.makeId(),
        subject: '$10 tees?! Those end SOON.',
        from: 'newsletter@threadless.com',
        to: 'alex207@gmail.com',
        body: 'Sale prices as marked. $10 price only applies to Regular T-Shirts. Sale ends 5/7/21 at 9:59 AM CT. Excludes Cut and Sew T-Shirts, Artist Shops, Bucketfeet, and gift certificates.',
        isSend: false,
        isRead: false,
        isFavorite: true,
        sentAt: 1620315000000,
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

