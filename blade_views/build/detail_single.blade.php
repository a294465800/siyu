<include src="../template/normalHeader.html">
    @title = 查看合同 - HT23131232132
</include>

<style>
    html,
    body {
        position: relative;
        height: 100%;
    }

    body {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #000;
        margin: 0;
        padding: 0;
    }

    .swiper-container {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .hetong-img {
        height: 85%;
    }
</style>
<link rel="stylesheet" type="text/css" href="../../plugins/swiper/swiper-4.2.2.min.css">

<!-- Swiper -->
<div class="swiper-container" style="position: fixed;top: 0;left: 0">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img class="hetong-img" src="http://www.m555.com/mb_pic/2007/09/20070917093919_6a0709.jpg" alt="合同一">
        </div>
        <div class="swiper-slide">
            <img class="hetong-img" src="http://www.biaobaiju.com/uploads/20180302/13/1519970262-jvdwmLgAzy.jpg" alt="合同二">
        </div>
        <div class="swiper-slide">
            <img class="hetong-img" src="http://www.m555.com/mb_pic/2007/09/20070917093919_6a0709.jpg" alt="合同一">
        </div>
        <div class="swiper-slide">
            <img class="hetong-img" src="http://www.biaobaiju.com/uploads/20180302/13/1519970262-jvdwmLgAzy.jpg" alt="合同二">
        </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
</div>

<!-- Swiper JS -->
<script src="../../plugins/swiper/swiper-4.2.2.min.js"></script>

<include src="../template/footer.html">
    @js = ../../src/js/build_detail_single.js
</include>