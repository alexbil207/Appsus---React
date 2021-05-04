'use strict';
import { storageService } from '../../../services/storage-service.js';
import { utilService } from '../../../services/util-service.js';
import { gMails } from './mail.data.service.js';

export const mailService = {
    createMails,
    query,
    removeMail,

}
const KEY = 'mails';
function query() {
    const mails = storageService.loadFromStorage(KEY) ? storageService.loadFromStorage(KEY) : gMails;
    return Promise.resolve(mails)

}


function createMails() {
    gMails.push(_createMail());
    _saveBooksToStorage();
}

function _getMailById(mailId, isIdx = false) {
    const mails = storageService.loadFromStorage(KEY);
    if (isIdx) return Promise.resolve(mails.findIdx(mail => mail.id === mailId))
    return Promise.resolve(mails.find(mail => mail.id === mailId))
}

function removeMail(mailId) {
    const Idx = _getMailById(mailId, true)
    gMails.slice(1, idx);
    _saveBooksToStorage();
}

function _createMail() {
    return {
        id: utilService.makeId(),
        subject: '',
        from: '',
        to: '',
        body: '',
        isRead: false,
        isFavorite: false,
        isReceived: false,
        sentAt: Date.now(),
        reply: {
            from: '',
            body: '',
            sentAt: '',
        }
    }
}

function _saveBooksToStorage() {
    storageService.saveToStorage(KEY, gMails);
}



// Show Time in readble format
//new Date().toLocaleString()