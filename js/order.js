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

    $('.appear').click(function () {
        var num = $(this).parent().next().children()
        var display =num.css('display')
        if(display == "none"){
            num.css('display','block')
            $(this).attr('src','../images/jianhao.png')
        }else{
            num.css('display','none')
            $(this).attr('src','../images/jiahao.png')
        }
    })

    var myChart = echarts.init(document.getElementById('mon_total'))
    option = {
        title : {
            text: '月消费总金额',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            data:['拿铁','慕斯蛋糕','浓郁奶茶','咖啡','线下消费']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'月消费',
                type:'pie',
                radius : [20, 110],
                center : ['30%', '50%'],
                roseType : 'radius',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {value:20, name:'拿铁'},
                    {value:15, name:'慕斯蛋糕'},
                    {value:15, name:'浓郁奶茶'},
                    {value:25, name:'咖啡'},
                    {value:25, name:'线下消费'}
                ]
            },
            {
                name:'消费类别占比',
                type:'pie',
                radius : [30, 110],
                center : ['70%', '50%'],
                roseType : 'area',
                data:[
                    {value:10, name:'香草拿铁'},
                    {value:10, name:'草莓慕斯'},
                    {value:15, name:'绿茶玛奇朵'},
                    {value:15, name:'蓝山咖啡'},
                    {value:20, name:'珍珠奶茶'},
                    {value:10, name:'巧克力蛋糕'},
                    {value:10, name:'抹茶拿铁'},
                    {value:10, name:'抹茶星冰乐'}
                ]
            }
        ]
    };
    
    myChart.setOption(option);

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

