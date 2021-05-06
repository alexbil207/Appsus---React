'use strict'

import { storageService } from '../../../services/storage-service.js'
import { utilService } from '../../../services/util-service.js'

export const noteService = {
    query,
    removeNote,
    getNoteById,
    addNote,

}

const KEY = 'notes';

var gNotes = [
    {
        id: utilService.makeId(),
        type: "text",
        isPinned: true,
        text: "Welcome to the notes app",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "video",
        isPinned: false,
        url: 'https://www.youtube.com/embed/KRqIkTlGIOE',
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "video",
        isPinned: false,
        url: 'https://www.youtube.com/embed/ngL8GXN6AvE',
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "photo",
        url: 'https://www.rd.com/wp-content/uploads/2018/02/25_Hilarious-Photos-that-Will-Get-You-Through-the-Week_280228817_Doty911.jpg',
        isPinned: false,
        createdAt: Date.now()
    },


];

function query() {
    const notes = storageService.loadFromStorage(KEY)
    if (notes) {
        return Promise.resolve(notes)
    }
    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}

function removeNote(noteId) {
    const notes = storageService.loadFromStorage(KEY);
    var noteIdx = notes.findIndex(note => noteId === note.id);
    notes.splice(noteIdx, 1)
    storageService.saveToStorage(KEY, notes);
    return Promise.resolve()
}

function addNote(noteInfo) {
    const notes = storageService.loadFromStorage(KEY)
    const { type } = noteInfo;
    switch (type) {
        case 'text':
            notes.unshift(_createNoteTxt(noteInfo));
            break;
        case 'photo':
            notes.unshift(_createNoteImg(noteInfo));
            break;
        case 'video':
            notes.unshift(_createNoteVideo(noteInfo));
            break;
        case 'todo':
            notes.unshift(createNoteTodos(noteInfo));
            break;

    }
    storageService.saveToStorage(KEY, notes);
    return Promise.resolve();
}




function _createNoteImg(noteInfo) {
    const { input } = noteInfo
    return {
        id: utilService.makeId(),
        type: "photo",
        url: input,
        isPinned: false,
        createdAt: Date.now()
    }
}

function _createNoteTxt(noteInfo) {
    const { input } = noteInfo
    return {
        id: utilService.makeId(),
        type: "text",
        isPinned: false,
        text: input,
        createdAt: Date.now()
    }
}


function _createNoteVideo(noteInfo) {
    let { input } = noteInfo
    if (input.includes('watch?v=')) {
        input = input.replace('watch?v=', 'embed/');
    }
    if (input.includes('&')) {
        let idx = input.indexOf('&');
        input = input.slice(0, idx);
    }
    return {
        id: utilService.makeId(),
        type: "video",
        isPinned: false,
        url: input,
        createdAt: Date.now()
    }
}





function getNoteById(noteId) {
    const notes = storageService.loadFromStorage(KEY);
    return Promise.resolve(notes.find(note => note.id === noteId)
    );
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes);
}

