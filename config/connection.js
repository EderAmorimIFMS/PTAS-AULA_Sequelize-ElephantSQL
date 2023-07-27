const { Sequelize } = require('sequelize');


const sequelize = new Sequelize("postgres://sjvyeaaw:GxCSIKRha-upyy3caNoxP1EPq7vfTMCI@silly.db.elephantsql.com/sjvyeaaw",{
define:{
  timetamps:true,
  underscored:true,
},
});

  try {
    sequelize.authenticate();
    console.log('Conectado com o ElephantSQL!');
  } catch (error) {
    console.error('Atenção, a conexão falhou!:', error);
  }

  module.exports={Sequelize,sequelize};