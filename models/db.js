const Sequelize = require('sequelize');
const UserModel = require('./user');
const CustomerTypeModel = require('./customer_type');
const CustomerModel = require('./customer');

const sequeize = new Sequelize('CustomerMangement','sa','123456',{
    dialect:'mssql',
    host:'localhost',
    // dialectOptions:{
    //     "options":{
    //         "instanceName":"SQLEXPRESS"
    //     }
    // },
    pool:{
        max: 20, min:0, acquire:30000,idle:10000
    },
    logging:true
});
const User = UserModel(sequeize,Sequelize);
const CustomerType = CustomerTypeModel(sequeize,Sequelize);
const Customer = CustomerModel(sequeize,Sequelize);
Customer.belongsTo(CustomerType,{foreignKey:'CUT_ID',as:'customerType'});
CustomerType.hasMany(Customer,{foreignKey:'CUT_ID',as:'customers'});
//run once, the comment-out
sequeize.sync({force:true}).then(()=>{
    console.log('Database & tables created!');
});

module.exports = {
    User,
    CustomerType,
    Customer
}
