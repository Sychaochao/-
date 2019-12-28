

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
    getuser: function () {
        $.get(dzurl + '/admin/getuser',
        function(res){
            if(res.code ===200){
                //渲染页面 设置用户名头像
                $('.user_info').find('img').attr('src',res.data.user_pic).next('span').html('欢迎&nbsp;&nbsp;'+ res.data.nickname)
                //更改头像
                $('#yel').attr('src',res.data.user_pic);
            }
        }
    )
    }
}