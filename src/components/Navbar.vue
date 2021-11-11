<template>
  <header>
  <router-link to="/" class="nav-brand">
    <img src="https://i.imgur.com/BlJvquE.png" class="ac-logo" />
  </router-link>
  <!--   加上導覽列 -->
  <input type="checkbox" class="nav-toggle" id="nav-toggle">
  <nav class="nav">
    <!-- 導覽列項目 -->
    <ul class="nav-items">
      <li class="nav-item"><a class="nav-link" href="#">男款</a></li>
      <hr>
      <li class="nav-item"><a class="nav-link" href="#">女款</a></li>
      <hr>
      <li class="nav-item"><a class="nav-link" href="#">最新消息</a></li>
      <hr>
      <li class="nav-item"><a class="nav-link" href="#">聯絡我們</a></li>
      <hr>
      <li class="nav-item"><a class="nav-link" href="#">客製商品</a></li>
      <hr>
    </ul>
    <div class="nav-icons">
      <a href="#"><img class="nav-icon" src="https://i.ibb.co/4JLfqgS/search-2x.png" alt=""></a>
      <a href="#"><img class="nav-icon" src="https://i.ibb.co/qm1FbGf/cart-2x.png" alt=""></a>
      <a href="#"><img class="nav-icon" src="https://i.ibb.co/Lg5j4xY/moon-2x.png" alt=""></a>
    </div>
  </nav>

  <label for="nav-toggle" class="nav-toggle-label">
    <img src="https://i.imgur.com/dyOCgER.png" alt="hamburger" class="hamburger" />
  </label>
</header>
</template>

<style lang="scss" scoped>
  @import "./../assets/scss/header.scss"
</style>