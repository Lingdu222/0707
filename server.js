var http =require ("http")
var mysql=require("mysql")
http.createServer(function(req,res){
    //创建连接
    var connection =mysql.createConnection({
        port:"3306",
        host:"localhost",
        user:"root",
        password:"root",
        database:"o0711"
    })
    //连接数据库
    connection.connect(function(e){
        if(e){
            throw e
        }else{
            console.log(1)
        }
    })
    //sql查询
    connection.query("select * from list2",function(e,data){
       if(e){
            throw e
        }else{
            console.log(1)
            res.write(JSON.stringify(data))
            res.end()
        }
    })
    //释放
    connection.end(function(e){
         if(e){
            throw e
        }else{
            console.log(1)
        }
    })
}).listen(8070);
console.log("run at localhost：8070")
