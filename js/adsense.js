/**
 * Google AdSense 统一配置文件
 *
 * 使用步骤：
 * 1. 申请 AdSense 后，把下面的 clientId 改成你的 ca-pub-XXXXXXXXXXXXXXXX
 * 2. 在 AdSense 后台创建广告单元，把 slot 编号填到 AD_SLOTS 里
 *    — 如果你只先用了一两个广告位，多余的 slotKey 可以删掉或留空
 * 3. HTML 里放 <div id="ad-xxx"></div> 占位，再调用 renderAd('ad-xxx', slotKey)
 *
 * 本地预览：广告加载不出来是正常的，需要在真实域名 + Google 收录后才生效。
 * 测试可以把下面 clientId 留空，renderAd 会自动跳过（不报错）。
 */

(function() {
  'use strict';

  // ================================================================
  // ⬇️ 需要你填写的配置（全部改完再上线）
  // ================================================================
  const ADSENSE_CONFIG = {
    // AdSense Publisher ID，格式 ca-pub-XXXXXXXXXXXXXXXX
    // 没拿到之前可以先留空字符串，广告位会自动隐藏不报错
    clientId: '',

    // 广告单元配置
    // key 随便起（对应 renderAd 的第二个参数），value 填 AdSense 后台给的 slot 编号
    // 类型参考：https://support.google.com/adsense/answer/6002507
    slots: {
      // 主页：Hero 和 Apps 之间的横向横幅
      index_hero_banner: '',
      // 主页：Apps 和 Games 之间的原生信息流
      index_native: '',
      // 详情页：描述下方、截图上方的文章内广告
      detail_inarticle: '',
      // 所有页面：Footer 上方的横向横幅
      footer_banner: ''
    }
  };
  // ================================================================
  // ⬆️ 配置到此结束，下面是逻辑，一般不用改
  // ================================================================

  let initialized = false;

  /**
   * 加载 AdSense 官方脚本（只加载一次）
   */
  function loadAdSenseScript() {
    if (initialized) return Promise.resolve();
    if (!ADSENSE_CONFIG.clientId) return Promise.reject(new Error('AdSense clientId not configured'));

    return new Promise((resolve, reject) => {
      initialized = true;
      (window.adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: ADSENSE_CONFIG.clientId,
        enable_page_level_ads: true,
        use_containers: true
      });

      // 已有的 <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      // 如果你在 HTML 里已经手动引了官方脚本，这段可以省掉；这里做成动态加载更方便
      if (!document.querySelector('script[data-adsense="true"]')) {
        const s = document.createElement('script');
        s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        s.async = true;
        s.setAttribute('data-adsense', 'true');
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      } else {
        resolve();
      }
    });
  }

  /**
   * 在指定容器里渲染指定广告位
   * @param {string} containerId 目标 div 的 id（比如 'ad-index-hero'）
   * @param {string} slotKey     ADSENSE_CONFIG.slots 里的 key
   */
  function renderAd(containerId, slotKey) {
    // 配置没填 → 安静跳过
    if (!ADSENSE_CONFIG.clientId) {
      console.info('[AdSense] clientId not set, skip ad "' + slotKey + '"');
      return;
    }
    const slotId = ADSENSE_CONFIG.slots[slotKey];
    if (!slotId) {
      console.info('[AdSense] slot "' + slotKey + '" not configured, skip');
      return;
    }
    const container = document.getElementById(containerId);
    if (!container) return;

    loadAdSenseScript().then(() => {
      const ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.display = 'block';
      ins.setAttribute('data-ad-client', ADSENSE_CONFIG.clientId);
      ins.setAttribute('data-ad-slot', slotId);
      ins.setAttribute('data-ad-format', 'auto');
      ins.setAttribute('data-full-width-responsive', 'true');

      container.innerHTML = '';
      container.appendChild(ins);

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn('[AdSense] push failed:', e);
      }
    }).catch(() => { /* 加载失败安静忽略 */ });
  }

  // 暴露到全局（所有页面都能直接用）
  window.ADSENSE_CONFIG = ADSENSE_CONFIG;
  window.renderAd = renderAd;
})();
