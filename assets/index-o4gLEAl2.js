(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `;var a=i;const o=({cartCount:e=0,isDetail:t=!1})=>`
    <header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
${t?`            <div class="flex items-center space-x-3">
              <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
            </div>`:`<h1 class="text-xl font-bold text-gray-900">
          <a href="/" data-link="">쇼핑몰</a>
        </h1>`}
        <div class="flex items-center space-x-2">
          <!-- 장바구니 아이콘 -->
          <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
            </svg>
            ${e>0?`
            <!-- 장바구니 개수 배지 -->
            <span id="cart-icon-btn" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
              ${e}
            </span>
            `:``}
          </button>
        </div>
      </div>
    </div>
  </header>  
`;var s=o;const c=(e=``,t=`price_asc`)=>`
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
    <!-- 검색창 -->
    <div class="mb-4">
      <div class="relative">
        <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="${e}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
    </div>
    
    <!-- 필터 옵션 -->
    <div class="space-y-3">

      <!-- 카테고리 필터 -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">카테고리:</label>
          <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button><span class="text-xs text-gray-500">&gt;</span><button data-breadcrumb="category1" data-category1="생활/건강" class="text-xs hover:text-blue-800 hover:underline">생활/건강</button>
        </div>
        <div class="space-y-2">
          <div class="flex flex-wrap gap-2">
            <button data-category1="생활/건강" data-category2="생활용품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
              생활용품
            </button>
            <button data-category1="생활/건강" data-category2="주방용품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
              주방용품
            </button>
            <button data-category1="생활/건강" data-category2="문구/사무용품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
              문구/사무용품
            </button>
          </div>
        </div>
      </div>
      
      <!-- 기존 필터들 -->
      <div class="flex gap-2 items-center justify-between">
        <!-- 페이지당 상품 수 -->
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">개수:</label>
          <select id="limit-select"
                  class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option value="10">
              10개
            </option>
            <option value="20" selected="">
              20개
            </option>
            <option value="50">
              50개
            </option>
            <option value="100">
              100개
            </option>
          </select>
        </div>
        <!-- 정렬 -->
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">정렬:</label>
          <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                       focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option value="price_asc" ${t===`price_asc`?`selected=""`:``}>가격 낮은순</option>
            <option value="price_desc" ${t===`price_desc`?`selected=""`:``}>가격 높은순</option>
            <option value="name_asc" ${t===`name_asc`?`selected=""`:``}>이름순</option>
            <option value="name_desc" ${t===`name_desc`?`selected=""`:``}>이름 역순</option>
          </select>
        </div>
      </div>
    </div>
  </div>
`,l=(e=20,t=``,n=`price_asc`)=>`
    <!-- 검색 및 필터 -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <!-- 검색창 -->
      <div class="mb-4">
        <div class="relative">
          <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="${t}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>
      <!-- 필터 옵션 -->
      <div class="space-y-3">
        <!-- 카테고리 필터 -->
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">카테고리:</label>
            <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
          </div>
          <!-- 1depth 카테고리 -->
          <div class="flex flex-wrap gap-2">
            <div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>
          </div>
          <!-- 2depth 카테고리 -->
        </div>
        <!-- 기존 필터들 -->
        <div class="flex gap-2 items-center justify-between">
          <!-- 페이지당 상품 수 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">개수:</label>
            <select id="limit-select"
                    class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="10" ${e===10?`selected=""`:``}>
                10개
              </option>
              <option value="20" ${e===20?`selected=""`:``}>
                20개
              </option>
              <option value="50" ${e===50?`selected=""`:``}>
                50개
              </option>
              <option value="100" ${e===100?`selected=""`:``}>
                100개
              </option>
            </select>
          </div>
          <!-- 정렬 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">정렬:</label>
            <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                         focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="price_asc" ${n===`price_asc`?`selected=""`:``}>가격 낮은순</option>
              <option value="price_desc" ${n===`price_desc`?`selected=""`:``}>가격 높은순</option>
              <option value="name_asc" ${n===`name_asc`?`selected=""`:``}>이름순</option>
              <option value="name_desc" ${n===`name_desc`?`selected=""`:``}>이름 역순</option>
            </select>
          </div>
        </div>
      </div>
    </div>
`;var u=l;const d=({product:e})=>`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
         data-product-id="${e.productId}">
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img src="${e.image}"
             alt="${e.title}"
             class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
             loading="lazy">
      </div>
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
            ${e.title}
          </h3>
          <p class="text-xs text-gray-500 mb-2">${e.brand||``}</p>
          <p class="text-lg font-bold text-gray-900">
            ${Number(e.lprice).toLocaleString()}원
          </p>
        </div>
        <!-- 장바구니 버튼 -->
        <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
               hover:bg-blue-700 transition-colors add-to-cart-btn" 
               data-product-id="${e.productId}">
          장바구니 담기
        </button>
      </div>
    </div>
  `;var f=d;const p=`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
        <div class="aspect-square bg-gray-200"></div>
        <div class="p-3">
        <div class="h-4 bg-gray-200 rounded mb-2"></div>
            <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
            <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
            <div class="h-8 bg-gray-200 rounded"></div>
        </div>
    </div>
`;var m=p;const h=({products:e,total:t,search:n=``,sort:r=`price_asc`,loadingMore:i=!1,hasMore:a=!0})=>`
  <main class="max-w-md mx-auto px-4 py-4">
    <!-- 검색 및 필터 -->
    ${c(n,r)}
    <!-- 상품 목록 -->
    <div class="mb-6">
      <div>
        <!-- 상품 개수 정보 -->
        <div class="mb-4 text-sm text-gray-600">
          총 <span class="font-medium text-gray-900">${t||0}개</span>의 상품
        </div>
        <!-- 상품 그리드 -->
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
          ${e.map(e=>f({product:e})).join(``)}
          ${i?m.repeat(4):``}
        </div>
        
        ${i?`
          <div class="text-center py-4">
            <div class="inline-flex items-center">
              <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
            </div>
          </div>
        `:a?`
          <div id="scroll-trigger" class="h-4"></div>
        `:`
          <div class="text-center py-4 text-sm text-gray-500">
            모든 상품을 확인했습니다
          </div>
        `}
      </div>
    </div>
  </main>
  `;var g=h;const _=(e=20,t=``,n=`price_asc`)=>`
  <main class="max-w-md mx-auto px-4 py-4">
  <!-- 검색 및 필터 -->
  ${u(e,t,n)}
    <!-- 상품 목록 -->
    <div class="mb-6">
      <div>
        <!-- 상품 그리드 -->
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
          <!-- 로딩 스켈레톤 -->
          ${m.repeat(4)}
        </div>
        
        <div class="text-center py-4">
          <div class="inline-flex items-center">
            <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
          </div>
        </div>
      </div>
    </div>
  </main>
`;var v=_;const y=(e,t)=>{let n=document.getElementById(`list-page-container`);if(n){let r=t.getHasMore(),i=t.getLoadingMore();n.innerHTML=e.loading?v(e.limit,e.search,e.sort):g({products:e.products,total:e.total,search:e.search,sort:e.sort,loadingMore:i,hasMore:r}),e.loading||(x(t),b(t))}},b=e=>{let t=document.body.getAttribute(`data-scroll-listener`);if(t)return;document.body.setAttribute(`data-scroll-listener`,`true`);let n=()=>{let t=window.pageYOffset||document.documentElement.scrollTop,n=window.innerHeight,r=document.documentElement.scrollHeight;t+n>=r-100&&e.getHasMore()&&!e.getLoadingMore()&&e.loadMoreData(t=>{y(t,e)})};window.addEventListener(`scroll`,n);let r=history.pushState;history.pushState=function(){document.body.removeAttribute(`data-scroll-listener`),window.removeEventListener(`scroll`,n),r.apply(history,arguments)}},x=e=>{let t=document.querySelector(`#limit-select`),n=document.querySelector(`#search-input`),r=document.querySelector(`#sort-select`);t&&(t.value=e.getLimit().toString(),t.addEventListener(`change`,t=>{let n=t.target,r=parseInt(n.value,10);isNaN(r)||e.setLimit(r,t=>{y(t,e)})})),n&&(n.value=e.getSearch(),n.addEventListener(`keydown`,t=>{if(t.key===`Enter`){t.preventDefault();let r=n.value;e.setSearch(r,t=>{y(t,e)})}})),r&&(r.value=e.getSort(),r.addEventListener(`change`,t=>{let n=t.target,r=n.value;e.setSort(r,t=>{y(t,e)})}))},S=()=>`
    <div id="list-page-container" class="min-h-screen">
      <!-- 로딩 상태가 여기에 표시됩니다 -->
    </div>
  `;async function C(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function ee(e){let t=await fetch(`/api/products/${e}`);return await t.json()}const w=`listPageFilters`;var T=class{constructor(){this.state={products:[],total:0,loading:!1},this.limit=20,this.search=``,this.sort=`price_asc`,this.currentPage=1,this.hasMore=!0,this.loadingMore=!1,this.loadFromLocalStorage()}loadFromLocalStorage(){try{let e=localStorage.getItem(w);if(e){let t=JSON.parse(e);typeof t.limit==`number`&&t.limit>0&&(this.limit=t.limit),typeof t.search==`string`&&(this.search=t.search),typeof t.sort==`string`&&t.sort&&(this.sort=t.sort)}}catch(e){console.warn(`Failed to load filter state from localStorage:`,e)}}saveToLocalStorage(){try{let e={limit:this.limit,search:this.search,sort:this.sort};localStorage.setItem(w,JSON.stringify(e))}catch(e){console.warn(`Failed to save filter state to localStorage:`,e)}}async loadData(e){this.state.loading=!0,this.currentPage=1,this.hasMore=!0,this.loadingMore=!1,e({...this.state,limit:this.limit,search:this.search,sort:this.sort});let t=await C({limit:this.limit,search:this.search,sort:this.sort,page:this.currentPage});this.state.products=t.products,this.state.total=t.pagination.total,this.hasMore=t.pagination.hasNext,this.state.loading=!1,e({...this.state,limit:this.limit,search:this.search,sort:this.sort})}async loadMoreData(e){if(!(this.loadingMore||!this.hasMore)){this.loadingMore=!0,this.currentPage+=1,e({...this.state,limit:this.limit,search:this.search,sort:this.sort,loadingMore:!0});try{let t=await C({limit:this.limit,search:this.search,sort:this.sort,page:this.currentPage});this.state.products=[...this.state.products,...t.products],this.state.total=t.pagination.total,this.hasMore=t.pagination.hasNext,this.loadingMore=!1,e({...this.state,limit:this.limit,search:this.search,sort:this.sort,loadingMore:!1})}catch(t){console.error(`Failed to load more data:`,t),this.loadingMore=!1,--this.currentPage,e({...this.state,limit:this.limit,search:this.search,sort:this.sort,loadingMore:!1})}}}async setLimit(e,t){this.limit!==e&&(this.limit=e,this.saveToLocalStorage(),await this.loadData(t))}async setSearch(e,t){let n=e.trim();this.search!==n&&(this.search=n,this.saveToLocalStorage(),await this.loadData(t))}async setSort(e,t){this.sort!==e&&(this.sort=e,this.saveToLocalStorage(),await this.loadData(t))}getLimit(){return this.limit}getSearch(){return this.search}getSort(){return this.sort}getHasMore(){return this.hasMore}getLoadingMore(){return this.loadingMore}};const E=`
  <main class="max-w-md mx-auto px-4 py-4">
    <div class="py-20 bg-gray-50 flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">상품 정보를 불러오는 중...</p>
      </div>
    </div>
  </main>
`;var D=E;const O=e=>`
    <div class="bg-white rounded-lg shadow-sm mb-6 product-card" data-product-id="${e.productId}">
      <!-- 상품 이미지 -->
      <div class="p-4">
        <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover product-detail-image">
        </div>
        <!-- 상품 정보 -->
        <div>
          <p class="text-sm text-gray-600 mb-1">${e.brand||``}</p>
          <h1 class="text-xl font-bold text-gray-900 mb-3">${e.title}</h1>
          <!-- 평점 및 리뷰 -->
          <div class="flex items-center mb-3">
            <div class="flex items-center">
              ${Array.from({length:5},(t,n)=>`<svg class="w-4 h-4 ${n<Math.floor(e.rating||4)?`text-yellow-400`:`text-gray-300`}" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                 </svg>`).join(``)}
            </div>
            <span class="ml-2 text-sm text-gray-600">${e.rating||4}.0 (${e.reviewCount||749}개 리뷰)</span>
          </div>
          <!-- 가격 -->
          <div class="mb-4">
            <span class="text-2xl font-bold text-blue-600">${Number(e.lprice).toLocaleString()}원</span>
          </div>
          <!-- 재고 -->
          <div class="text-sm text-gray-600 mb-4">
            재고 ${e.stock||107}개
          </div>
          <!-- 설명 -->
          <div class="text-sm text-gray-700 leading-relaxed mb-6">
            ${e.description||`${e.title}에 대한 상세 설명입니다. ${e.brand||`브랜드`}의 우수한 품질을 자랑하는 상품으로, 고객 만족도가 높은 제품입니다.`}
          </div>
        </div>
      </div>
      <!-- 수량 선택 및 액션 -->
      <div class="border-t border-gray-200 p-4">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-gray-900">수량</span>
          <div class="flex items-center">
            <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
               rounded-l-md bg-gray-50 hover:bg-gray-100">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
              </svg>
            </button>
            <input type="number" id="quantity-input" value="1" min="1" max="${e.stock||107}" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
              focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
               rounded-r-md bg-gray-50 hover:bg-gray-100">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- 액션 버튼 -->
        <button id="add-to-cart-btn" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
             hover:bg-blue-700 transition-colors font-medium add-to-cart-btn" 
             data-product-id="${e.productId}">
          장바구니 담기
        </button>
      </div>
    </div>
  `;var k=O,A=k;const j=e=>!e||e.length===0?``:`
    <div class="bg-white rounded-lg shadow-sm">
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
        <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 gap-3 responsive-grid">
          ${e.map(e=>`
            <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
              <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy">
              </div>
              <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
              <p class="text-sm font-bold text-blue-600">${Number(e.lprice).toLocaleString()}원</p>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `;var M=j,N=M;const P=({product:e,relatedProducts:t,loading:n})=>n?D:`
    <main class="max-w-md mx-auto px-4 py-4">
      <!-- 브레드크럼 -->
      <nav class="mb-4">
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <button class="breadcrumb-link hover:text-blue-600 transition-colors" data-category1="${e?.category1||``}">
            ${e?.category1||`카테고리`}
          </button>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <button class="breadcrumb-link hover:text-blue-600 transition-colors" data-category2="${e?.category2||``}">
            ${e?.category2||`상품`}
          </button>
        </div>
      </nav>
      
      <!-- 상품 상세 정보 -->
      ${e?A(e):``}
      
      <!-- 상품 목록으로 이동 -->
      <div class="mb-6">
        <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
          hover:bg-gray-200 transition-colors go-to-product-list">
          상품 목록으로 돌아가기
        </button>
      </div>
      
      <!-- 관련 상품 -->
      ${N(t)}
    </main>
  `;var F=P,I=F;const L=I;var R=L,te=class{constructor(){this.state={product:null,relatedProducts:[],loading:!1}}async loadProductData(e,t){this.state.loading=!0,t({...this.state});try{let n=await ee(e);if(this.state.product=n,n&&n.category2){let t=await C({limit:10,category2:n.category2});this.state.relatedProducts=t.products.filter(t=>t.productId!==e).slice(0,20)}this.state.loading=!1,t({...this.state})}catch(e){console.error(`Failed to load product data:`,e),this.state.loading=!1,this.state.product=null,this.state.relatedProducts=[],t({...this.state})}}getState(){return{...this.state}}};const z=`
<main class="max-w-md mx-auto px-4 py-4">
  <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
        </linearGradient>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
        </filter>
      </defs>
      
      <!-- 404 Numbers -->
      <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
      
      <!-- Icon decoration -->
      <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
      <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
      <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
      <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
      
      <!-- Message -->
      <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
      
      <!-- Subtle bottom accent -->
      <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
    </svg>
    
    <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
  </div>
</main>
`;var B=z,V=class{constructor(){this.routes={},this.currentRoute=null,this.initialized=!1,window.addEventListener(`popstate`,()=>{this.navigate(window.location.pathname,!1)})}init(){this.initialized||(this.initialized=!0,this.navigate(window.location.pathname,!1))}addRoute(e,t){this.routes[e]=t}navigate(e,t=!0){t&&window.history.pushState({},``,e),this.currentRoute=e;let n=this.findRoute(e);if(n)n.handler(n.params);else{let e=this.routes[`*`];e&&e()}}findRoute(e){if(this.routes[e])return{handler:this.routes[e],params:{}};for(let t in this.routes)if(t.includes(`:`)){let n=this.matchRoute(t,e);if(n)return{handler:this.routes[t],params:n}}return null}matchRoute(e,t){let n=e.split(`/`),r=t.split(`/`);if(n.length!==r.length)return null;let i={};for(let e=0;e<n.length;e++){let t=n[e],a=r[e];if(t.startsWith(`:`)){let e=t.slice(1);i[e]=a}else if(t!==a)return null}return i}getCurrentRoute(){return this.currentRoute}};const H=new V;var U=class{constructor(){this.state={items:[],totalCount:0,totalPrice:0},this.subscribers=[]}subscribe(e){return this.subscribers.push(e),e(this.state),()=>{this.subscribers=this.subscribers.filter(t=>t!==e)}}notify(){this.subscribers.forEach(e=>e(this.state))}addItem(e){let t=this.state.items.findIndex(t=>t.productId===e.productId);return t>=0?!1:(this.state.items.push({...e}),this.updateTotals(),this.notify(),!0)}removeItem(e){this.state.items=this.state.items.filter(t=>t.productId!==e),this.updateTotals(),this.notify()}updateItemQuantity(e,t){let n=this.state.items.findIndex(t=>t.productId===e);n>=0&&(t<=0?this.removeItem(e):(this.state.items[n].quantity=t,this.updateTotals(),this.notify()))}clearCart(){this.state.items=[],this.updateTotals(),this.notify()}updateTotals(){this.state.totalCount=this.state.items.reduce((e,t)=>e+t.quantity,0),this.state.totalPrice=this.state.items.reduce((e,t)=>e+t.price*t.quantity,0)}getCartCount(){return this.state.totalCount}getState(){return{...this.state}}hasItem(e){return this.state.items.some(t=>t.productId===e)}getItemQuantity(e){let t=this.state.items.find(t=>t.productId===e);return t?t.quantity:0}};const W=new U,G=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-DvH8zzVn.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));G().then($);let K=null,q=null;function J(e,t=!1){let n=W.getCartCount();document.body.querySelector(`#root`).innerHTML=`
  <div class="bg-gray-50">
    ${s({cartCount:n,isDetail:t})}
    <div id="page-content">
      ${e}
    </div>
    ${a}
  </div>
  `}function Y(){J(S()),K||=new T,K.loadData(e=>{y(e,K)})}function X(e){let t=e.productId;J(R({loading:!0}),!0),q=new te,q.loadProductData(t,e=>{let t=R({product:e.product,relatedProducts:e.relatedProducts,loading:e.loading}),n=document.getElementById(`page-content`);n&&(n.innerHTML=t),ne()})}function Z(){J(B)}function Q(){document.addEventListener(`click`,e=>{let t=e.target;if(t&&t.classList.contains(`add-to-cart-btn`)){e.preventDefault();let n=t.closest(`.product-card`);if(n){let e=n.getAttribute(`data-product-id`)||t.getAttribute(`data-product-id`),r=n.querySelector(`h3`)?.textContent||n.querySelector(`h1`)?.textContent||``,i=n.querySelector(`img`)?.src||``,a=n.querySelector(`.text-lg, .text-2xl`)?.textContent||`0`,o=parseInt(a.replace(/[^0-9]/g,``))||0,s=document.querySelector(`#quantity-input`),c=s&&parseInt(s.value)||1;e&&r&&o>0&&W.addItem({productId:e,title:r,image:i,price:o,quantity:c})}}})}function ne(){let e=document.querySelector(`.go-to-product-list`);e&&e.addEventListener(`click`,e=>{e.preventDefault(),H.navigate(`/`)});let t=document.querySelectorAll(`.breadcrumb-link`);t.forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault(),H.navigate(`/`)})});let n=document.querySelectorAll(`.related-product-card`);n.forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.productId;n&&H.navigate(`/product/${n}`)})});let r=document.getElementById(`quantity-decrease`),i=document.getElementById(`quantity-increase`),a=document.getElementById(`quantity-input`);r&&i&&a&&(r.addEventListener(`click`,()=>{let e=parseInt(a.value);e>1&&(a.value=e-1)}),i.addEventListener(`click`,()=>{let e=parseInt(a.value),t=parseInt(a.max);e<t&&(a.value=e+1)}))}async function $(){H.addRoute(`/`,Y),H.addRoute(`/product/:productId`,X),H.addRoute(`*`,Z),H.init(),W.subscribe(e=>{let t=document.querySelector(`header`);if(t){let n=H.getCurrentRoute().startsWith(`/product/`);t.outerHTML=s({cartCount:e.totalCount,isDetail:n})}}),Q(),document.addEventListener(`click`,e=>{if(e.target.closest(`[data-link]`)){e.preventDefault();let t=e.target.closest(`[data-link]`),n=t.getAttribute(`href`)||`/`;H.navigate(n)}let t=e.target.closest(`.product-card`);if(t&&(e.target.closest(`.product-image`)||e.target.closest(`.product-info`))){e.preventDefault();let n=t.dataset.productId;n&&H.navigate(`/product/${n}`)}})}G().then($);