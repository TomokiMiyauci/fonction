import{o as n,c as a,a as s,b as p}from"./app.77d74c8b.js";const t='{"title":"multiply variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"multiply variable","slug":"multiply-variable"},{"level":2,"title":"Example 1","slug":"example-1"},{"level":2,"title":"Example 2","slug":"example-2"},{"level":2,"title":"Example 3","slug":"example-3"}],"relativePath":"api/multiply/index.md","lastUpdated":1618666489920}',e={},o=p('<h2 id="multiply-variable"><a class="header-anchor" href="#multiply-variable" aria-hidden="true">#</a> multiply variable</h2><p>Multiplies first argument and second argument.</p><p><b>Signature:</b></p><div class="language-typescript"><pre><code>multiply<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token punctuation">(</span>a<span class="token operator">:</span> bigint<span class="token punctuation">,</span> b<span class="token operator">:</span> bigint<span class="token punctuation">)</span><span class="token operator">:</span> bigint<span class="token punctuation">;</span>\n    <span class="token punctuation">(</span>a<span class="token operator">:</span> bigint<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> bigint<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> bigint<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="example-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h2><div class="language-ts"><pre><code><span class="token comment">// Basic</span>\n<span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>\n\n</code></pre></div><h2 id="example-2"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example 2</h2><div class="language-ts"><pre><code><span class="token comment">// Bigint</span>\n<span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">2n</span><span class="token punctuation">,</span> <span class="token number">3n</span><span class="token punctuation">)</span> <span class="token comment">// 6n</span>\n\n</code></pre></div><h2 id="example-3"><a class="header-anchor" href="#example-3" aria-hidden="true">#</a> Example 3</h2><div class="language-ts"><pre><code><span class="token comment">// Curry</span>\n<span class="token keyword">const</span> double <span class="token operator">=</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token function">double</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// 8</span>\n\n</code></pre></div>',10);e.render=function(p,t,e,l,c,i){return n(),a("div",null,[s(" Do not edit this file. It is automatically generated by API Documenter. "),o])};export default e;export{t as __pageData};
