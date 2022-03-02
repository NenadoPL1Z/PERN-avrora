const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJWT = (id, email, roles, firstName, lastName) => {
    return jsonwebtoken.sign(
        {
            id: id,
            email: email,
            roles: roles,
            firstName: firstName,
            lastName: lastName
        },
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration (req, res, next) {
        try {
            const {firstName, lastName, email, password} = req.body
            if (!firstName) {
                next(ApiError.badRequest('Введите ваше имя'))
            }
            if (!lastName) {
                next(ApiError.badRequest('Введите вашу фамилию'))
            }
            if (!email || !password) {
                next(ApiError.badRequest('Некорректный email или пароль'))
                return;
            }

            const condidate = await User.findOne({where: {email}})

            if (condidate) {
                next(ApiError.badRequest('Пользователь с таким email уже существует'))
                return;
            }

            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({firstName, lastName, email, password: hashPassword, roles: 'USER'})
            const token = generateJWT(user.id, user.email, user.roles, user.firstName, user.lastName)
            return res.json({token});
        } catch (e) {
            return res.json({error: e})
        }
    }

    async login (req, res, next) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({where: {email}})
            if (!user) {
                return res.json(ApiError.badRequest('Пользователь не найден'))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                return res.json(ApiError.badRequest('Указан неверный пароль'))
            }
            console.log(user.lastName)
            const token = generateJWT(user.id, user.email, user.roles, user.firstName, user.lastName);
            return res.json({token});
        } catch (e) {
            return res.json({error: e})
        }
    }

    async auth (req, res, next) {
        try {
            const token = generateJWT(req.user.id, req.user.email, req.user.roles, req.user.firstName, req.user.lastName)
            return res.json({token})
        } catch (e) {
            return res.json({error: e})
        }
    }

    async reset (req, res) {

    }
}


module.exports = new UserController()
