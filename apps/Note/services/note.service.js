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
        txt: "I like to move it",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "text",
        isPinned: false,
        txt: "Another note bites the dust",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "text",
        isPinned: false,
        txt: "Another note bites the dust",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "text",
        isPinned: false,
        txt: "Another note bites the dust",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "text",
        isPinned: false,
        txt: "Another note bites the dust",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "text",
        isPinned: false,
        txt: "Another note bites the dust",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "text",
        isPinned: false,
        txt: "Another note bites the dust",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "text",
        isPinned: false,
        txt: "Another note bites the dust",
        createdAt: Date.now()
    }
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
    var noteIdx = gNotes.findIndex(note => noteId === note.id);
    const notes = storageService.loadFromStorage(KEY);
    notes.splice(noteIdx, 1)
    storageService.saveToStorage(KEY, notes);
    return Promise.resolve()
}

function addNote(txt) {
    if (!txt) return;
    const notes = storageService.loadFromStorage(KEY);
    notes.unshift(_createNoteTxt(txt))
    storageService.saveToStorage(KEY, notes);
    return Promise.resolve()
}

function addNoteImg(url) {
    if (!url) return;
    const notes = storageService.loadFromStorage(KEY);
    notes.unshift(_createNoteImg(url))
    storageService.saveToStorage(KEY, notes);
    return Promise.resolve()
}



function _createNoteImg(url) {
    return {
        id: utilService.makeId(),
        type: "NoteImg",
        url: url,
        style: {
            backgroundColor: "#00d"
        },
        createdAt: Date.now()
    }
}

function _createNoteTxt(txt) {
    return {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: false,
        txt: txt,
        style: {
            backgroundColor: "#00d"
        },
        createdAt: Date.now()
    }
}


function _createNoteVid() {

}

function _createNoteTodo() {
    return {
        id: utilService.makeId(),
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        },
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

function _loadFromStorage(KEY) {
    console.log('loading');
    storageService.loadFromStorage(KEY)
}