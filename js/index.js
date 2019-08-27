var location
window.onscroll = function () {
    var scroH = document.documentElement.scrollTop
    // console.log(scroH)
    var oMenu = document.getElementById('menu')
    if (scroH >= 80) {
        oMenu.style.position = 'fixed'
        oMenu.style.top = '0'
        oMenu.style.left = '0'
        oMenu.style.backgroundColor = '#20191B'
    } else {
        oMenu.style.position = 'relative'
        oMenu.style.backgroundColor = ''
    }
}
var selProvince, selCity
let city
window.onload = function () {
    // $('#banner_Img2').fadeIn(1000);        //淡入
    $('#banner_Img2').fadeOut(2000);

    var timer = null
    var index = 0
    var images = document.getElementById('banner_outer').getElementsByTagName('span')
    // console.log(images.length)
    if(timer == null){
        timer = setInterval(function () {
            //1.首先将所有图片全部隐藏
            for(var i = 0; i < images.length; i++){
                images[i].style.display = "none" //依次将所有图片隐藏
                // $('#banner_outer span:eq(i+1)').fadeIn(1000); 
                // $('#banner_Img1').fadeIn(1000); 
            }
            //2.将指定图片显示
            images[index++].style.display = "block"
            if(index == images.length){
                index = 0;
            }
        },2000)
    }

    $('.head').on('mouseover', function () {
        $('.nav').css({
            "background-color": "#20191B",
            "opacity": 1
        })
        $('.menu').css({
            "background-color": "#20191B",
            "opacity": 1
        })
    })
    $('.head').on('mouseout', function () {
        $('.nav').css({
            "background-color": ""
        })
        $('.menu').css({
            "background-color": ""
        })
    })
    $('.head_map').on('mouseover', function () {
        $('.location').css("display", "block")
    })
    $('.head_map').on('mouseout', function () {
        $('.location').css("display", "none")
    })
    $('.location').on('mouseover', function () {
        $('.location').css("display", "block")
    })
    $('.location').on('mouseout', function () {
        $('.location').css("display", "none")
    })
    $('.head_li1 a').on('mouseover', function () {
        $(this).css("color", "#fff")
    })
    $('.head_li1 a').on('mouseout', function () {
        $(this).css("color", "#ccc")
    })
    $('.head_li2 a').on('mouseover', function () {
        $(this).css("color", "#fff")
    })
    $('.head_li2 a').on('mouseout', function () {
        $(this).css("color", "#ccc")
    })
    $('.head_xin').on('mouseover', function () {
        $(this).css("background-image", "url(../imgs/xin2.png)")
    })
    $('.head_xin').on('mouseout', function () {
        $(this).css("background-image", "url(../imgs/xin1.png)")
    })
    $('.head_xin').on('click', function () {
        location.href = './views/wishList.html'
    })
    $('.head_s1').on('mouseover', function () {
        $(this).css("background-image", "url(../imgs/search2.png)")
    })
    $('.head_s1').on('mouseout', function () {
        $(this).css("background-image", "url(../imgs/search1.png)")
    })
    //点击搜索，隐藏nav出现搜索框
    $('.head_s1').on('click', function () {
        $(this).css("background-image", "url(../imgs/search2.png)")
    })
    $('.head_li3 a').on('mouseover', function () {
        $(this).css("color", "#fff")
        // $('#menu_List').css('display', 'block')
    })
    $('.head_li3 a').on('mouseout', function () {
        $(this).css("color", "#ccc")
        // $('#menu_List').css('display', 'none')
    })
    $('.head_li3').on('mouseover', function () {
        $('#menu_List').css('display', 'block')
    })
    $('.head_li3').on('mouseout', function () {
        $('#menu_List').css('display', 'none')
    })
    $('.head_Shop_logo').on('mouseover', function () {
        $(this).css("background-image", "url(../imgs/shop2.png)")
    })
    $('.head_Shop_logo').on('mouseout', function () {
        $(this).css("background-image", "url(../imgs/shop1.png)")
    })
    $('.head_s1').on('click', function () {
        $('#search_search').css('display', 'block')
    })
    $('.search_display').on('click', function () {
        $('#search_search').css('display', 'none')
    })
    $('#menu_List').on('mouseover', function () {
        $(this).css("display", "block")
    })
    $('#menu_List').on('mouseout', function () {
        $(this).css("display", "none")
    })
    //获取定位
    $.getJSON('../js/Province_City.json', function (result) {
        startP(result.province)
        // startC(result)
        // var city = result.city
        $('#province').on('change', function () {
            // $('#city option').length = 0
            // console.log(this.value) //选中第几个
            //选中当前城市下标
            city = result.city[this.value]
            // console.log(city)
            startC(this.value, city)
        })

    })

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