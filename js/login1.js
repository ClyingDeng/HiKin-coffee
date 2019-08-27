var location
        var selProvince, selCity
        let city
        window.onload = function() {

            $('.head').on('mouseover', function() {
                $('.nav').css({
                    "background-color": "#20191B",
                    "opacity": 1
                })
                $('.menu').css({
                    "background-color": "#20191B",
                    "opacity": 1
                })
            })
            $('.head').on('mouseout', function() {
                $('.nav').css({
                    "background-color": ""
                })
                $('.menu').css({
                    "background-color": ""
                })
            })
            $('.head_map').on('mouseover', function() {
                $('.location').css("display", "block")
            })
            $('.head_map').on('mouseout', function() {
                $('.location').css("display", "none")
            })
            $('.location').on('mouseover', function() {
                $('.location').css("display", "block")
            })
            $('.location').on('mouseout', function() {
                $('.location').css("display", "none")
            })
            $('.head_li1 a').on('mouseover', function() {
                $(this).css("color", "#fff")
            })
            $('.head_li1 a').on('mouseout', function() {
                $(this).css("color", "#ccc")
            })
            $('.head_li2 a').on('mouseover', function() {
                $(this).css("color", "#fff")
            })
            $('.head_li2 a').on('mouseout', function() {
                $(this).css("color", "#ccc")
            })
            $('.head_xin').on('mouseover', function() {
                $(this).css("background-image", "url(../imgs/xin2.png)")
            })
            $('.head_xin').on('mouseout', function() {
                $(this).css("background-image", "url(../imgs/xin1.png)")
            })
            $('.head_xin').on('click', function () {
                location.href = 'wishList.html'
            })
            $('.head_s1').on('mouseover', function() {
                $(this).css("background-image", "url(../imgs/search2.png)")
            })
            $('.head_s1').on('mouseout', function() {
                    $(this).css("background-image", "url(../imgs/search1.png)")
                })
                //点击搜索，隐藏nav出现搜索框
            $('.head_s1').on('click', function() {
                $(this).css("background-image", "url(../imgs/search2.png)")
            })
            $('.head_li3 a').on('mouseover', function() {
                $(this).css("color", "#fff")
                    // $('#menu_List').css('display', 'block')
            })
            $('.head_li3 a').on('mouseout', function() {
                $(this).css("color", "#ccc")
                    // $('#menu_List').css('display', 'none')
            })
            $('.head_li3').on('mouseover', function() {
                $('#menu_List').css('display', 'block')
            })
            $('.head_li3').on('mouseout', function() {
                $('#menu_List').css('display', 'none')
            })
            $('.head_Shop_logo').on('mouseover', function() {
                $(this).css("background-image", "url(../imgs/shop2.png)")
            })
            $('.head_Shop_logo').on('mouseout', function() {
                $(this).css("background-image", "url(../imgs/shop1.png)")
            })
            $('.head_s1').on('click', function() {
                $('#search_search').css('display', 'block')
            })
            $('.search_display').on('click', function() {
                $('#search_search').css('display', 'none')
            })
            $('#menu_List').on('mouseover', function() {
                $(this).css("display", "block")
            })
            $('#menu_List').on('mouseout', function() {
                    $(this).css("display", "none")
                })
                //获取定位
            $.getJSON('../js/Province_City.json', function(result) {
                startP(result.province)
                    // startC(result)
                    // var city = result.city
                $('#province').on('change', function() {
                    // $('#city option').length = 0
                    // console.log(this.value) //选中第几个
                    //选中当前城市下标
                    city = result.city[this.value]
                        // console.log(city)
                    startC(this.value, city)
                })

            })
            //文本框设置
         $(document).ready(function () {
            // alert('ok111')

            $('.tele').click(function () {
                if ($(this).val() == "请输入电子邮箱或手机号") {
                    $(this).val("");
                }
            })
            $('.tele').blur(function () {
                if ($(this).val() == "") {
                    $(this).val("请输入电子邮箱或手机号");
                }
            })

            $('#mytele').click(function () {
                if ($(this).val() == "请输入11位手机号码") {
                    $(this).val("");
                }
            })
            $('#mytele').blur(function () {
                if ($(this).val() == "") {
                    $(this).val("请输入11位手机号码");
                }
            })

            $('.telecheck').click(function () {
                if ($(this).val() == "请输入手机验证码") {
                    $(this).val("");
                }
            })
            $('.telecheck').blur(function () {
                if ($(this).val() == "") {
                    $(this).val("请输入手机验证码");
                }
            })

            $('.set-secret').click(function () {
                if ($(this).val() == "至少六个字符，区分大小写") {
                    $(this).val("");
                }
            })
            $('.set-secret').blur(function () {
                if ($(this).val() == "") {
                    $(this).val("至少六个字符，区分大小写");
                }
            })

            $('.sure-secret').click(function () {
                if ($(this).val() == "确认密码") {
                    $(this).val("");
                }
            })
            $('.sure-secret').blur(function () {
                if ($(this).val() == "") {
                    $(this).val("确认密码");
                }
            })
            $('#forget-tel').click(function () {
                if ($(this).val() == "请输入手机号码、电子邮箱") {
                    $(this).val("");
                }
            })

            $('#forget-tel').blur(function () {
                if ($(this).val() == "") {
                    $(this).val("请输入手机号码、电子邮箱");
                }
            })

        })
        //登录跳转
        // window.onload = function () {
            document.getElementById('login').onclick = function () {

                window.location.href = "login.html"
            }
            //点击事件
            document.getElementById('create').onclick = function () {
                // alert('ok')

                document.getElementById('big').style.display = 'none';
                document.getElementById('zhanghu').style.display = 'block';
            }
            document.getElementById('secret-policy').onclick = function () {
                window.location.href = "secret.html"
            }
            document.getElementById('use').onclick = function () {
                window.location.href = "use.html"
            }
            document.getElementById('qq').onclick = function () {
                document.getElementById('big').style.display = 'none';
                document.getElementById('erweima').style.display = 'block';
            }
            document.getElementById('weixin').onclick = function () {
                document.getElementById('big').style.display = 'none';
                document.getElementById('erweima').style.display = 'block';
            }
            document.getElementById('zhifubao').onclick = function () {
                document.getElementById('big').style.display = 'none';
                document.getElementById('erweima').style.display = 'block';
            }
            document.getElementById('forget-secret').onclick = function () {
                document.getElementById('big').style.display = 'none';
                document.getElementById('forget').style.display = 'block';
            }
            document.getElementById('zhanghu-quxiao').onclick = function () {
                document.getElementById('big').style.display = 'block';
                document.getElementById('zhanghu').style.display = 'none';


            }
            document.getElementById('forget-quxiao').onclick = function () {
                document.getElementById('big').style.display = 'block';
                document.getElementById('forget').style.display = 'none';


            // }
        }
    }
        

        function startC(obj, city) {
            // console.log(city)
            // console.log(city.length)
            document.getElementById('city').length = 1
            for (var i = 0; i < city.length; i++) {
                var newCity = document.createElement('option')
                newCity.innerText = city[i]
                newCity.value = i
                document.getElementById('city').appendChild(newCity)

            }
        }

        function startP(province) {
            for (var i = 0; i < province.length; i++) {
                var newProvince = document.createElement('option')
                newProvince.innerText = province[i]
                newProvince.value = i
                document.getElementById('province').appendChild(newProvince)

            }
            // console.log(this.city)
        }

         