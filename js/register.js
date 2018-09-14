$(function(){

    $('#register-btn').on('click',function(){

        var username = $('[name="username"]').val();
        var mobile = $('[name="mobile"]').val();
        var password = $('[name="password"]').val();
        var againPass = $('[name="againPass"]').val();
        var vCode = $('[name="vCode"]').val();
        // console.log(username);
        // console.log(mobile);
        // console.log(password);
        // console.log(againPass);
        // console.log(vCode);

        if(!username){
            mui.toast('请输入用户名');
            return;
        }

        if(mobile.length <11){
            mui.toast('请输入合法的手机号');
            return;
        }

        if(password != againPass){
            mui.toast('两次输入密码不一致');
            return;
        }
        $.ajax({
            url: '/user/register',
            type: 'post',
            data: {
                username: username,
                mobile: mobile,
                password: password,
                vCode: vCode
            },
            success: function(res){
                // console.log(res);
                mui.toast('注册成功');

                setTimeout(function(){
                    location.href = "login.html";
                }, 2000)
            }
        })
    });
    // 获取认证码
    $('#getCode').on('click',function(){

        $.ajax({
            url: '/user/vCode',
            type: 'get',
            success: function(res){
                console.log(res.vCode);
            }
        })
    });
})
