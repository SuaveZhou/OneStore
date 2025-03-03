<template>
  <header class="app-header">
    <div class="logo">
      <img src="@/assets/logo.png" alt="OneStore Logo">
    </div>
    <div class="app-info">
      <h1>OneStore</h1>
      <p>版本：v3.1.5</p>
      <p>免费观看电视剧、电影、动漫的工具...</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.logo img {
  width: 80px;
  border-radius: 50%;
}

.app-info h1 {
  font-size: 2em;
  margin: 0;
}
</style> 