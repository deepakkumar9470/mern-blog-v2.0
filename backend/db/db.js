import mysql from 'mysql'


 const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password :'deepakmysql@2022',
    database : 'blog'
}) 

db.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Coonected to MySQL database')
    }
})
export default db

