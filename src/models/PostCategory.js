module.exports  = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId:  DataTypes.INTEGER,
        categoryId:  DataTypes.INTEGER
    },
    {
        tablename: 'posts_categories',
        timestamps: false,
        underscored: true
    })

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            foreignKey: 'categoryId',
            through: PostCategory,
            as: 'blogposts',
            otherKey: 'postId'
        })

        models.BlogPost.belongsToMany(models.Category, {
            foreignKey: 'postId',
            through: PostCategory,
            as: 'categories',
            otherKey: 'categoryId'
        })
    }

    return PostCategory;
}