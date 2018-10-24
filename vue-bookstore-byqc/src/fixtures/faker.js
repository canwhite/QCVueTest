import HomePageData from "./home.json"

//预加载这两个文件下的图片内容,require.context将编译后的资源作为一个模块加载进来
//使用相对位置是因为部署后的真实地址可能会有变化 
var slider_images = require.context('./sliders', false, /\.(png|jpg|gif|svg)$/)
var cover_images = require.context('./covers', false, /\.(png|jpg|gif|svg)$/)

//具体的img_url和资源关联
HomePageData.top.forEach((x)=> {
    x.img_url = slider_images('./' + x.img_url)
})

HomePageData.promotions.forEach((x)=> {
    x.img_url = cover_images('./' + x.img_url)
})

//返回json数据
export default {
    getHomeData() {
        return HomePageData
    }
}