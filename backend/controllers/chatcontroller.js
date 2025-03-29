const Chat = require('../models/chat')

exports.addChat = async (req, res) => {
    try {
        const chat = new Chat({
            question: req.body.question,
            answer: req.body.answer
        })

        await chat.save()
        res.status(201).json({ message: 'Chat added' })
    }
    catch (error) {
        res.status(500).json({ error: 'Error al guardar la pregunta: ' + error.message })
    }
}

exports.getChats = async (req, res) => {
    try {
        const chats = await Chat.find()
        res.json(chats)
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener la pregunta: ' + error.message })
    }
}