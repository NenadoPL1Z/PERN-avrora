const {News} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class NewsController {
    async getPage(req, res) {
        try {
            let {limit, page} = req.body;
            page = page || 1
            limit = limit || 10
            let offset = page * limit - limit
            const news = await News.findAndCountAll({where: {}, limit, offset})
            return res.json(news)
        } catch (e) {
            return res.json({error: e})
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.body;
            const news = await News.findOne({where: {id: id}})
            return res.json(news)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async create(req, res, next) {
        try {
            let sendObj = {}
            const {title, subtitle} = req.body
            const formData = req.files
            if (formData?.img) {
                const {img} = formData;
                const fileName = uuid.v4() + '.jpg'
                img.mv(path.resolve(__dirname, '..', 'static', fileName))
                sendObj = {title, subtitle, img: fileName}
            } else {
                sendObj = {title, subtitle}
            }
            const news = await News.create(sendObj)
            return res.json(news);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}


module.exports = new NewsController()
