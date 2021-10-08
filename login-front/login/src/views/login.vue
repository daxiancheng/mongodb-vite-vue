<template>
    <div id="login" style="height: 100%;width:100%;">
        <img src="../assets/1-c.png" alt="ss" height="100%" width="100%" id="bgimg" v-if="!bgimg">
        <div style="position: absolute;width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;">
            <div style="width:28%;position: relative">
                <img src="../assets/name.png" width="100%">
                <div>
                    <div style=" position: absolute;top: 112px;left: 128px;">
                        <span>注册码：</span>
                        <input type="text" class="inputCss" style="font-size:14px;" v-model="pollCode" @keydown="keyEnter">
                    </div>
                    <div style=" position: absolute;top: 222px;left: 128px;">
                        <img src="../assets/xm.png" alt="" width="60">
                        <input type="text" class="inputCss" v-model="studentData.name" @keydown="keyEnter">
                    </div>
                    <div style=" position: absolute;top: 332px;left: 128px;">
                        <img src="../assets/xh.png" alt="" width="60">
                        <input type="password" class="inputCss" v-model="studentData.studentId" @keydown="keyEnter">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import src from '../assets/2-c.jpg'
// import qs from 'qs'
import { axiosPost } from '../util/request'
export default {
    data () {
        return {
            bgimg: false,
            pollCode: '',
            studentData: {}
        }
    },
    created() {
        this.imgOnload()
    },
    methods: {
        // 大图片加载策略，先加载缩略图，后加载真的图片
        imgOnload() {
            let image = new Image()
            image.src = src
            console.log('image', image)
            image.onload = () => {
                // 直接设置image.height 百分比无效
                image.style.width = '100%'
                image.style.height = '100%'
                document.querySelector('#login').appendChild(image)
                this.bgimg = true
            }
        },
        keyEnter(e) {
            if (e.keyCode == 13) {
                let url = '/login'
                console.log('pollCode', typeof this.pollCode)
                if (this.pollCode) {
                    if (this.pollCode == '951122') {
                        url = '/register'
                    } else {
                        window.alert('注册码错误！')
                        return
                    }
                }
                console.log('studentData', this.studentData)
                if (!this.studentData.name || !this.studentData.studentId) {
                    window.alert('请填写姓名和学号！')
                    return
                }
                
                axiosPost(url, this.studentData).then((res)=> {
                    if (res.code == 200) {
                        sessionStorage.setItem("token", "lemon")
                        this.$router.push({path: '/'})
                    } else {
                        window.alert(res.message)
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
.inputCss{
    font-size: 20px;
    border: none;
    border-bottom: 1px solid #777;
    margin-left: 16px;
    background: none;
}
.inputCss:focus{
    outline: none;
}
</style>