// const User = require('../models').User;
const User = 1;

const renderProfile = (req, res) => {
    User.findByPk(req.params.index, {
        include: [{
            model: Fruit,
            attributes: ['id', 'name']
        }]
    })
        .then(userProfile => {
            res.render('users/profile.ejs', {
                user: userProfile
            })
        })
}

const editProfile = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.index
        },
        returning: true
    })
        .then(updatedUser => {
            res.redirect(`/users/profile/${req.params.index}`);
        })
}

const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.index
        }
    })
        .then(() => {
            res.redirect('/users');
        })
}

module.exports = {
    renderProfile,
    editProfile,
    deleteUser
}