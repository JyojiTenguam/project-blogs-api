module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
      id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement:true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.STRING,
      published:{ 
        defaultValue: DataTypes.NOW,
        type:DataTypes.DATE,
      },
      updated:{
        defaultValue: DataTypes.NOW,
        type:DataTypes.DATE,
      } 
  },{
      tableName:'blog_posts',
      underscored: true,
      timestamps: false,
  });
  BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'User',
      });
    };
  return BlogPost;
};
