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
        type: "NoteText",
        isPinned: false,
        txt: "Fullstack Me Baby!",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: true,
        txt: "I like to move it",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: false,
        txt: "Another note bites the dust",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: false,
        txt: "Another note bites the dust",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: false,
        txt: "Another note bites the dust",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: false,
        txt: "Another note bites the dust",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: false,
        txt: "Another note bites the dust",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: false,
        txt: "Another note bites the dust",
        createdAt: Date.now()
    },
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: false,
        txt: "Another note bites the dust",
        createdAt: Date.now()
    },
    // {
    //     id: 2,
    //     type: "NoteImg",
    //     info: {
    //         url: "http://some-img/me",
    //         title: "Me playing Mi"
    //     },
    //     style: {
    //         backgroundColor: "#00d"
    //     },
    //     createdAt: Date.now()
    // },
    // {
    //     id: 3,
    //     type: "NoteTodos",
    //     info: {
    //         label: "How was it:",
    //         todos: [
    //             { txt: "Do that", doneAt: null },
    //             { txt: "Do this", doneAt: 187111111 }
    //         ]
    //     },
    //     createdAt: Date.now()
    // }
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
    notes.push(_createNoteTxt(txt))
    storageService.saveToStorage(KEY, notes);
    return Promise.resolve()
}

function _createNotes() {
    var notes = storageService.loadFromStorage(KEY)
    if (!notes || notes.length) {
        notes = []
        for (let i = 0; i < 9; i++) {
            notes.push(_createNoteTxt)
        }
    }
    gNotes = notes;
    _saveNotesToStorage();
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

function _createNoteImg() {
    return {
        id: utilService.makeId(),
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
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