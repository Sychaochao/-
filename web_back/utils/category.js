// category  文章类别 新增 删除 修改

var category= {
    //
    show:function(callback){

        $.get(dzurl + '/admin/category_search',function(res){
            console.log(res);
            
            callback(res);
        })
    },
    //新增类别
    add:function(){

    },
    //删除文章类别
    delete:function(){

    },
    //修改（更新 文字类别
    updata:function(){

    }
}