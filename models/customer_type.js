module.exports=(sequelize,type)=>{
    return sequelize.define('CustomerTypes',{
        id:{
            field: 'CUT_ID',
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type: type.STRING,
            allowNull:false
        },
        commission:{
            type: type.FLOAT,
            allowNull:0.0
        }
    },{timestamps:false});
};