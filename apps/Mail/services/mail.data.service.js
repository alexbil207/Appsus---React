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
        isFavorite: true,
        sentAt: 1620318859000,
        url: 'https://i.gifer.com/Xuw0.gif',
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
        url: null,
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'Congratulate Nimrod for 3 years at...',
        from: 'notifications-noreply@linkedin.com',
        to: 'moshe123@gmail.com',
        body: 'Congratulate Nimrod Nir for 3 years at Samsung Israel R&D Center - SIRC,Congratulate Nofar Zimelman Avital and 4 others for starting new positions',
        isSend: false,
        isRead: false,
        isFavorite: true,
        sentAt: 1620314000000,
        url: null,
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'Incredible glasses shouldnt hurt your wallet.',
        from: 'zennioptical@mail.zennioptical.com',
        to: 'alex207@gmail.com',
        body: 'Incredible glasses shouldnt hurt your wallet, only on zenni.com!',
        isSend: false,
        isRead: false,
        isFavorite: true,
        sentAt: 1620313000000,
        url: 'https://static.zennioptical.com/marketing/campaign/iris_apfel/iris_video_preview-lg.jpg',
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'Yu Kurosaki SENKO Firework-textured Nakiri & Slicer with Stylish Rosewood Handle',
        from: 'hocho-knife@hochoknife.com',
        to: 'alex207@gmail.com',
        body: 'Yu Kurosaki SENKO R2 Firework-textured Nakiri & Slicer with Stylish Rosewood Handle We are pleased to introduce Yu Kurosaki SENKO Nakiri (Vegetable Knife) & Sujihiki (Slicer) with Octagonal Brown-Ring Rosewood Handle.',
        isSend: false,
        isRead: false,
        isFavorite: true,
        sentAt: 1620312000000,
        url: 'https://store-attnwxa.mybigcommerce.com/product_images/uploaded_images/sakai-takayuki.jpeg',
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'GIFS ARE THE BEST YOOOOOOOO',
        from: 'alex207@gmail.com',
        to: 'mybestfriend@gmail.com',
        body: 'Heeeeeey man! check out this cool gif I found! I am collecting cool gifs so if you have any, please send them my way. Thanks! ',
        isSend: true,
        isRead: false,
        isFavorite: false,
        sentAt: 1620311000000,
        url: 'https://i.gifer.com/7VE.gif',
        replies: [{
            id: utilService.makeId(),
            from: 'alex207@gmail.com',
            body: 'Hey man, awesome GIF! I will send you any cool GIFS I find. Peace out, man.',
            sentAt: 1620312000000,
        },
        ]
    },
    {
        id: utilService.makeId(),
        subject: 'HEY MAAAAN HOW ARE YOU????',
        from: 'alex207@gmail.com',
        to: 'mybestfriend@gmail.com',
        body: 'Where have you been all my life? I needed those tickets so bad... call me.',
        isSend: true,
        isRead: false,
        isFavorite: false,
        sentAt: 1620310000000,
        url: null,
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'אלכסנדר, הוספנו תוכנית טלוויזיה שאולי תעניין אותך',
        from: 'info@mailer.netflix.com',
        to: 'alex207@gmail.com',
        body: 'כיתה קטלנית - לא שגרתי • אפל • נוער - סן פרנסיסקו, שנות ה-80. נער חסר בית מגויס לבית ספר פרטי שבו ילדים שגדלו במשפחות פשע לומדים כיצד להפוך למתנקשים חסרי רחמים',
        isSend: false,
        isRead: false,
        isFavorite: false,
        sentAt: 1620300000000,
        url: null,
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'Movie suggestions',
        from: 'alex207@gmail.com',
        to: 'netflix@netflix.com',
        body: 'Hey I really like your Spanish movies, It would be great if you could make some more! Thanks in advance, Alex the Netflix Addict.',
        isSend: true,
        isRead: true,
        isFavorite: false,
        sentAt: 1620200000000,
        url: null,
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'Whoa! 254 people already ordered...',
        from: 'services01@aliexpress.com',
        to: 'alex207@gmail.com',
        body: 'Hi Alex Gordon, come grab the items you liked! Were you looking for this?',
        isSend: false,
        isRead: false,
        isFavorite: false,
        sentAt: 1620190000000,
        url: null,
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: 'Tips to Speed Up Your Job Search',
        from: 'info@mail.glassdoor.com',
        to: 'alex207@gmail.com',
        body: 'Speed Up Your Job Search Position yourself for success with these five expert tips to help you speed up your job search. Gaps in Diversity & Inclusion How perception of workplace diversity & inclusion varies among employees of different racial and ethnic groups. Leaving a Safe Job Learn how to approach leaving a job you dont love during the pandemic. Glassdoor is committed to helping job seekers during COVID-19.',
        isSend: false,
        isRead: false,
        isFavorite: false,
        sentAt: 1620180000000,
        url: null,
        replies: []
    },
    {
        id: utilService.makeId(),
        subject: '[Early Buy Best Price] Save 50% OFF! Redmi Note 10 Pro $299! Daily Snap Up Now>>',
        from: 'newsletter@deals.banggood.com',
        to: 'alex207@gmail.com',
        body: `Upgrade Gaming Chair $109.99! LED Projector Clock $15.99! Handheld Thermal Imager $109.99! - 135°Max Reclining + Rocking
        - Elastic sponge Backrest
        - Stereotype Cotton Seat Cushion
        - Removable Headrest & Lumbar Pillows
    	
          1/2" 800NM Electric Cordless Brushless Impact Wrench
        - 1/2" Square Drive
        - No-load Speed: 0~6200 RPM
        - Reverse Rotation Auto Stop Mode
        `,
        isSend: false,
        isRead: false,
        isFavorite: false,
        sentAt: 1620170000000,
        url: null,
        replies: []
    },

];


export const mailDataService = {
    gMails,
}

