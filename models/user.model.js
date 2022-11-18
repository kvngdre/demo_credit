const { Model } = require('objection');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');

class User extends Model {
    static get tableName() {
        return 'users';
    }

    $beforeInsert() {
        console.log('this was called', this);
        this.password = bcrypt.hashSync(this.password, 12);
    }

    $afterInsert() {
        delete this.password;
    }

    $afterFind() {}

    static get firstName() {
        return 'firstName';
    }

    static get lastName() {
        return 'lastName';
    }

    static get email() {
        return 'email';
    }

    static get password() {
        return 'password';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['firstName', 'lastName', 'email', 'password'],
            properties: {
                id: { type: 'integer' },
                firstName: { type: 'string', minLength: 2, maxLength: 30 },
                lastName: { type: 'string', minLength: 2, maxLength: 30 },
                email: { type: 'string', maxLength: 50 },
                password: { type: 'string' },
            },
        };
    }

    omitPassword() {
        delete this.password;
    }

    generateAccessToken() {
        return jwt.sign(
            {
                id: this.id,
            },
            config.get('jwt.secret'),
            {
                audience: config.get('jwt.audience'),
                expiresIn: parseInt(config.get('jwt.exp_time')),
                issuer: config.get('jwt.issuer'),
            }
        );
    }

    async isValidPassword(pwd) {
        return await bcrypt.compare(pwd, this.password);
    }
}

module.exports = User;