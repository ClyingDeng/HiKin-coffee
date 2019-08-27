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
var recordCount = 0 //总页数
var pageSize = 3 //每页记录数
var pageCount = 0 //总页数
var currentPage = 0 //当前页
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

    showInfo()
    showPages()
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


function showPages() {
    var stores = coffee["cake"]                  //获取所有的商店
    recordCount = stores.length                   //获取总的记录数
    pageCount = Math.ceil(recordCount / pageSize) // 获取总的页数（使用ceil（进位）只要有一个信息就要给一页）
    var pagesUl = document.getElementById('pagesList')
    var strPages = ''
    for (var i = 0; i < pageCount; i++) {
        strPages += '<li onclick="show(' + i + ')">' + (i + 1) + '</li>'
    }
    pagesUl.innerHTML = strPages;
    pagesUl.children[0].className = 'selectedPage' // 默认显示第一页
}
//通用显示页面数据
function showInfo() {
    var stores = coffee["cake"] //获取所有的商店
    recordCount = stores.length
    var cakeUl = document.getElementById('cakeList')   //获取ul节点
    var strCake = ''
    //利用循环遍历JSON数据，并且通过DOM动态添加到页面中
    //第1页：0-9；第2页：10-19;第3页：20-29  i<recordCount(判断如果最后一页内的信息个数如果小于pagesize，也可以生成一页（最后一页）) 
    for (var i = currentPage * pageSize; i < (currentPage + 1) * pageSize && i < recordCount; i++) {
        strCake += '<li><img src="' + stores[i].image_url + '"></img><h3>' + stores[i].name + '</br>' + stores[i].price + '</h3><p>' + stores[i].con + '</p></li>'
    }
    cakeUl.innerHTML = strCake
    var ps = document.getElementById('cakeList').getElementsByTagName('p')
    var hs = document.getElementById('cakeList').getElementsByTagName('h3')
    var spans = document.getElementById('cakeList').getElementsByTagName('li')
    var newSpans = $.makeArray(spans)
    for (let i = 0; i < ps.length; i++) {
        newSpans[i].onmouseover = function () {
            ps[i].style.display = "block"
            hs[i].style.display = "block"
            newSpans[i].style.backgroundColor = '#aaa';
        }
        newSpans[i].onmouseout = function () {
            ps[i].style.display = "none"
            hs[i].style.display = "none"
            newSpans[i].style.backgroundColor = '#e7e7e7';
        }

    }
}
//显示指定页的页面数据
function show(index) {
    currentPage = index;    //设置当前页数
    showInfo()
    var pagesUl = document.getElementById('pagesList')
    //先把所有的分页符号样式设为默认
    for (var i = 0; i < pagesUl.children.length; i++) {
        pagesUl.children[i].className = 'unselectedPage'
    }
    //设置指定页符采用新的类样式
    pagesUl.children[index].className = 'selectedPage'
}

var coffee = {
    "highPriceCoffee": [
        {
            "name": "牙买加咖啡",
            "image_url": "../images/coffee01.jpg",
            "price": "￥200",
            "con": "我们绝对相信牙买加蓝山咖啡是最佳的咖啡，它的酸、甘、醇与苦味非常平衡，味道芳香，喝起来非常润顺；"
        },
        {
            "name": "蓝山咖啡",
            "image_url": "../images/coffee02.jpeg",
            "price": "￥60",
            "con": "（Jamaica Blue Mountain Coffee），其中的蓝山咖啡和高山咖啡下面又各分四个等级。从质量来分由上到下依次为：NO.1、NO.2、NO.3和PB，PB就是圆豆。按照CIB的标准，只有种植在海拔666米以上部分的咖啡才被称为牙买加蓝山咖啡；"
        },
        {
            "name": "高山咖啡",
            "image_url": "../images/coffee03.jpg",
            "price": "￥120",
            "con": "（Jamaica High Mountain Supreme Coffee Beans）在牙买加蓝山地区666米以下部分生产的咖啡称为高山咖啡，也是仅次于蓝山咖啡品质的咖啡，被业内人士称作蓝山咖啡的兄弟品种，牙买加蓝山咖啡因产量极少，因此如果想要品尝牙买加口味咖啡，那么牙买加高山咖啡就是您最好的选择了。"
        },
        {
            "name": "意式拿铁",
            "image_url": "../images/coffee04.jpeg",
            "price": "￥40",
            "con": "意大利式拿铁咖啡（Caffè Latte）需要一小杯Espresso（意大利语）和一杯牛奶(150～200毫升），拿铁咖啡中牛奶多而咖啡少，这与Cappuccino（卡布奇诺）有很大不同。拿铁咖啡做法极其简单，就是在刚刚做好的意大利浓缩咖啡中倒入接近沸腾的牛奶。"
        },
        {
            "name": "玛奇朵咖啡",
            "image_url": "../images/coffee05.jpeg",
            "price": "￥45",
            "con": "直接在意大利浓缩咖啡上装饰两大勺牛奶泡沫，就成了被意大利人叫做Espresso Macchiato"
        },
        {
            "name": "欧蕾咖啡",
            "image_url": "../images/coffee06.jpeg",
            "price": "￥60",
            "con": "把一杯意大利浓缩咖啡和一大杯热热的牛奶同时倒入一个大杯子，最后在液体表面放两勺打成泡沫的奶油，要求牛奶和浓缩咖啡一同注入杯中，牛奶和咖啡在第一时间相遇，碰撞出的是一种闲适自由的心情"
        },
        {
            "name": "焦糖拿铁",
            "image_url": "../images/coffee07.jpg",
            "price": "￥40",
            "con": "拿铁是最为国人熟悉的意式咖啡品项.它是在沉厚浓郁的ESPRESSO中，加进等比例，甚至更多牛奶的花式咖啡.有了牛奶的温润调味，让原本甘苦的咖啡变得柔滑香甜，甘美浓郁，就连不习惯喝咖啡的人，也难敌拿铁芳美的滋味。和卡布奇诺一样，拿铁因为含有多量的牛奶而适合在早晨饮用。"
        },
        {
            "name": "榛果拿铁",
            "image_url": "../images/coffee08.jpeg",
            "price": "￥30",
            "con": "意大利浓缩咖啡与牛奶的经典混合，并添入榛果酱，口味较甜，奶香味浓。适宜于熬夜人群喝。"
        }
        ,
        {
            "name": "绿茶拿铁",
            "image_url": "../images/coffee09.jpeg",
            "price": "￥35",
            "con": "绿茶拿铁是健康的鲜奶茶制作，没有糖精没有奶粉，口味很纯很醇。加了燕麦，层次很丰富，这里的燕麦，甜甜的颗粒，很好嚼。"
        },
        {
            "name": "蓝莓拿铁",
            "image_url": "../images/coffee10.jpg",
            "price": "￥30",
            "con": "蓝莓含有单宁酸，可以减轻消化系统的发炎症状。蓝莓拿铁，不仅酸甜爽口，其强而有效的抗氧化作用是其他饮料无法比肩的。"
        },
        {
            "name": "甜瓜拿铁",
            "image_url": "../images/coffee11.jpg",
            "price": "￥30",
            "con": "甜瓜蒂中的B族维生素能具有保护肝脏，减轻慢性肝损伤的作用，爱喝酒的朋友们可以多食甜瓜，保护肝脏。夏令时分，人们可以多饮甜瓜拿铁，既保证营养，又能解署。"
        }
    ]
    ,

    "cake": [
        {
            "name": "黑白巧克力慕斯",
            "image_url": "../images/cake01.jpeg",
            "price": "￥30",
            "con": "口感冰凉细腻，白巧克力慕斯的甜，与底部黑巧克力酱的苦,风味均衡柔美"
        },
        {
            "name": "榴莲飘飘",
            "image_url": "../images/cake02.jpg",
            "price": "￥40",
            "con": "调整奶油中糖的用量比例，基本做到，依靠榴莲的自然甜味"
        },
        {
            "name": "摩卡",
            "image_url": "../images/cake03.jpeg",
            "price": "￥60",
            "con": "使用比利时黑巧，制作出克数十足的可可果形状，松露巧克力，并进一步大胆将咖啡豆碎，嵌入巧克力咀嚼动作中"
        },
        {
            "name": "松仁淡奶（木糖醇）",
            "image_url": "../images/cake04.jpeg",
            "price": "￥40",
            "con": "奶油与坚果的和谐、轻甜，除了松子的香气，咀嚼时，还有一丝丝甜，细筛过后的微苦可可粉，让天威变得鲜明，立体"
        },
        {
            "name": "芒果慕斯",
            "image_url": "../images/cake05.jpeg",
            "price": "￥50",
            "con": "采用当季成熟鲜芒，做出理想的芒果慕斯，优质芒果的三种姿态，与青柠酸乳酪夹心"
        }
    ]
    ,
    "milkTea": [
        {
            "name": "茫茫芝士茉香茶",
            "image_url": "../images/milkTea01.jpeg",
            "price": "￥27",
            "con": "清新茉莉茶的低调和浓浓芒果香气，搭配芝士奶盖的细腻绵密，果香浓郁，茶韵悠长，碰撞出维蕾德全新体验"
        },
        {
            "name": "大红袍寒天牛乳茶",
            "image_url": "../images/milkTea02.jpg",
            "price": "￥21",
            "con": "大红袍牛乳茶醇厚的香气佐以香滑Q嫩的黑糖口味寒天晶球，口感顺滑，回甘悠长，好喝不腻"
        },
        {
            "name": "活力派对柠檬绿茶",
            "image_url": "../images/milkTea03.jpg",
            "price": "￥24",
            "con": "清新柔和的茉莉茶搭配柠檬的倾向，轻盈的就干充满清新的夏日气息，口感清丽，沁人心脾"
        },
        {
            "name": "莓莓芝士茉香茶",
            "image_url": "../images/milkTea04.jpeg",
            "price": "￥27",
            "con": "清新茉莉茶底混合清甜草莓果粒，搭配芝士奶盖细腻绵密，口感丰盈，清甜洋溢"
        },
        {
            "name": "卡布奇诺瑞纳冰",
            "image_url": "../images/milkTea05.jpeg",
            "price": "￥27",
            "con": "卡布奇诺咖啡风味融入牛奶与细腻沙冰，香甜纯滑"
        }
    ]
}