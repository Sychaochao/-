

var user ={
    logout:function(){
        $.post(dzurl + '/admin/logout',
        function(res){
           alert(res.msg)
            
            if(res.code ===200){
                //退出成功 跳转登录页面
                location.href='login.html';
            }
        }

    )
    },
    login(username,password){
        $.post(dzurl +'/admin/login',
        {user_name:username,password:password},
        function(res){
            alert(res.msg);
            
            if(res.code ===200){
                console.log(1);
                
               location.href='index.html';
            }
        },
    'json'
    )
    
    },
    getuser: function (callback) {
        $.get(dzurl + '/admin/getuser',
        function(res){
            callback(res);
         
        }
    )
    }
}