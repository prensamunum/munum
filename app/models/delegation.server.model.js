'use strict';

var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var delegationSchema = new schema({
    institutionType: {
        type: String,
        trim: true,
        required: 'El tipo de institución  es requerido'
    },
    institutionName: {
        type: String,
        trim: true,
        required: 'El nombre de la institución es requerido'
    },
    delegatesNum: {
        type: String,
        trim: true,
        required: 'El nombre de delegados es requerido'
    },
    sponsorName: {
        type: String,
        trim: true,
        required: 'El nombre del Sponsor es requerido'
    },
    sponsorCel: {
        type: String,
        trim: true,
        required: 'El celular del Sponsor es requerido'
    },
    sponsorEmail: {
        type: String,
        trim: true,
        required: 'El correo del Sponsor es requerido'
    },
    requires: {
        type: String,
        trim: true
    },
    code: {
        unique: true,
        type: String,
        trim: true,
        required: 'El código es requerido'
    },
    created: {
        type: Date,
        default: Date.now
    },
    birth:  {
        type: String,
        trim: true,
        required: 'La fecha de nacimiento es requerida'
    },
    idType:  {
        type: String,
        trim: true,
        required: 'El tipo de documento es requerido'
    },
    idNumber:  {
        type: String,
        trim: true,
        required: 'El número de documento es requerido'
    },
    cellphone:  {
        type: String,
        trim: true,
        required: 'El celular es requerido'
    },
    country:  {
        type: String,
        trim: true,
        required: 'El país es requerido'
    },
    city:  {
        type: String,
        trim: true,
        required: 'La ciudad es requerida'
    },
    vegetarian:  {
        type: String,
        trim: true
    },
    blood:  {
        type: String,
        trim: true,
        required: 'El tipo de sangre es requerido'
    },
    insurance:  {
        type: String,
        trim: true,
        required: 'La EPS o seguro de salud es requerido'
    },
    specialCondition:  {
        type: String,
        trim: true
    },
    contactName:  {
        type: String,
        trim: true,
        required: 'El contacto de emergencia es requerido'
    },
    contactPhone:  {
        type: String,
        trim: true,
        required: 'El celular de contacto de emergencia es requerido'
    },
}, {
    collection: 'delegationsMunum'
});

mongoose.model('delegations', delegationSchema);

