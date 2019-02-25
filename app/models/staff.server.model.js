'use strict';

var mongoose = require('mongoose'),
    crypto = require('crypto'),
    schema = mongoose.Schema;

var StaffSchema = new schema({
    name: {
        type: String,
        trim: true,
        required: 'El nombre es requerido'
    },
    lastName: {
        type: String,
        trim: true,
        required: 'El apellido es requerido'
    },
    email: {
        unique: true,
        type: String,
        trim: true,
        required: '',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, 'Por favor llenar con un email valido']
    },
    idNumber: {
        unique: true,
        type: String,
        trim: true,
        required: 'El número del documento es requerido'
    },
    idType: {
        type: String,
        trim: true,
        required: 'El tipo de documento es requerido'
    },
    cellphone: {
        type: String,
        trim: true,
        required: 'El teléfono es requerido'
    },
    country: {
        type: String,
        trim: true,
        required: 'El país es requerido'
    },
    city: {
        type: String,
        trim: true,
        required: 'La ciudad de residencia es requerida'
    },
    institution: {
        type: String,
        trim: true,
        required: 'La institución es requerida'
    },
    degree: {
        type: String,
        trim: true,
        required: 'La carrera es requerida'
    },
    vegetarian: {
        type: String,
        trim: true
    },
    blood: {
        type: String,
        trim: true,
        required: 'El tipo de sangre es requerido '
    },
    insurance: {
        type: String,
        trim: true,
        required: 'El nombre del seguro/eps es requerido '
    },
    specialCondition: {
        type: String,
        trim: true
    },
    contactName: {
        type: String,
        trim: true,
        required: 'El conctacto de emergencia es requerida'
    },
    contactPhone: {
        type: String,
        trim: true,
        required: 'El número de conctacto de emergencia es requerida'
    },
    numberMun: {
        type: String,
        trim: true,
        required: 'El número de modelos de Naciones Unidas es requerido'
    },
    role: {
        type: String,
        enum: {
            values: ['NONE', 'PRESI', 'STAFF', 'SG'],
            message: 'Los valores disponibles son  NONE, PRESI, STAFF, SG'
        },
        default: 'NONE'
    },
    password: {
        type: String,
        required: "La contraseña es requerida",
        minlength: [6, 'La contraseña debe de ser minimo de 6 caracteres'],
        validate: {
            validator: function (passwordTemp) {
                return this.passwordConfirmation == passwordTemp;
            },
            message: "las contraseñas no son iguales"
        }
    },
    salt: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'staffMunum'
});

StaffSchema.virtual("passwordConfirmation")
    .get(function () {
        return this.c_C;
    })
    .set(function (password) {
        this.c_C = password;
    });

// StaffSchema.pre('save', function (next) {
//     if (this.password) {
//         this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
//         this.password = this.hashPassword(this.password);
//     }
//     next();
// });
//
//
// StaffSchema.methods.hashPassword = function (password3) {
//     if (this.salt && password3) {
//         //puse un parametro mas que dice sha1
//         return crypto.pbkdf2Sync(password3, this.salt, 10000, 64, 'sha1').toString('base64');
//     } else {
//         return password3;
//     }
// };
//
//
// StaffSchema.methods.authenticate = function (password2) {
//     return this.password === this.hashPassword(password2);
// };
//
// // StaffSchema.methods.hashPassword = function (password) {
// //     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// // }
// // //Crear un metodo instancia para autentificar usuario
// // StaffSchema.methods.authenticate = function (password) {
// //     return this.password === this.hashPassword(password);
// // }
// // StaffSchema.methods.passwordValidator = function (password) {
// //     return bcrypt.compareSync(password, this.password);
// // }


StaffSchema.pre('save', function(next) {
    if (this.password && this.password.length > 6) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }

    next();
});

/**
 * Create instance method for hashing a password
 */
StaffSchema.methods.hashPassword = function(password) {
    if (this.salt && password) {
       // return crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('base64');
        return crypto.pbkdf2Sync ( password, this.salt, 1000, 64, 'sha1').toString('hex');
        //return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
    } else {
        return password;
    }
};

/**
 * Create instance method for authenticating user
 */
StaffSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

/**
 * Find possible not used username
 */
StaffSchema.statics.findUniqueUsername = function(username, suffix, callback) {
    var _this = this;
    var possibleUsername = username + (suffix || '');

    _this.findOne({
        username: possibleUsername
    }, function(err, user) {
        if (!err) {
            if (!user) {
                callback(possibleUsername);
            } else {
                return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
            }
        } else {
            callback(null);
        }
    });
};

mongoose.model('staff', StaffSchema);
