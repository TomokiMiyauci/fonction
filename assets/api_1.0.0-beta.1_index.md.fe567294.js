import{o as s,c as a,a as n}from"./app.02031c5c.js";const e='{"title":"API","description":"","frontmatter":{"editLink":false},"headers":[{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"add","slug":"add"},{"level":3,"title":"divide","slug":"divide"},{"level":3,"title":"multiply","slug":"multiply"},{"level":3,"title":"subtract","slug":"subtract"},{"level":2,"title":"Types","slug":"types"}],"relativePath":"api/1.0.0-beta.1/index.md","lastUpdated":1620210127989}',p={},t=n('<h1 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1><h2 id="functions"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h2><h3 id="add"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Adds first argument and second argument.</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code>add<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">undefined</span></span> <span class="token operator">?</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">?</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token builtin">never</span>\n</code></pre></div><h3 id="divide"><a class="header-anchor" href="#divide" aria-hidden="true">#</a> divide</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Divide input two arguments.</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code>divide<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">undefined</span></span> <span class="token operator">?</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">?</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token builtin">never</span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">Remark</p><p>Note that when use curry, divide second argument from first argument.</p></div><h3 id="multiply"><a class="header-anchor" href="#multiply" aria-hidden="true">#</a> multiply</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Multiplies first argument and second argument.</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code>multiply<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">undefined</span></span> <span class="token operator">?</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">?</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token builtin">never</span>\n</code></pre></div><h3 id="subtract"><a class="header-anchor" href="#subtract" aria-hidden="true">#</a> subtract</h3><p class="my-1"><small>Added from <a href="./../1.0.0/">1.0.0</a></small></p><p class="desc">Subtracts second argument from first argument.</p><p><strong>Signature:</strong></p><div class="language-ts"><pre><code>subtract<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">undefined</span></span> <span class="token operator">?</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span> <span class="token operator">?</span> <span class="token builtin">number</span> <span class="token operator">:</span> <span class="token builtin">never</span>\n</code></pre></div><h2 id="types"><a class="header-anchor" href="#types" aria-hidden="true">#</a> Types</h2>',24);p.render=function(n,e,p,o,l,r){return s(),a("div",null,[t])};export default p;export{e as __pageData};
