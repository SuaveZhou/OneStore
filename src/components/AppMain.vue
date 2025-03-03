<template>
  <main class="app-main">
    <a href="javascript:;" class="download-btn" @click="downloadApp">立即下载</a>
    <div class="slogan">
      <span>已累计服务1万+名用户，看视频就来OneStore</span>
    </div>
    <div class="app-screenshots">
      <img src="@/assets/1.png" alt="Screenshot 1">
      <img src="@/assets/2.png" alt="Screenshot 2">
      <img src="@/assets/3.png" alt="Screenshot 3">
    </div>
  </main>
</template>

<script>
export default {
  name: 'AppMain',
  methods: {
    downloadApp() {
      const userAgent = navigator.userAgent.toLowerCase();
      const isAndroid = userAgent.indexOf('android') > -1;
      const isIOS = /iphone|ipad|ipod|ios/.test(userAgent);
      const downloadUrl = isAndroid ? 'http://onestore.yuanhan.xyz/release/OneStore.apk' : 'http://onestore.yuanhan.xyz/release/OneStore.apk';
      window.location.href = downloadUrl;
    }
  }
}
</script>

<style scoped>
.app-main {
  text-align: center;
  padding: 20px;
}

.download-btn {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;
}

.download-btn:hover {
  background: #0056b3;
}

.slogan {
  margin-top: 20px;
  font-style: italic;
  color: #555;
}

.app-screenshots img {
  width: 100%;
  max-width: 150px;
  margin: 10px;
  border-radius: 10px;
  transition: transform 0.3s;
}

.app-screenshots img:hover {
  transform: scale(1.05);
}
</style> 