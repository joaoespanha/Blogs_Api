const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        displayName: DataTypes.INTEGER,
        email: DataTypes.INTEGER,
        password: DataTypes.INTEGER,
        image: DataTypes.INTEGER,
    },
    {
        tablename: 'users',
        timestamps: false,
        underscored: true
    })

    User.associate = (models) => {
        User.hasMany(models.BlogPost, {
            foreignKey: 'userId',
            as: 'blogposts'
        })
    }

    return User;
}