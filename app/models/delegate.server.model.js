'use strict';

var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var delegateSchema = new schema({
        name: {
            type: String,
            trim: true,
            required: 'El nombre del delegado es requerido'
        },
        lastName: {
            type: String,
            trim: true,
            required: 'El apellido del delegado es requerido'
        },
        email: {
            unique: true,
            type: String,
            trim: true,
            required: '',
            match: [/.+\@.+\..+/, 'Por favor llenar con un email valido']
        },
        idNumber: {
            unique: true,
            type: String,
            trim: true,
            required: 'El número de documento es requerido'
        },
        idType: {
            type: String,
            trim: true,
            required: 'El tipo de documento es requerido'
        },
        birth: {
            type: String,
            trim: true,
            required: 'La fecha de nacimiento es requerida'
        },
        cellphone: {
            type: String,
            trim: true,
            required: 'El celular es requerido'
        },
        country: {
            type: String,
            trim: true,
            required: 'El país es requerido'
        },
        city: {
            type: String,
            trim: true,
            required: 'La ciudad es requerida'
        },
        institution: {
            type: String,
            trim: true,
            required: 'La institución es requerido'
        },
        degree: {
            type: String,
            trim: true,
            required: 'La pregrado o curso es requerido'
        },
        blood: {
            type: String,
            trim: true,
            required: 'El tipo de sangre es requerido'
        },
        insurance: {
            type: String,
            trim: true,
            required: 'La EPS o seguro de salud es requerido'
        },
        specialCondition: {
            type: String,
            trim: true
        },
        contactName: {
            type: String,
            trim: true,
            required: 'El contacto de emergencia es requerido'
        },
        contactPhone: {
            type: String,
            trim: true,
            required: 'El celular de contacto de emergencia es requerido'
        },
        numberMun: {
            type: Number,
            trim: true,
            required: 'El número de modelos de Naciones Unidas es requerido'
        },
        committee2: {
            type: String,
            trim: true,
            required: 'Llenar el campo de comité de preferencia 2'
        },
        committee3: {
            type: String,
            trim: true,
            required: 'Llenar el campo de comité de preferencia 3'
        },
        committee1: {
            type: String,
            trim: true,
            required: 'Llenar el campo de comité de preferencia 1'
        },
        finalCommittee: {
            type: String,
            trim: true
        },
        vegetarian: {
            type: String,
            trim:
                true
        },
        meal: {
            type: [{
                type: Boolean
            }],
            default:
                false
        },
        kit: {
            type: Boolean,
            default:
                false
        },
        attendance: {
            type: [{
                type: Boolean
            }],
            default:
                false
        },
        role: {
            type: [{
                type: String,
                enum: {
                    values: ['delegate', 'presidente', 'stuff', 'sg'],
                    message: 'Los valores disponibles son delegate, presidente, stuff, sg'
                }
            }],
            default:
                'delegate'
        }
        ,
        code: {
            type: String,
            trim: true
        },
        plates: {
            type: String,
            trim: true
        },
        created: {
            type: Date,
            default:
            Date.now
        }
    },
    {
        collection: 'delegatesMunum'
    }
    )
;

mongoose.model('delegate', delegateSchema);

