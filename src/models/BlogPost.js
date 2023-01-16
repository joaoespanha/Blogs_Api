module.exports  = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
    {
        tablename: 'blog_posts',
        timestamps: false,
        underscored: true
    })

    BlogPost.associate = (models) => {
        User.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        })
    }

    return BlogPost;
}