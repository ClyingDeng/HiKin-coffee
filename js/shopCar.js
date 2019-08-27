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
        location.href = 'wishList.html'
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

    $('#add1').click(function () {
        var k = $(this).prev().val()
        $(this).prev().val(parseInt(k) + 1)
    })
    $('#del1').click(function () {
        var k = $(this).next().val()
        if ((parseInt(k)) <= 1) {
            alert('商品数量必须大于0')
        } else {
            $(this).next().val(parseInt(k) - 1)
        }
    })
    $('#add2').click(function () {
        var k = $(this).prev().val()
        $(this).prev().val(parseInt(k) + 1)
    })
    $('#del2').click(function () {
        var k = $(this).next().val()
        if ((parseInt(k)) <= 1) {
            alert('商品数量必须大于0')
        } else {
            $(this).next().val(parseInt(k) - 1)
        }
    })

    var chkAll = document.getElementById('all')
        var chks = document.getElementsByName('commodity')
        chkAll.onchange = function () {
            for (var i = 0; i < chks.length; i++) {
                chks[i].checked = chkAll.checked
            }
        }
        for (var j = 0; j < chks.length; j++) {
            chks[j].onchange = function () {
                var m = 0
                for (var k = 0; k < chks.length; k++) {
                    if (chks[k].checked) {
                        m++
                    }
                }
                if (m == chks.length) {
                    chkAll.checked = true
                } else { chkAll.checked = false }
            }
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


function showSalary(obj) {
    var salary = obj.value
    document.getElementById('num').innerHTML = "数量:" + salary
}
function showSalary1(obj) {
    var salary = obj.value
    document.getElementById('num1').innerHTML = "数量:" + salary
}