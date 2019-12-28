// 所有和用户相关的ajax请求，全部放到这个js里面
// 比如登录、退出、获取用户信息


var user = {
    logout: function () {
        $.post(baseUrl + '/admin/logout', function (res) {
            alert(res.msg);
            if (res.code === 200) {
                // 退出成功，跳转到登录页面
                location.href = 'login.html';
            }
        });
    },
    login: function (username, password) {
        $.post(
            baseUrl + '/admin/login', 
            {user_name: username, password: password}, 
            function (res) {
                alert(res.msg); // 无论成功还是失败，都要提示
                if (res.code === 200) {
                    // 成功，跳转到后台首页
                    location.href = 'index.html';
                }
            },
            'json'
        );
    },
    getuser: function () {

    }
}




