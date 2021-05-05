'use strict';
import { storageService } from '../../../services/storage-service.js';
import { utilService } from '../../../services/util-service.js';
import { mailDataService } from './mail.data.service.js';

export const mailService = {
    createMails,
    query,
    removeMail,
    favoriteUpdate,

}

const KEY = 'mails';

function query() {
    const mails = storageService.loadFromStorage(KEY)
    if (mails) {
        return Promise.resolve(mails)
    }
    _saveBooksToStorage();
    return Promise.resolve(mailDataService.gMails)
}


function createMails() {
    mailDataService.gMails.push(_createMail());
    _saveBooksToStorage();
}

function _getMailById(mailId, isIdx = false) {
    const mails = storageService.loadFromStorage(KEY);
    if (isIdx) return Promise.resolve(mails.findIndex(mail => mail.id === mailId))
    return Promise.resolve(mails.find(mail => mail.id === mailId))
}

function removeMail(mailId) {
    const idx = _getMailById(mailId, true)
    const mails = storageService.loadFromStorage(KEY);
    mails.splice(idx, 1)
    storageService.saveToStorage(KEY, mails);
    return Promise.resolve();
}

function favoriteUpdate(mailId, isFavorite) {
    const mails = storageService.loadFromStorage(KEY);
    _getMailById(mailId, true).then(res => {
        mails[res].isFavorite = isFavorite;
        storageService.saveToStorage(KEY, mails)
    })
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
    storageService.saveToStorage(KEY, mailDataService.gMails);
}



// Show Time in readble format
//new Date().toLocaleString()