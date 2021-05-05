'use strict'

import { storageService } from '../../../services/storage-service.js'
import { utilService } from '../../../services/util-service.js'

export const noteService = {
    query,
    removeNote,
    getNoteById,

}

const KEY = 'notes';

var gNotes = [
    {
        id: 1,
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        createdAt: Date.now()
    },
    {
        id: 4,
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "I like to move it"
        },
        createdAt: Date.now()
    },
    {
        id: 5,
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Another note bites the dust"
        },
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
    return Promise.resolve(gNotes)
}



function _updateNote() {

}


function removeNote(noteId) {
    var noteIdx = gNotes.findIndex(function (note) {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    _saveNotesToStorage();

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


function _createNoteTxt(note) {
    return {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
            txt: note,
        },
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
