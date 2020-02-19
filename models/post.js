'use strict';
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});
    Post.associate = function (models) {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };
    return Post;
};
